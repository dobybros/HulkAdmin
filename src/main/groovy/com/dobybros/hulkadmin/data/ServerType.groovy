package com.dobybros.hulkadmin.data

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
class ServerType {
    private String serverType
    private Integer groovyCloudType
    private String nginxName

    String getServerType() {
        return serverType
    }

    void setServerType(String serverType) {
        this.serverType = serverType
    }

    Integer getGroovyCloudType() {
        return groovyCloudType
    }

    void setGroovyCloudType(Integer groovyCloudType) {
        this.groovyCloudType = groovyCloudType
    }

    String getNginxName() {
        return nginxName
    }

    void setNginxName(String nginxName) {
        this.nginxName = nginxName
    }
}
