package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.auth.LoginSevice
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.servlet.http.HttpSession

@RestController
@RequestMapping("open")
@CrossOrigin
public class AuthorizeController {

    @Autowired
    LoginSevice loginSevice

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
}
