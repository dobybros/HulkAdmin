package com.dobybros.hulkadmin.config

import groovyjarjarpicocli.CommandLine
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap


/**
 * Created by lick on 2019/6/16.
 * Description：
 */
@Component
class ApplicationConfig {
    @Value('${remote.service.host}')
    public String remoteServiceHost
    @Value('${gridfs.host}')
    public String gridfsHost
    @Value('${gridfs.files.dbname}')
    public String gridfsDBName
    @Value('${gridfs.connectionsPerHost}')
    public String gridfsConnectionsPerHost
    @Value('${gridfs.username}')
    public String gridfsUserName
    @Value('${gridfs.password}')
    public String gridfsPassword
    @Value('${gridfs.bucket}')
    public String gridfsBucket
    @Value('${script.remote.path}')
    public String scriptRemotePath
    @Value('${nginx.Www.Path}')
    public String nginxWwwPath
    @Value('${nginx.path}')
    public String nginxPath
    @Value('${nginx.remotePath}')
    public String nginxRemotePath
    @Value('${nginx.account}')
    public String nginxAccount
    @Value('${nginx.passwd}')
    public String nginxPasswd
    @Value('${nginx.ip}')
    public String nginxIp
    @Value('${nginx.port}')
    public String nginxPort

}
