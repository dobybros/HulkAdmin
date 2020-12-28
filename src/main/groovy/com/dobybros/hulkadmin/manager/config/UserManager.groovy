package com.dobybros.hulkadmin.manager.config

import chat.utils.MD5Util
import com.dobybros.hulkadmin.data.User
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
@Component
class UserManager {
    private Map<String, User> userMap = new ConcurrentHashMap<>()
    public User md5(User user){
        user.setPasswd(MD5Util.md5(user.getPasswd().getBytes()))
        return user
    }
    public boolean auth(String account, String passwd, User user){
        boolean success = false
        if(user != null){
            if(user.getPasswd().equals(MD5Util.md5(passwd.getBytes()))){
                success = true
            }
        }
        return success
    }
}
