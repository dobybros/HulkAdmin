package com.dobybros.hulkadmin.manager.config

import com.dobybros.hulkadmin.data.ServerType
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
@Component
class ServerTypeManager {
    private Map<String, ServerType> serverTypeMap = new ConcurrentHashMap<>()

    public void addServerType(ServerType serverType) {
        serverTypeMap[serverType.serverType] = serverType
    }

    public ServerType getServerType(String serverType) {
        return serverTypeMap[serverType]
    }
    public Set getAllServerType(){
        return serverTypeMap.keySet()
    }

    Map<String, ServerType> getServerTypeMap() {
        return serverTypeMap
    }
}
