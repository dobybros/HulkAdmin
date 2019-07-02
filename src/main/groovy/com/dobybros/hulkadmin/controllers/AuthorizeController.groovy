package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.auth.LoginSevice
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.docker.file.adapters.GridFSFileHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
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

    @PostMapping("/login")
    def login(@RequestBody Map<String, String> body, HttpServletResponse response, HttpServletRequest request) {
        String token = loginSevice.login(body.get("username"), body.get("password"))
        response.addCookie(new Cookie("authorization", token))
        return [
                "uuid": body.get("username"),
                "name": body.get("username"),
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
}
