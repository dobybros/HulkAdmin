package com.dobybros.hulkadmin.utils

import io.jsonwebtoken.Claims

import javax.servlet.http.HttpServletRequest

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
class RequestUtils {
    static getAccount(HttpServletRequest request){
        Claims claims = request.getAttribute("claims")
        if(claims != null){
           String account = claims.get("account")
            return account
        }
        return null
    }
}
