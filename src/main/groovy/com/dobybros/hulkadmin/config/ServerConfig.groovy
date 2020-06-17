package com.dobybros.hulkadmin.config

import chat.errors.CoreException
import com.dobybros.hulkadmin.data.Server
import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.manager.config.ServerManager
import com.docker.data.Lan
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.PropertySource
import org.springframework.stereotype.Component

/**
 * Created by lick on 2019/6/27.
 * Description：
 */
@Component
@ConfigurationProperties(prefix = "server")
@PropertySource(value = "classpath:config/server.properties")
class ServerConfig {
    @Autowired
    ServerManager serverManager
    private Map<String, String> servers = new HashMap<String, String>();

    Map<String, String> getServers() {
        if (!servers.isEmpty()) {
            int count = 1
            while (servers.get("ip" + count) != null) {
                Server server = new Server()
                server.setIp(servers.get("ip" + count))
                server.setPort(servers.get("port" + count))
                server.setAccount(servers.get("account" + count))
                server.setPasswd(servers.get("passwd" + count))
                String dockerNamesStr = servers.get("dockerNames" + count)
                if (dockerNamesStr != null) {
                    String[] dockerNames = dockerNamesStr.split(",")
                    if (dockerNames != null) {
                        List dockerNameList = new ArrayList()
                        for (String dockerName : dockerNames) {
                            if (!dockerName.contains(ServerManager.DOCKERNAME_SYMBOL)) {
                                throw new GeneralException(Errors.ERROR_PARAMS_ILLEGAL, "DockerName must contains ${ServerManager.DOCKERNAME_SYMBOL}")
                            }
                            dockerNameList.add(dockerName)
                        }
                        server.setDockerNames(dockerNameList)
                        serverManager.addServer(server)
                    }
                } else {
                    throw new CoreException(5000, "Cant find serverTypes, ip: ${servers.get("ip" + count)}")
                }
                count++
            }
        }
        return servers
    }
}
