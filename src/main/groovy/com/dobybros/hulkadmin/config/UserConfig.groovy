package com.dobybros.hulkadmin.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

/**
 * Created by lick on 2019/6/27.
 * Description：
 */
@Component
@ConfigurationProperties(prefix = "user")
@PropertySource(value= "classpath:config/user.properties")
class UserConfig {
    private Map<String, String> users = new HashMap<String, String>();

    Map<String, String> getUsers() {
        return users
    }
}
