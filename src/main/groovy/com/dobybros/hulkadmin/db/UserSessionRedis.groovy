package com.dobybros.hulkadmin.db

import com.alibaba.fastjson.JSON
import com.dobybros.hulkadmin.data.User
import com.dobybros.hulkadmin.manager.db.RedisManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
@Component
class UserSessionRedis {
    public final String USER_PREFIX = "HULKADMINUSER"
    @Autowired
    RedisManager redisManager
    public def addUserSession(User user){
        return redisManager.getRedisHandler().setNX(USER_PREFIX + user.getAccount(), JSON.toJSONString(user))
    }
    public User getUserSession(String account){
        String userStr = redisManager.getRedisHandler().get(USER_PREFIX + account)
        if(userStr != null){
            return JSON.parseObject(userStr, User.class)
        }
        return null
    }
}
