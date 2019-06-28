package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.remoteService.discovery.DockerStatus
import com.dobybros.hulkadmin.remoteService.discovery.DockerStatusService
import com.dobybros.hulkadmin.remoteService.discovery.ServersConfigService
import com.dobybros.hulkadmin.remoteService.discovery.ServiceVersion
import com.dobybros.hulkadmin.remoteService.discovery.ServiceVersionService
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.file.adapters.GridFSFileHandler
import com.docker.rpc.remote.stub.ServiceStubManager
import com.mongodb.BasicDBObject
import org.apache.commons.io.FileUtils
import org.apache.commons.lang.StringUtils
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import script.file.FileAdapter

import java.util.concurrent.ConcurrentHashMap
import java.util.regex.Matcher
import java.util.regex.Pattern

@RequestMapping("deploy")
@CrossOrigin
@RestController
class DeployController {
    private final String nginxFileName = "nginx.conf"
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    ServiceStubManager serviceStubManager
    @Autowired
    GridFSFileHandler fileAdapter

    @PostMapping("/serverconfig")
    def addConfig(@RequestBody Document config) {
        Document configFinal = new Document()
        ServersConfigService serversService = serviceStubManager.getService(ServersConfigService.SERVICE, ServersConfigService.class)
        if (config != null) {
            for (String key : config.keySet()) {
                if (!StringUtils.isEmpty(key)) {
                    Map<String, String> map = config.get(key)
                    if (!StringUtils.isEmpty(map.get("key")) && !StringUtils.isEmpty(map.get("value"))) {
                        configFinal.append(map.get("key").replaceAll(" ", ""), map.get("value").replaceAll(" ", ""))
                    }
                }
            }
        }
        return serversService.updateConfig(configFinal)
    }

    @GetMapping("/serverconfig")
    def getConfigs() {
        ServersConfigService serversService = serviceStubManager.getService(ServersConfigService.SERVICE, ServersConfigService.class)
        List list = new ArrayList()
        Map mapInternal = null
        Map map = null
        List<Document> configs = serversService.getConfigs()
        for (int i = 0; i < configs.size(); i++) {
            Document document = configs.get(i)
            map = new HashMap()
            for (String key : document.keySet()) {
                mapInternal = new HashMap()
                mapInternal.put("key", key)
                mapInternal.put("value", document.get(key))
                map.put(key, mapInternal)
            }
            list.add(map)
        }
        return list
    }

    @DeleteMapping("/serverconfig/{serviceName}")
    def deleteConfig(@PathVariable String serviceName) {
        ServersConfigService serversService = serviceStubManager.getService(ServersConfigService.SERVICE, ServersConfigService.class)
        return serversService.deleteConfig(serviceName)
    }

    @GetMapping("/groovyzips")
    def getGroovyZips() {
        List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx("/"), null, true)
        if (fileEntities != null && fileEntities.size() > 0) {
            Map<String, Map<String, String>> serviceMap = new HashMap<>()
            for (FileAdapter.FileEntity fileEntity : fileEntities) {
                String absolutePath = fileEntity.absolutePath
                if (absolutePath != null) {
                    String[] serviceVersions = absolutePath.split("/")
                    String serviceVersion;
                    if (StringUtils.isEmpty(serviceVersions[0])) {
                        serviceVersion = serviceVersions[2]
                    } else {
                        serviceVersion = serviceVersions[1]
                    }
                    String version = null
                    String service = serviceVersion.split("_v")[0]
                    if (serviceVersion.split("_v").length > 1) {
                        version = serviceVersion.split("_v")[1]
                    }
                    if (service != null) {
                        Map versionDateMap = serviceMap.get(service)
                        if (versionDateMap == null) {
                            versionDateMap = new HashMap()
                            serviceMap.put(service, versionDateMap)
                        }
                        if (version == null) {
                            versionDateMap.put("0", TimeUtils.getDateString(fileEntity.lastModificationTime, "yyyy-MM-dd HH:mm:ss"))
                        } else {
                            versionDateMap.put(version, TimeUtils.getDateString(fileEntity.lastModificationTime, "yyyy-MM-dd HH:mm:ss"))
                        }
                    }
                }
            }
            List outList = new ArrayList()
            List interalList = null
            for (String serviceName : serviceMap.keySet()) {
                Map newServiceMap = new HashMap<>()
                Map versionDateMap = serviceMap.get(serviceName)
                outList.add(newServiceMap)
                newServiceMap.put("serviceName", serviceName)
                List versionList = new ArrayList()
                List<Integer> sortList = new ArrayList()
                for (String version : versionDateMap.keySet()) {
                    sortList.add(Integer.valueOf(version))
                }
                Collections.sort(sortList)
                if (sortList.size() > 0) {
                    interalList = new ArrayList()
                    for (int i = sortList.size() - 1; i >= 0; i--) {
                        if (i == sortList.size() - 1) {
                            newServiceMap.put("version", String.valueOf(sortList.get(i)))
                            newServiceMap.put("date", versionDateMap.get(String.valueOf(sortList.get(i))))
                            newServiceMap.put("maxVersion", String.valueOf(sortList.get(i)))
                        } else {
                            Map newVersionDateMap = new HashMap()
                            newVersionDateMap.put("serviceName", serviceName)
                            newVersionDateMap.put("version", String.valueOf(sortList.get(i)))
                            newVersionDateMap.put("date", versionDateMap.get(String.valueOf(sortList.get(i))))
                            interalList.add(newVersionDateMap)
                        }
                        Map versionMap = new HashMap()
                        versionMap.put("value", "version: " + String.valueOf(sortList.get(i)))
                        versionList.add(versionMap)
                    }
                    newServiceMap.put("allVersion", interalList)
                    newServiceMap.put("versions", versionList)
                }
            }
            return outList
        }
    }

    @PostMapping("/groovyzip")
    def uploadGroovy(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version) {
        if (file != null) {
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
                if (versionNumber != 0) {
                    thePath = applicationConfig.scriptRemotePath + serviceName + "_v" + versionNumber + "/groovy.zip"
                } else {
                    thePath = applicationConfig.scriptRemotePath + serviceName + "/groovy.zip"
                }
                FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
                fileAdapter.saveFile(file.getInputStream(), path, FileAdapter.FileReplaceStrategy.REPLACE);
            }
        }
    }

    @DeleteMapping("/groovyzip")
    def deleteGroovy(@RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version) {
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
            if (versionNumber != 0) {
                thePath = applicationConfig.scriptRemotePath + serviceName + "_v" + versionNumber + "/groovy.zip"
            } else {
                thePath = applicationConfig.scriptRemotePath + serviceName + "/groovy.zip"
            }
            FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
            fileAdapter.deleteFile(path)
        }
    }

    @DeleteMapping("/groovyzips")
    def deleteGroovys(@RequestParam(value = "s") String serviceName) {
        if (!StringUtils.isEmpty(serviceName)) {
            fileAdapter.deleteFileRegix(new BasicDBObject("filename", new Document().append("\$regex", applicationConfig.scriptRemotePath + serviceName)))
        }
    }

    @GetMapping("/serviceversions")
    def getAllServiceVersions() {
        ServiceVersionService serviceVersionService = serviceStubManager.getService(ServiceVersionService.SERVICE, ServiceVersionService.class)
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersions()
        List<Map> list = new ArrayList<>()
        Map<String, Map<String, String>> serviceVersionsMap = null
        Map map = null
        for (ServiceVersion serviceVersion : serviceVersions) {
            map = new ConcurrentHashMap()
            List serverTypes = serviceVersion.getServerType()
            String serverTypesStr = ""
            for (int i = 0; i < serverTypes.size(); i++) {
                if (i == serverTypes.size() - 1) {
                    serverTypesStr = serverTypesStr + serverTypes.get(i)
                } else {
                    serverTypesStr = serverTypesStr + serverTypes.get(i) + ","
                }
            }
            map.put("serverType", serverTypesStr)
            map.put("type", serviceVersion.type)
            map.put("_id", serviceVersion._id)
            serviceVersionsMap = new ConcurrentHashMap<>()
            if (serviceVersion.serviceVersions != null) {
                Map<String, String> serviceVersionMap = null

                Map keyValueMap = null
                for (String service : serviceVersion.serviceVersions.keySet()) {
                    keyValueMap = new HashMap()
                    serviceVersionMap = new ConcurrentHashMap<>()
                    if (StringUtils.isEmpty((String) serviceVersion.serviceVersions.get(service))) {
                        keyValueMap.put("key", service)
                        keyValueMap.put("value", "0")
                    } else {
                        keyValueMap.put("key", service)
                        keyValueMap.put("value", serviceVersion.serviceVersions.get(service))
                    }
                    serviceVersionsMap.put(service, keyValueMap)
                }
                if (serviceVersionsMap.size() > 0) {
                    map.put("serviceVersions", serviceVersionsMap)
                    map.put("serviceLength", serviceVersionsMap.size())
                }
            } else {
                map.put("serviceLength", 0)
            }
            list.add(map)
        }
        return list
    }

    @PostMapping("/serviceversion")
    def addServiceVersion(@RequestBody Map serviceVersionMap) {
        ServiceVersion serviceVersion = new ServiceVersion()
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("_id"))) {
            serviceVersion._id = (String) serviceVersionMap.get("_id").replaceAll(" ", "")
        }
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("type"))) {
            serviceVersion.type = (String) serviceVersionMap.get("type").replaceAll(" ", "")
        }
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("serverType"))) {
            String serverType = (String) serviceVersionMap.get("serverType").replaceAll(" ", "")
            List<String> serverTypes = Arrays.asList(serverType.split(","))
            if (serverTypes != null && serverTypes.size() > 0) {
                serviceVersion.serverType = serverTypes
            }
        }
        Map serviceVersions = (Map) serviceVersionMap.get("serviceVersions")
        Document serviceVersionFinal = new Document()
        if (serviceVersions != null && serviceVersions.size() > 0) {
            for (String service : serviceVersions.keySet()) {
                Map serviceVersionMap1 = serviceVersions.get(service)
                if (serviceVersionMap1 != null && serviceVersionMap1.size() > 0) {
                    if (!StringUtils.isEmpty(serviceVersionMap1.get("key")) && !StringUtils.isEmpty(serviceVersionMap1.get("value"))) {
                        if (serviceVersionMap1.get("value").equals("0")) {
                            serviceVersionFinal.append(serviceVersionMap1.get("key").replaceAll(" ", ""), "")
                        } else {
                            serviceVersionFinal.append(serviceVersionMap1.get("key").replaceAll(" ", ""), serviceVersionMap1.get("value").replaceAll(" ", ""))
                        }
                    }
                }
            }
        }
        if (serviceVersionFinal.size() > 0) {
            serviceVersion.serviceVersions = serviceVersionFinal
        }
        ServiceVersionService serviceVersionService = serviceStubManager.getService(ServiceVersionService.SERVICE, ServiceVersionService.class)
        serviceVersionService.addServiceVersion(serviceVersion)
    }

    @DeleteMapping("/serviceversion")
    def deleteServiceVersion(@RequestParam(value = "i") String id) {
        if (!StringUtils.isEmpty(id)) {
            ServiceVersionService serviceVersionService = serviceStubManager.getService(ServiceVersionService.SERVICE, ServiceVersionService.class)
            serviceVersionService.deleteServiceVersion(id)
        }
    }

    @GetMapping("/serverweb")
    def getServerWeb() {
        Map serverWebMap = new HashMap()
        ServiceVersionService serviceVersionService = serviceStubManager.getService(ServiceVersionService.SERVICE, ServiceVersionService.class)
        Map serverServices = serviceVersionService.getServerServices()
        if (serverServices != null && serverServices.size() > 0) {
            List servers = new ArrayList()
            List versions = null
            Map serverServiceMap = null
            for (String serverService : serverServices.keySet()) {
                List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath + serverService + "_v"), null, true)
                if (fileEntities != null && fileEntities.size() > 0) {
                    versions = new ArrayList()
                    serverServiceMap = new HashMap()
                    for (FileAdapter.FileEntity fileEntity : fileEntities) {
                        String absolutePath = fileEntity.absolutePath
                        if (absolutePath != null) {
                            String[] serviceVersions = absolutePath.split("/")
                            String serviceVersion;
                            if (StringUtils.isEmpty(serviceVersions[0])) {
                                serviceVersion = serviceVersions[2]
                            } else {
                                serviceVersion = serviceVersions[1]
                            }
                            String version = null
                            if (serviceVersion.split("_v").length > 1) {
                                version = serviceVersion.split("_v")[1]
                            }
                            if (version != null && !versions.contains(version)) {
                                versions.add(Integer.valueOf(version))
                            }
                        }
                    }
                    if (versions.size() > 0) {
                        Collections.reverse(versions)
                        serverServiceMap.put("serviceName", serverService)
                        if (serverServices.get(serverService) != null) {
                            serverServiceMap.put("currentVersion", Integer.valueOf(serverServices.get(serverService)))
                        }
                        serverServiceMap.put("versions", versions)
                        servers.add(serverServiceMap)
                    }
                }
            }
            if (servers.size() > 0) {
                serverWebMap.put("servers", servers)
            }
        }
        ShellClient sshClient = new ShellClient(applicationConfig.nginxIp, applicationConfig.nginxAccount, applicationConfig.nginxPasswd, Integer.valueOf(applicationConfig.nginxPort))
        List firstFilenames = sshClient.excuteCommand("sudo ls " + applicationConfig.nginxWwwPath)
//        List firstFilenames = sshClient.excuteCommand("sudo ls /root/aa")
        List webFileList = new ArrayList()
        List webFiles = null
        Map webFileMap = null
        if (firstFilenames != null && firstFilenames.size() > 0) {
            //tc這一層
            for (String firstFileName : firstFilenames) {
                List secondFileNames = sshClient.excuteCommand("sudo ls " + applicationConfig.nginxWwwPath + "/" + firstFileName)
//                List secondFileNames = sshClient.excuteCommand("sudo ls /root/aa" + "/" + firstFileName)
                if (secondFileNames != null && secondFileNames.size() > 0) {
                    webFileMap = new HashMap()
                    webFiles = new ArrayList()
                    List list = new ArrayList()
                    List<File> files = new ArrayList<>()
                    for (String fileName : secondFileNames) {
                        File file = new File(fileName)
                        files.add(file)
                    }
                    webFiles = files.sort { a, b ->
                        return b.compareTo(a)
                    }
                    for (File file1 : webFiles) {
                        list.add(file1.getName())
                    }
                    if (list.size() > 0) {
                        webFileMap.put("webName", firstFileName)
                        if (serverServices.get(firstFileName) != null) {
                            webFileMap.put("currentVersion", serverServices.get(firstFileName))
                        }
                        webFileMap.put("versions", list)
                        webFileList.add(webFileMap)
                    }
                }
            }
            if (webFileList.size() > 0) {
                serverWebMap.put("webs", webFileList)
            }
        }
        return serverWebMap
    }

    @GetMapping("/serverweb/server/{serviceName}")
    def getServerVersionsByServiceName(@PathVariable String serviceName) {
        List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath + serviceName + "_v"), null, true)
        if (fileEntities != null && fileEntities.size() > 0) {
            List versions = new ArrayList()
            for (FileAdapter.FileEntity fileEntity : fileEntities) {
                String absolutePath = fileEntity.absolutePath
                if (absolutePath != null) {
                    String[] serviceVersions = absolutePath.split("/")
                    String serviceVersion;
                    if (StringUtils.isEmpty(serviceVersions[0])) {
                        serviceVersion = serviceVersions[2]
                    } else {
                        serviceVersion = serviceVersions[1]
                    }
                    String version = null
                    if (serviceVersion.split("_v").length > 1) {
                        version = serviceVersion.split("_v")[1]
                    }
                    if (version != null && !versions.contains(version)) {
                        versions.add(Integer.valueOf(version))
                    }
                }
            }
            if (versions.size() > 0) {
                Collections.reverse(versions)
                return versions
            }
        }
    }

    @GetMapping("/serverweb/web/{webName}")
    def getWebVersionsByWebName(@PathVariable String webName) {
        ShellClient sshClient = new ShellClient(applicationConfig.nginxIp, applicationConfig.nginxAccount, applicationConfig.nginxPasswd, Integer.valueOf(applicationConfig.nginxPort))
        List secondFileNames = sshClient.excuteCommand("sudo ls " + applicationConfig.nginxWwwPath + "/" + webName)
//        List secondFileNames = sshClient.excuteCommand("sudo ls /root/aa" + "/" + webName)
        if (secondFileNames != null && secondFileNames.size() > 0) {
            List webFiles = new ArrayList()
            List list = new ArrayList()
            List<File> files = new ArrayList<>()
            for (String fileName : secondFileNames) {
                File file = new File(fileName)
                files.add(file)
            }
            webFiles = files.sort { a, b ->
                return b.compareTo(a)
            }
            for (File file1 : webFiles) {
                list.add(file1.getName())
            }
            return list
        }
    }

    @PostMapping("/serverweb")
    def reloadNginx(@RequestBody Map map) {
        SftpClient sftpClient = new SftpClient(applicationConfig.nginxIp, applicationConfig.nginxAccount, applicationConfig.nginxPasswd, Integer.valueOf(applicationConfig.nginxPort))
        ShellClient sshClient = new ShellClient(applicationConfig.nginxIp, applicationConfig.nginxAccount, applicationConfig.nginxPasswd, Integer.valueOf(applicationConfig.nginxPort))
        sftpClient.download(applicationConfig.nginxRemotePath, "nginx.conf", "./nginx.conf")
        if (map != null && map.size() > 0) {
            Map serverServices = new HashMap()
            String originPath = applicationConfig.nginxPath + nginxFileName
            String nginxContent = FileUtils.readFileToString(new File(originPath), "utf8")
            // replace html path
            List<Map> webs = map.get("webs")
            if (webs != null) {
                for (Map webMap : webs) {
                    String webName = webMap.get("webName")
                    String currentVersion = null
                    if (webMap.get("currentVersion") != null) {
                        currentVersion = webMap.get("currentVersion").toString()
                    }
                    if (!StringUtils.isEmpty(webName) && !StringUtils.isEmpty(currentVersion)) {
                        String originalPre = applicationConfig.nginxWwwPath + "/" + webName.replaceAll(" ", "") + "/"
                        String replacePath = applicationConfig.nginxWwwPath + "/" + webName.replaceAll(" ", "") + "/" + currentVersion.replaceAll(" ", "") + ";"
                        Pattern pattern = Pattern.compile(originalPre + ".*?;")
                        Matcher matcher = pattern.matcher(nginxContent)
                        nginxContent = matcher.replaceAll(replacePath)
                        serverServices.put(webName, currentVersion)
                    }
                }
            }
            // replace server version
            List<Map> servers = map.get("servers")
            if (servers != null) {
                for (Map serverMap : servers) {
                    String serviceName = serverMap.get("serviceName")
                    String currentVersion = null
                    if (serverMap.get("currentVersion") != null) {
                        currentVersion = serverMap.get("currentVersion").toString()
                    }
                    if (!StringUtils.isEmpty(serviceName) && !StringUtils.isEmpty(currentVersion)) {
                        String originalPre = serviceName.replaceAll(" ", "") + "_v"
                        String replacePath = serviceName.replaceAll(" ", "") + "_v" + currentVersion.replaceAll(" ", "") + ";"
                        Pattern pattern = Pattern.compile(originalPre + ".*?;")
                        Matcher matcher = pattern.matcher(nginxContent)
                        nginxContent = matcher.replaceAll(replacePath)
                        serverServices.put(serviceName, currentVersion)
                    }
                }
            }
            // write content to temp file
            String targetTime = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + "target"
            def targetDir = originPath + "_" + targetTime
            FileUtils.writeStringToFile(new File(targetDir), nginxContent, "utf8")
            sftpClient.upload(targetDir, applicationConfig.nginxRemotePath + nginxFileName + "_" + targetTime)
            // check nginx config
            try {
                sshClient.excuteCommand("sudo docker exec nginx nginx -tc $targetDir")
            } catch (Exception e) {
                FileUtils.deleteQuietly(new File(targetDir))
                sftpClient.close()
                throw e
            }
//             rename original nginx fileName,   reload file
            String nginxBak = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
            try {
                sshClient.excuteCommand("sudo mv " + applicationConfig.nginxRemotePath + nginxFileName + " " + applicationConfig.nginxRemotePath + nginxFileName + "_" + nginxBak)
                Thread.sleep(1000)
                sshClient.excuteCommand("sudo mv " + applicationConfig.nginxRemotePath + targetDir + " " + applicationConfig.nginxRemotePath + nginxFileName)
                sshClient.excuteCommand("sudo docker exec nginx nginx -s reload")
            } catch (Exception e) {
                FileUtils.deleteQuietly(new File(originPath))
                FileUtils.deleteQuietly(new File(targetDir))
                sshClient.excuteCommand("sudo rm -rf " + applicationConfig.nginxRemotePath + nginxFileName)
                sshClient.excuteCommand("sudo mv " + applicationConfig.nginxRemotePath + nginxFileName + "_" + nginxBak + " " + applicationConfig.nginxRemotePath + nginxFileName)
                sftpClient.close()
                throw e
            }
            if (serverServices.size() > 0) {
                ServiceVersionService serviceVersionService = serviceStubManager.getService(ServiceVersionService.SERVICE, ServiceVersionService.class)
                serviceVersionService.addServerServices(serverServices)
            }
            sftpClient.close()
            FileUtils.deleteQuietly(new File(originPath))
            FileUtils.deleteQuietly(new File(targetDir))
        }
    }

    @GetMapping("/containers")
    def getAllContainers() {
        DockerStatusService dockerStatusService = serviceStubManager.getService(DockerStatusService.SERVICE, DockerStatusService.class)
        List<DockerStatus> dockerStatuses = dockerStatusService.getDockerStatuses()
        return dockerStatuses
    }

    @PostMapping("/container")
    def reloadContainer(@RequestBody DockerStatus dockerStatus) {
        if (dockerStatus != null) {
            DockerStatusService dockerStatusService = serviceStubManager.getService(DockerStatusService.SERVICE, DockerStatusService.class)
            if (dockerStatus.server != null && dockerStatus.ip != null && dockerStatus.dockerName != null) {
                InputStream inStream = DeployController.class.getClassLoader().getResourceAsStream("application.properties");
                Properties prop = new Properties();
                prop.load(inStream)
                String ip = dockerStatus.ip
                String address = prop.getProperty(dockerStatus.ip)
                if (address != null) {
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
                    ShellClient sshClient = new ShellClient(ip, account, passwd, Integer.valueOf(port))
                    dockerStatusService.deleteDockerStatus(dockerStatus.server)
                    sshClient.excuteCommand("sudo docker restart " + dockerStatus.dockerName)
                }
            }
        }
    }
}
