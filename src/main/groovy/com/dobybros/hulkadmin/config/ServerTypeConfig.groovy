package com.dobybros.hulkadmin.config

import chat.errors.CoreException
import com.dobybros.hulkadmin.data.Server
import com.dobybros.hulkadmin.data.ServerType
import com.dobybros.hulkadmin.manager.config.ServerManager
import com.dobybros.hulkadmin.manager.config.ServerTypeManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

/**
 * Created by lick on 2019/6/27.
 * Description：
 */
@Component
@ConfigurationProperties(prefix = "servertype")
@PropertySource(value = "classpath:config/servertype.properties")
class ServerTypeConfig {
    private Map<String, String> servertypes = new HashMap<String, String>();
    @Autowired
    ServerTypeManager serverTypeManager

    Map<String, String> getServertypes() {
        if (!servertypes.isEmpty()) {
            int count = 1
            while (servertypes.get("serverType" + count) != null) {
                ServerType serverType = new ServerType()
                serverType.setServerType(servertypes.get("serverType" + count))
                serverType.setGroovyCloudType(Integer.valueOf(servertypes.get("groovyCloudType" + count)))
                serverType.setNginxName(servertypes.get("nginxName" + count))
                serverTypeManager.addServerType(serverType)
                count++
            }
        }
        return servertypes
    }
}
