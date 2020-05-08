package com.dobybros.hulkadmin.controllers

import chat.logs.LoggerEx
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONArray
import com.dobybros.hulkadmin.auth.LoginSevice
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.NginxConfig
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.data.DockerStatus
import com.docker.data.ServiceVersion
import com.docker.file.adapters.GridFSFileHandler
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.storage.adapters.impl.ServersServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import org.apache.commons.io.FileUtils
import org.apache.commons.io.IOUtils
import org.apache.commons.lang.StringUtils
import org.apache.tomcat.util.ExceptionUtils
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import script.file.FileAdapter

import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.servlet.http.HttpSession
import java.util.concurrent.ConcurrentHashMap

@RestController
@RequestMapping("open")
@CrossOrigin
public class AuthorizeController {
    private static final String TAG = AuthorizeController.class.getSimpleName()
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    LoginSevice loginSevice
    @Autowired
    GridFSFileHandler fileAdapter
    @Autowired
    NginxConfig nginxConfig
    @Autowired
    ServersServiceImpl serversService
    @Autowired
    ServiceVersionServiceImpl serviceVersionService
    @Autowired
    DockerStatusServiceImpl dockerStatusService
    private final String GROOVYCLOUYDSERVERS1 = "groovycloud.server."

    private Map<String, List<MultipartFile>> jarFiles = new ConcurrentHashMap<>()
    Properties groovyCloudProp

    AuthorizeController() {
        InputStream inStream = DeployController.class.getClassLoader().getResourceAsStream("groovycloud.properties");
        groovyCloudProp = new Properties();
        groovyCloudProp.load(inStream);
    }

    @PostMapping("/login")
    def login(@RequestBody Map<String, String> body, HttpServletResponse response, HttpServletRequest request) {
        String token = loginSevice.login(body.get("username"), body.get("password"))
        response.addCookie(new Cookie("authorization", token))
        return [
                "uuid" : body.get("username"),
                "name" : body.get("username"),
                "token": token
        ]
    }

    @PostMapping("/groovyzips")
    def uploadGroovys(@RequestParam("file") MultipartFile file) {
        if (file != null) {
            String parentFileStr = System.getProperty("user.dir") + File.separator + "groovysUpload"
            try {
                File groovyFile = new File(parentFileStr + File.separator + "example")
                if (!groovyFile.exists()) {
                    groovyFile.mkdirs()
                }
                file.transferTo(groovyFile)
                com.dobybros.hulkadmin.utils.FileUtils.unZip(groovyFile, parentFileStr + File.separator + "unzip")
                File unzipFile = new File(parentFileStr + File.separator + "unzip")
                if (unzipFile.exists()) {
                    File[] unzipFiles = unzipFile.listFiles()
                    if (unzipFiles.length == 1) {
                        if (unzipFiles[0].getName().equals("scripts")) {
                            File[] groovyFiles = unzipFiles[0].listFiles()
                            for (File theGroovyFile : groovyFiles) {
                                uploadGroovyZip(FileUtils.openInputStream(new File(theGroovyFile.getAbsolutePath() + File.separator + "groovy.zip")), theGroovyFile.getName())
                            }
                        }
                    }
                }
            } catch (Throwable throwable) {
                throwable.printStackTrace()
                LoggerEx.error(TAG, "Upload groovys failed, err: " + org.apache.commons.lang.exception.ExceptionUtils.getFullStackTrace(throwable))
            } finally {
                File parentFile = new File(parentFileStr)
                FileUtils.deleteQuietly(parentFile)
            }

        }
    }

    @PostMapping("/groovyzip")
    def uploadGroovy(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version) {
        if (file != null) {
            String serviceNameVersion = null
            if (version != null) {
                String versionNumber = null
                String[] versionStrs = version.split(":")
                if (versionStrs.length > 1) {
                    versionNumber = versionStrs[1].trim()
                } else {
                    versionNumber = versionStrs[0].trim()
                }
                if (versionNumber != null) {
                    if (versionNumber != "0") {
                        serviceNameVersion = serviceName + "_v" + versionNumber
                    } else {
                        serviceNameVersion = serviceName
                    }
                }
                Document document = serversService.getServerConfig(serviceNameVersion)
                if (document == null) {
                    throw new GeneralException(5000, "Cant find config of " + serviceNameVersion + ", need configure first")
                }
                uploadGroovyZip(file.getInputStream(), serviceNameVersion)
            }
        }
    }

    private def uploadGroovyZip(InputStream inputStream, String serviceNameVersion) {
        String thePath = applicationConfig.scriptRemotePath + serviceNameVersion + "/groovy.zip"
        FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
        fileAdapter.saveFile(inputStream, path, FileAdapter.FileReplaceStrategy.REPLACE);
    }

    @PostMapping("/web/{nginxName}")
    def uploadWebFile(@PathVariable String nginxName, @RequestParam("file") MultipartFile file,
                      @RequestParam(value = "w") String webName, @RequestParam(value = "p") String projectName) {
        if (!StringUtils.isEmpty(webName) && !StringUtils.is(projectName)) {
            Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
            if (theNginxMap != null) {
                String nginxAccount = theNginxMap.get("account")
                String nginxPort = theNginxMap.get("port")
                String nginxPasswd = theNginxMap.get("passwd")
                String nginxIp = theNginxMap.get("ip")
                String wwwPath = theNginxMap.get("webPath")
                String projectPath = wwwPath + "/" + webName + "/" + projectName
                String fileName = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
                SftpClient sftpClient = new SftpClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                sshClient.excuteCommand("sudo mkdir -p " + projectPath)
                sftpClient.uploadByStream(projectPath, fileName + ".zip", file.inputStream)
                sshClient.excuteCommand("sudo unzip -d " + projectPath + "/" + fileName + " " + projectPath + "/" + fileName + ".zip")
                sshClient.excuteCommand("sudo rm -rf " + projectPath + "/" + fileName + ".zip")
            } else {
                throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
            }
        }
    }

    @GetMapping("downzip")
    def downloadGroovy(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "s", required = true) String serviceName, @RequestParam(value = "v", required = true) String version) {
        String versionNumber = null
        if (version != null) {
            String[] versionStrs = version.split(":")
            if (versionStrs.length > 1) {
                versionNumber = versionStrs[1].trim()
            } else {
                versionNumber = versionStrs[0].trim()
            }
        }
        if (versionNumber != null) {
            String thePath = null
            if (versionNumber != "0") {
                thePath = applicationConfig.scriptRemotePath + serviceName + "_v" + versionNumber + "/groovy.zip"
            } else {
                thePath = applicationConfig.scriptRemotePath + serviceName + "/groovy.zip"
            }
            FileAdapter.PathEx pathEx = new FileAdapter.PathEx(thePath)
            FileAdapter.FileEntity entity = fileAdapter.getFileEntity(pathEx)
            response.setContentType("application/zip");
            if (entity != null) {
                response.setContentLength((int) entity.getLength())
                response.addHeader("Content-Disposition", "attachment;fileName=" + serviceName + "_v" + versionNumber + ".zip");
                fileAdapter.readFile(pathEx, response.getOutputStream())
            }
        }
    }

    @PostMapping("/basejars")
    def uploadBaseJars(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "i") List<String> serverIps) {
        if (serverIps != null && !serverIps.isEmpty()) {
            for (String ip : serverIps) {
                List<MultipartFile> multipartFileList = jarFiles.get(ip)
                if (multipartFileList == null) {
                    multipartFileList = new ArrayList<>()
                    List multipartFileListOld = jarFiles.putIfAbsent(ip, multipartFileList)
                    if (multipartFileListOld != null) {
                        multipartFileList = multipartFileListOld
                    }
                }
                multipartFileList.add(file)
                IOUtils.copy(file.getInputStream(), new FileOutputStream(new File(file.getOriginalFilename())))
            }
        }
    }

    @PostMapping("/allbasejars")
    def uploadAllBaseJars(HttpServletRequest request) {
        try {
            if (!jarFiles.isEmpty()) {
                for (String ip : jarFiles.keySet()) {
                    SftpClient sftpClient
                    List<MultipartFile> multipartFileList = jarFiles.get(ip)
                    try {
                        if (multipartFileList != null && !multipartFileList.isEmpty()) {
                            String reployJar = groovyCloudProp.getProperty("redeploy.jars")
                            List redeployJars = null
                            if (reployJar != null) {
                                redeployJars = Arrays.asList(reployJar.split(","))
                            }
                            String contentStr = ""
                            String tempDir = "groovyCloud_jars" + TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd")
                            for (MultipartFile file : multipartFileList) {

                                List<DockerStatus> dockerStatuses = dockerStatusService.getDockerStatusesByIp(ip)
                                if (dockerStatuses != null && !dockerStatuses.isEmpty()) {
                                    for (DockerStatus dockerStatus : dockerStatuses) {
                                        String serverType = dockerStatus.getServerType()
                                        if (serverType != "cloud_win") {
                                            if (contentStr == "") {
                                                contentStr += "\\cp " + groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir + "/" + file.getOriginalFilename() + " " + groovyCloudProp.getProperty("groovycloud.server.project.path") + serverType + "/lib"
                                            } else {
                                                contentStr += "\n\\cp " + groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir + "/" + file.getOriginalFilename() + " " + groovyCloudProp.getProperty("groovycloud.server.project.path") + serverType + "/lib"
                                            }
                                            if (redeployJars.contains(file.getOriginalFilename())) {
                                                contentStr += "\n\\cp " + groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir + "/" + file.getOriginalFilename() + " " + groovyCloudProp.getProperty("groovycloud.server.project.path") + serverType
                                            }
                                        }
                                    }
                                }
                            }
                            File file1 = new File("update.sh")
                            if (!file1.exists()) {
                                file1.createNewFile()
                            }
                            FileUtils.writeStringToFile(file1, contentStr, "utf8");
                            String address = groovyCloudProp.getProperty(GROOVYCLOUYDSERVERS1 + ip)
                            if (address != null) {
                                address = address.replaceAll(" ", "")
                                String[] addresses = address.split(",")
                                String port = addresses[1]
                                String account = addresses[2]
                                String passwd = addresses[3]
                                if (StringUtils.isEmpty(port)) {
                                    port = "22"
                                }
                                if (StringUtils.isEmpty(account)) {
                                    account = ""
                                }
                                if (StringUtils.isEmpty(passwd)) {
                                    passwd = ""
                                }
                                sftpClient = new SftpClient(ip, account, passwd, Integer.valueOf(port))
                                ShellClient sshClient = new ShellClient(ip, account, passwd, Integer.valueOf(port))
                                sshClient.excuteCommand("sudo mkdir -p " + groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir)
                                sftpClient.uploadByStream(groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir, "update.sh", new FileInputStream(new File("update.sh")))
                                for (MultipartFile file : multipartFileList) {
                                    sftpClient.uploadByStream(groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir, file.getOriginalFilename(), new FileInputStream(new File(file.getOriginalFilename())))
                                }
                                ShellClient sshClient1 = new ShellClient(ip, account, passwd, Integer.valueOf(port))
                                sshClient1.excuteCommand("sudo sh " + groovyCloudProp.getProperty("groovycloud.server.project.path") + tempDir + "/update.sh")
                            }
                        }
                    } catch (Throwable t) {
                        throw new GeneralException(500, "serverIP upload jar failed, ip: " + ip + " ,errMSg: " + org.apache.commons.lang.exception.ExceptionUtils.getFullStackTrace(t))
                    } finally {
                        try {
                            FileUtils.deleteQuietly(new File("update.sh"))
                        } catch (Throwable t) {

                        }
                        if (sftpClient != null) {
                            sftpClient.close()
                        }
                    }
                }
            }
        } catch (Throwable t) {
            throw t
        } finally {
            for (String ip : jarFiles.keySet()) {
                List<MultipartFile> multipartFileList = jarFiles.get(ip)
                for (MultipartFile file : multipartFileList) {
                    try {
                        FileUtils.deleteQuietly(new File(file.getOriginalFilename()))
                    } catch (Throwable t) {

                    }
                }
            }
            jarFiles.clear()
        }
    }

    @GetMapping("downzips")
    def downloadAllGroovy(HttpServletResponse response) {
        File directory = new File(System.getProperty("user.dir") + File.separator + "scripts");
        List<FileAdapter.FileEntity> files = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx("/"), null, true);
        for (FileAdapter.FileEntity entity : files) {
            FileAdapter.PathEx path = new FileAdapter.PathEx(entity.getAbsolutePath());
            FileOutputStream outputStream = FileUtils.openOutputStream(new File(directory.getAbsolutePath() + entity.getAbsolutePath()))
            try {
                fileAdapter.readFile(path, outputStream);
            } finally {
                outputStream.close()
            }
            LoggerEx.info(TAG, "Download " + entity.getAbsolutePath() + " success!!!")
        }
        String zipFilePath = System.getProperty("user.dir") + File.separator + TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + ".zip"
        com.dobybros.hulkadmin.utils.FileUtils.zipFiles(directory.getAbsolutePath(), zipFilePath)
        FileInputStream zipfileStream = new FileInputStream(zipFilePath)
        response.addHeader("Content-Disposition", "attachment;fileName=goorvys.zip");
        try {
            IOUtils.copy(zipfileStream, response.getOutputStream())
        } finally {
            response.outputStream.close()
            zipfileStream.close()
        }
        FileUtils.deleteQuietly(new File(zipFilePath))
        FileUtils.deleteQuietly(directory)
    }

    @GetMapping("downzips/{input}")
    def downloadGroovyByInput(HttpServletResponse response, @PathVariable List input) {
        List allServiceVersion = getNeedDownServiceVersion(input)
        if (allServiceVersion != null) {
            File directory = new File(System.getProperty("user.dir") + File.separator + "scripts");
            List<FileAdapter.FileEntity> files = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx("/"), null, true);
            for (FileAdapter.FileEntity entity : files) {
                if (allServiceVersion.contains(entity.getAbsolutePath().split("/")[2])) {
                    FileAdapter.PathEx path = new FileAdapter.PathEx(entity.getAbsolutePath());
                    FileOutputStream outputStream = FileUtils.openOutputStream(new File(directory.getAbsolutePath() + entity.getAbsolutePath()))
                    try {
                        fileAdapter.readFile(path, outputStream);
                    } finally {
                        outputStream.close()
                    }
                }
            }
            String zipFilePath = System.getProperty("user.dir") + File.separator + TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + ".zip"
            com.dobybros.hulkadmin.utils.FileUtils.zipFiles(directory.getAbsolutePath(), zipFilePath)
            FileInputStream zipfileStream = new FileInputStream(zipFilePath)
            response.addHeader("Content-Disposition", "attachment;fileName=goorvys.zip");
            try {
                IOUtils.copy(zipfileStream, response.getOutputStream())
            } finally {
                response.outputStream.close()
                zipfileStream.close()
            }
            FileUtils.deleteQuietly(new File(zipFilePath))
            FileUtils.deleteQuietly(directory)
        }
    }

    @GetMapping("/web/{nginxName}/{webName}/{projectName}/{version}")
    def downWeb(@PathVariable String nginxName, @PathVariable String webName, @PathVariable String projectName, @PathVariable String version, HttpServletResponse response) {
        if (version == "undefined") {
            throw new GeneralException(5001, "Version cant be null")
        }
        Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
        if (theNginxMap != null) {
            String nginxAccount = theNginxMap.get("account")
            String nginxPort = theNginxMap.get("port")
            String nginxPasswd = theNginxMap.get("passwd")
            String nginxIp = theNginxMap.get("ip")
            String wwwPath = theNginxMap.get("webPath")
            String projectPath = wwwPath + "/" + webName + "/" + projectName
            ShellClient shellClient = null
            SftpClient sftpClient = null
            InputStream inputStream = null
            String projectVersionName = webName + "-" + projectName + "-" + version
            try {
                shellClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                shellClient.excuteCommand("sudo cp -r " + projectPath + "/" + version + " ./" + projectVersionName)
                shellClient.excuteCommand("sudo zip -r " + projectVersionName + ".zip " + projectVersionName + "/*")
                sftpClient = new SftpClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                response.setContentType("application/zip");
                response.addHeader("Content-Disposition", "attachment;fileName=" + projectVersionName + ".zip");
                inputStream = sftpClient.download(projectVersionName + ".zip")
                IOUtils.copy(inputStream, response.getOutputStream())
            } catch (Throwable throwable) {
                LoggerEx.error(TAG, "Download web error,err: " + org.apache.commons.lang.exception.ExceptionUtils.getFullStackTrace(throwable))
                throwable.printStackTrace()
            } finally {
                if (shellClient != null) {
                    shellClient.excuteCommand("sudo rm -rf " + projectVersionName + ".zip")
                    shellClient.excuteCommand("sudo rm -rf " + projectVersionName)
                }
                if (inputStream != null) {
                    inputStream.close()
                }
                if (sftpClient != null) {
                    sftpClient.close()
                }
            }
        } else {
            throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
        }
    }

    @GetMapping("downconfigs")
    def downloadAllConfig(HttpServletResponse response) {
        List<Document> configs = serversService.getServerConfigs()
        File file = new File(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "allconfig");
        FileOutputStream outputStream = FileUtils.openOutputStream(file)
        String flag = "\r\n"
        outputStream.write(("[" + flag).getBytes("utf-8"))
        for (int i = 0; i < configs.size(); i++) {
            Document document = configs.get(i)
            outputStream.write(("{" + flag).getBytes("utf-8"))
            int count = 0
            for (String key : document.keySet()) {
                if (count == document.size() - 1) {
                    outputStream.write(("\"" + key + "\"" + ":" + "\"" + document.get(key) + "\"" + flag).getBytes("utf-8"))
                } else {
                    outputStream.write(("\"" + key + "\"" + ":" + "\"" + document.get(key) + "\"," + flag).getBytes("utf-8"))
                    count++
                }
            }
            if (i == configs.size() - 1) {
                outputStream.write(("}" + flag).getBytes("utf-8"))
            } else {
                outputStream.write(("}," + flag).getBytes("utf-8"))
            }
        }
        outputStream.write("]".getBytes("utf-8"))
        outputStream.close()
        response.addHeader("Content-Disposition", "attachment;fileName=allconfig");
        FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "allconfig")
        try {
            IOUtils.copy(fileInputStream, response.getOutputStream())
        } finally {
            response.outputStream.close()
            fileInputStream.close()
        }
        FileUtils.deleteQuietly(new File(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "allconfig"))
    }

    private Map getConfigServiceVersions() {
        List<Document> configs = serversService.getServerConfigs()
        Map<String, List> serviceVersionMap = new HashMap()
        for (Document document : configs) {
            String serviceVersion = document.get("_id")
            if (serviceVersion != null) {
                String[] serviceVersionArray = serviceVersion.split(DeployController.SERVICE_VERSION_SYMBOL)
                String service = serviceVersionArray[0]
                String version = serviceVersionArray[1]
                List serviceVersionList = serviceVersionMap.get(service)
                if (serviceVersionList == null) {
                    serviceVersionList = new ArrayList()
                    serviceVersionMap.put(service, serviceVersionList)
                }
                if (!serviceVersionList.contains(version)) {
                    serviceVersionList.add(version)
                }
            }
        }
        return serviceVersionMap
    }

    private Map getServiceVresions() {
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersionsAll()
        Map serverTypeMap = new HashMap()
        for (ServiceVersion serviceVersion : serviceVersions) {
            List serverTypes = serviceVersion.getServerType()
            for (String serverType : serverTypes) {
                Map theServerTypeMap = serverTypeMap.get(serverType)
                if (theServerTypeMap == null) {
                    theServerTypeMap = new HashMap()
                    serverTypeMap.put(serverType, theServerTypeMap)
                }
                Map theTypeMap = theServerTypeMap.get(serverType)
                if (theTypeMap == null) {
                    theTypeMap = new HashMap()
                    theServerTypeMap.put(serviceVersion.type, theTypeMap)
                }
                Map allServiceVersionMap = serviceVersion.serviceVersions
                for (String service : allServiceVersionMap.keySet()) {
                    List theVersionList = theTypeMap.get(service)
                    if (theVersionList == null) {
                        theVersionList = new ArrayList()
                        theTypeMap.put(service, theVersionList)
                    }
                    if (!theVersionList.contains(serviceVersion.serviceVersions.get(service))) {
                        theVersionList.add(serviceVersion.serviceVersions.get(service))
                    }
                }
            }
        }
        return serverTypeMap
    }

    private getNeedDownServiceVersion(List configsinput) {
        List allServiceVersion = new ArrayList()
        Map serverTypeMap = getServiceVresions()
        Map configServiceVersionMap = getConfigServiceVersions()
        while (!configsinput.isEmpty()) {
            String serverDir = configsinput.get(0)
            if (serverDir.equals("serverType")) {
                try {
                    String serverType = configsinput.get(1)
                    String type = configsinput.get(2)
                    String versionType = configsinput.get(3)
                    Map theServerTypeMap = serverTypeMap.get(serverType)
                    if (theServerTypeMap != null) {
                        Map theTypeMap = theServerTypeMap.get(type)
                        if (theTypeMap != null) {
                            for (String service : theTypeMap.keySet()) {
                                if (versionType.equals("currentVersion")) {
                                    List serviceVersionList = theTypeMap.get(service)
                                    if (serviceVersionList != null) {
                                        for (String version : serviceVersionList) {
                                            String serviceVersion = service + DeployController.SERVICE_VERSION_SYMBOL + version
                                            if (!allServiceVersion.contains(serviceVersion)) {
                                                allServiceVersion.add(serviceVersion)
                                            }
                                        }
                                    }
                                } else if (versionType.equals("allVersion")) {
                                    List serviceVersionList = configServiceVersionMap.get(service)
                                    if (serviceVersionList != null) {
                                        for (String version : serviceVersionList) {
                                            String serviceVersion = service + DeployController.SERVICE_VERSION_SYMBOL + version
                                            if (!allServiceVersion.contains(serviceVersion)) {
                                                allServiceVersion.add(serviceVersion)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } finally {
                    for (int i = 0; i < 4; i++) {
                        configsinput.remove(0)
                    }
                }
            } else if (serverDir.equals("service")) {
                try {
                    String service = configsinput.get(1)
                    String versionType = configsinput.get(2)
                    List theVersionList = configServiceVersionMap.get(service)
                    Collections.sort(theVersionList)
                    if (versionType.equals("latest version")) {
                        String version = theVersionList.get(theVersionList.size() - 1)
                        String serviceVersion = service + DeployController.SERVICE_VERSION_SYMBOL + version
                        if (!allServiceVersion.contains(serviceVersion)) {
                            allServiceVersion.add(serviceVersion)
                        }
                    } else if (versionType.equals("allVersion")) {
                        for (String version : theVersionList) {
                            String serviceVersion = service + DeployController.SERVICE_VERSION_SYMBOL + version
                            if (!allServiceVersion.contains(serviceVersion)) {
                                allServiceVersion.add(serviceVersion)
                            }
                        }
                    }
                } finally {
                    for (int i = 0; i < 3; i++) {
                        configsinput.remove(0)
                    }
                }
            }
        }
        return allServiceVersion
    }

    @GetMapping("downconfigs/{configsinput}")
    def downloadConfigs(HttpServletResponse response, @PathVariable List configsinput) {
        List allServiceVersion = getNeedDownServiceVersion(configsinput)
        if (allServiceVersion != null) {
            List<Document> configs = serversService.getServerConfigs()
            File file = new File(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "configsinput");
            FileOutputStream outputStream = FileUtils.openOutputStream(file)
            String flag = "\r\n"
            outputStream.write(("[" + flag).getBytes("utf-8"))
            int configCount = 0
            for (int i = 0; i < configs.size(); i++) {
                Document document = configs.get(i)
                if (allServiceVersion.contains(document.get("_id"))) {
                    outputStream.write(("{" + flag).getBytes("utf-8"))
                    int count = 0
                    for (String key : document.keySet()) {
                        if (count == document.size() - 1) {
                            outputStream.write(("\"" + key + "\"" + ":" + "\"" + document.get(key) + "\"" + flag).getBytes("utf-8"))
                        } else {
                            outputStream.write(("\"" + key + "\"" + ":" + "\"" + document.get(key) + "\"," + flag).getBytes("utf-8"))
                            count++
                        }
                    }
                    if (configCount == allServiceVersion.size() - 1) {
                        outputStream.write(("}" + flag).getBytes("utf-8"))
                    } else {
                        outputStream.write(("}," + flag).getBytes("utf-8"))
                        configCount++
                    }
                }
            }
            outputStream.write("]".getBytes("utf-8"))
            outputStream.close()
            response.addHeader("Content-Disposition", "attachment;fileName=configs");
            FileInputStream fileInputStream = new FileInputStream(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "configsinput")
            try {
                IOUtils.copy(fileInputStream, response.getOutputStream())
            } finally {
                response.outputStream.close()
                fileInputStream.close()
            }
            FileUtils.deleteQuietly(new File(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "configsinput"))
        }
    }

    @PostMapping("/config")
    def uploadConfigFile(@RequestParam("file") MultipartFile file) {
        if (file != null) {
            String content = IOUtils.toString(file.inputStream)
            JSONArray configs = JSON.parseArray(content)
            if (configs != null && !configs.isEmpty()) {
                Document document = null
                for (Map o : configs) {
                    document = new Document()
                    if (!StringUtils.isEmpty(o.get("_id"))) {
                        serversService.deleteServerConfig(new Document().append("_id", o.get("_id")))
                        for (String key : o.keySet()) {
                            document.append(key.replaceAll("\\.", "_"), o.get(key).replaceAll(" ", ""))
                        }
                        if (!document.isEmpty()) {
                            serversService.addServerConfig(document)
                        }
                    }
                }
            }
        }
    }
}
