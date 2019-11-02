package com.dobybros.hulkadmin.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap

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
    private Map<String, Map> nginxMap = null
    public void setNginxMap(){
        if (nginxMap == null) {
            nginxMap = new ConcurrentHashMap()
            int count = 1
            Map map = null
            while (nginx.get("ip" + count) != null) {
                map = new HashMap()
                map.put("ip", nginx.get("ip" + count))
                map.put("port", nginx.get("port" + count))
                map.put("account", nginx.get("account" + count))
                map.put("passwd", nginx.get("passwd" + count))
                map.put("webPath", nginx.get("webPath" + count))
                map.put("nginxRemotePath", nginx.get("nginxPath" + count))
                nginxMap.put(nginx.get("name" + count), map)
                count++
            }
        }
    }

    Map getNginxMap() {
        setNginxMap()
        return nginxMap
    }
}