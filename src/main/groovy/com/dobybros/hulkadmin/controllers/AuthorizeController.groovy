package com.dobybros.hulkadmin.controllers

import chat.logs.LoggerEx
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONArray
import com.dobybros.hulkadmin.auth.LoginSevice
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.NginxConfig
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.file.adapters.GridFSFileHandler
import com.docker.storage.adapters.impl.ServersServiceImpl
import org.apache.commons.io.FileUtils
import org.apache.commons.io.IOUtils
import org.apache.commons.lang.StringUtils
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
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
                if (versionNumber != "0") {
                    thePath = applicationConfig.scriptRemotePath + serviceName + "_v" + versionNumber + "/groovy.zip"
                } else {
                    thePath = applicationConfig.scriptRemotePath + serviceName + "/groovy.zip"
                }
                FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
                fileAdapter.saveFile(file.getInputStream(), path, FileAdapter.FileReplaceStrategy.REPLACE);
            }
        }
    }

    @PostMapping("/web")
    def uploadWebFile(@RequestParam("file") MultipartFile file,
                      @RequestParam(value = "w") String webName, @RequestParam(value = "p") String projectName) {
        if (!StringUtils.isEmpty(webName) && !StringUtils.is(projectName)) {
            int count = 1
            String nginxAccount = null
            String nginxPort = null
            String nginxPasswd = null
            String nginxIp = null
            while (nginxConfig.nginx?.get("ip" + count) != null) {
                nginxIp = nginxConfig.nginx?.get("ip" + count)
                nginxPort = nginxConfig.nginx?.get("port" + count)
                nginxAccount = nginxConfig.nginx?.get("account" + count)
                nginxPasswd = nginxConfig.nginx?.get("passwd" + count)
                if (nginxIp != null && nginxPort != null && nginxAccount != null && nginxPasswd != null) {
                    String wwwPath = applicationConfig.nginxWwwPath
                    String projectPath = wwwPath + "/" + webName + "/" + projectName
                    String fileName = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
                    SftpClient sftpClient = new SftpClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                    ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                    sshClient.excuteCommand("sudo mkdir -p " + projectPath)
                    sftpClient.uploadByStream(projectPath, fileName + ".zip", file.inputStream)
                    sshClient.excuteCommand("sudo unzip -d " + projectPath + "/" + fileName + " " + projectPath + "/" + fileName + ".zip")
                    sshClient.excuteCommand("sudo rm -rf " + projectPath + "/" + fileName + ".zip")
                }
                count++
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

    @GetMapping("downconfigsinput/{configsinput}")
    def downloadConfigs(HttpServletResponse response, @PathVariable String configsinput) {
        String[] configsInput = configsinput.replaceAll(" ", "").split(",")
        List<Document> configs = serversService.getServerConfigs()
        File file = new File(System.getProperty("user.dir") + File.separator + "serverconfigs" + File.separator + "configsinput");
        FileOutputStream outputStream = FileUtils.openOutputStream(file)
        String flag = "\r\n"
        outputStream.write(("[" + flag).getBytes("utf-8"))
        int configCount = 0
        for (int i = 0; i < configs.size(); i++) {
            Document document = configs.get(i)
            if (configsInput.contains(document.get("_id"))) {
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
                if (configCount == configsInput.length - 1) {
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
