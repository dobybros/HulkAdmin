package com.dobybros.hulkadmin.config

import com.dobybros.hulkadmin.data.Nginx
import com.dobybros.hulkadmin.manager.config.NginxManager
import org.springframework.beans.factory.annotation.Autowired
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
@PropertySource(value = "classpath:config/nginx.properties")
class NginxConfig {
    @Autowired
    NginxManager nginxManager
    private Map<String, String> nginx = new HashMap<String, String>();

    Map<String, String> getNginx() {
        int count = 1
        while (nginx.get("ip" + count) != null) {
            Nginx nginxData = new Nginx()
            nginxData.setName(nginx.get("name" + count))
            nginxData.setIp(nginx.get("ip" + count))
            nginxData.setPort(nginx.get("port" + count))
            nginxData.setAccount(nginx.get("account" + count))
            nginxData.setPasswd(nginx.get("passwd" + count))
            nginxData.setWebPath(nginx.get("webPath" + count))
            nginxData.setNginxPath(nginx.get("nginxPath" + count))
            nginxManager.addNginx(nginxData)
            count++
        }
        return nginx
    }
}