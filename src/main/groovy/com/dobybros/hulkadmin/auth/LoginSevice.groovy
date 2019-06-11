package com.dobybros.hulkadmin.auth

import com.dobybros.hulkadmin.general.GeneralException
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class LoginSevice {

    @Value('${admin.username}')
    private String username

    @Value('${admin.password}')
    private String password


    private String token = UUID.randomUUID().toString()

    def login(String username, String password) {
        if (username == this.username && password == this.password) {
            this.token = UUID.randomUUID().toString()
            return [
                    "uuid": this.username,
                    "name": this.username,
                    "token": this.token
            ]
        }
        throw new GeneralException(4001, "login failed, incorrect username or password")
    }

    boolean tokenValidate(String token) {
        return token == this.token
    }
}
