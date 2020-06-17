package com.dobybros.hulkadmin.manager.config

import com.dobybros.hulkadmin.data.Server
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
@Component
class ServerManager {
    public static final String IPDOCKERNAME_SYMBOL = "@"
    public static final String DOCKERNAME_SYMBOL = "_"
    private Map<String, Server> serverMap = new ConcurrentHashMap<>()

    public void addServer(Server server) {
        serverMap.put(server.getIp(), server)
    }

    public Server getServer(String ip) {
        return serverMap[ip]
    }

    public List<String> getIPDockerNames(String serverType) {
        if (!serverMap.isEmpty()) {
            List ipDockerNames = new ArrayList()
            for (Server server : serverMap.values()) {
                List dockerNames = server.getDockerNames()
                for (String dockerName : dockerNames) {
                    if (dockerName.split(DOCKERNAME_SYMBOL)[0].equals(serverType)) {
                        ipDockerNames.add(server.getIp() + IPDOCKERNAME_SYMBOL + dockerName)
                    }
                }
            }
            return ipDockerNames
        }
        return null
    }

    public Map getDockerNames(String serverType) {
        if (!serverMap.isEmpty()) {
            Map ipDockerNames = new HashMap()
            for (Server server : serverMap.values()) {
                List dockerNames = server.getDockerNames()
                for (String dockerName : dockerNames) {
                    if (dockerName.split(DOCKERNAME_SYMBOL)[0].equals(serverType)) {
                        List list = ipDockerNames[server.getIp()]
                        if(list == null){
                            list = new ArrayList()
                            ipDockerNames[server.getIp()] = list
                        }
                        list.add(dockerName)
                    }
                }
            }
            return ipDockerNames
        }
        return null
    }
}
