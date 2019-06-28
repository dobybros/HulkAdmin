package com.dobybros.hulkadmin.auth

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.UserConfig
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.utils.JWTUtils
import org.springframework.beans.factory.annotation.Autowire
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class LoginSevice {
    @Autowired
    private UserConfig userConfig
    @Autowired
    ApplicationConfig applicationConfig

    def login(String username, String password) {
        int count = 1
        Boolean exist = false
        while (userConfig.users?.get("account" + count) != null){
            if(username.equals(userConfig.users?.get("account" + count))){
                if(userConfig.users?.get("passwd" + count).equals(password)){
                    exist = true
                }
                break
            }else {
                count ++
            }
        }
        if(exist){
            String token = JWTUtils.createToken(username, Long.valueOf(applicationConfig.tokenExpireTime)*1000)
            return token
        }else {
            throw new GeneralException(4002, "login failed, incorrect username or password")
        }
    }
}
