package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.auth.LoginSevice
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.NginxConfig
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.file.adapters.GridFSFileHandler
import org.apache.commons.lang.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
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
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    LoginSevice loginSevice
    @Autowired
    GridFSFileHandler fileAdapter
    @Autowired
    NginxConfig nginxConfig

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
                    sshClient.excuteCommand("sudo unzip -d " + projectPath + "/" + fileName + " " + projectPath+ "/" + fileName + ".zip")
                    sshClient.excuteCommand("sudo rm -rf " + projectPath+ "/" + fileName + ".zip")
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

}
