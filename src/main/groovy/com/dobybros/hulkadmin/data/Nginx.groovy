package com.dobybros.hulkadmin.data

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
public class Nginx {
    private String name
    private String ip
    private String port
    private String account
    private String passwd
    private String webPath
    private String nginxPath

    String getName() {
        return name
    }

    void setName(String name) {
        this.name = name
    }

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

    String getWebPath() {
        return webPath
    }

    void setWebPath(String webPath) {
        this.webPath = webPath
    }

    String getNginxPath() {
        return nginxPath
    }

    void setNginxPath(String nginxPath) {
        this.nginxPath = nginxPath
    }
}
