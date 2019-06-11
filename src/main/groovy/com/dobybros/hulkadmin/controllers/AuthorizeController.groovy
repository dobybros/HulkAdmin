package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.auth.LoginSevice
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
public class AuthorizeController {

    @Autowired
    LoginSevice loginSevice

    @PostMapping("/login")
    def login(@RequestBody Map<String, String> body) {
        return loginSevice.login(body.get("username"), body.get("password"))
    }
}
