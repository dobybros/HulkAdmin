package com.dobybros.hulkadmin.manager.db

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.docker.storage.redis.RedisHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
@Component
class RedisManager {
    @Autowired
    ApplicationConfig applicationConfig
    RedisHandler redisHandler = null

    RedisHandler getRedisHandler() {
        if(redisHandler == null){
            redisHandler = new RedisHandler(applicationConfig.redisHost)
            redisHandler.connect()
        }
        return redisHandler
    }
}
