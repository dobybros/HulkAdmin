package com.dobybros.hulkadmin.auth

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.data.User
import com.dobybros.hulkadmin.db.UserSessionRedis
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.manager.config.UserManager
import com.dobybros.hulkadmin.utils.JWTUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class LoginSevice {
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    UserManager userManager
    @Autowired
    UserSessionRedis userSessionRedis

    def login(String username, String password) {
        User user = userSessionRedis.getUserSession(username)
        if(user != null){
            if (userManager.auth(username, password, user)) {
                String token = JWTUtils.createToken(username, Long.valueOf(applicationConfig.tokenExpireTime) * 1000)
                return token
            } else {
                throw new GeneralException(4002, "login failed, incorrect username or password")
            }
        }
        throw new GeneralException(4002, "login failed, incorrect username or password")

    }

    def register(User user) {
        Long code = userSessionRedis.addUserSession(userManager.md5(user))
        if (code == 1) {
            return "register ${user.getAccount()} success"
        } else {
            return "register ${user.getAccount()} failed, account exist"
        }
    }
}
