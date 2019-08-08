package com.dobybros.hulkadmin.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

/**
 * Created by lick on 2019/7/29.
 * Description：
 */
@Component
@ConfigurationProperties(prefix = "nginx")
@PropertySource(value= "classpath:config/nginx.properties")
class NginxConfig {
    private Map<String, String> nginx = new HashMap<String, String>();

    Map<String, String> getNginx() {
        return nginx
    }
}