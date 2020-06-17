package com.dobybros.hulkadmin.data

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
class Server {
    private String ip
    private String port
    private String account
    private String passwd
    private List<String> dockerNames

    String getIp() {
        return ip
    }

    void setIp(String ip) {
        this.ip = ip
    }

    String getPort() {
        return port
    }

    void setPort(String port) {
        this.port = port
    }

    String getAccount() {
        return account
    }

    void setAccount(String account) {
        this.account = account
    }

    String getPasswd() {
        return passwd
    }

    void setPasswd(String passwd) {
        this.passwd = passwd
    }

    List<String> getDockerNames() {
        return dockerNames
    }

    void setDockerNames(List<String> dockerNames) {
        this.dockerNames = dockerNames
    }
}
