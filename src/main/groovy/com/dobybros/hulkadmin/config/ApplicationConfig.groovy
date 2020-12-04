package com.dobybros.hulkadmin.config


import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component

/**
 * Created by lick on 2019/6/16.
 * Description：
 */
@Order(0)
@Configuration
class ApplicationConfig {
    @Value('${db.redis.uri}')
    public String redisHost
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
    @Value('${nginx.path}')
    public String nginxPath
    @Value('${token.expire.time}')
    public String tokenExpireTime
    @Value('${dockerstatus.dbname}')
    public String dockerStatusDBName
    @Value('${config.dbname:}')
    public String configDBName
    @Value('${connectionsPerHost}')
    public String connectionsPerHost
    @Value('${mongo.username}')
    public String mongoUserName
    @Value('${mongo.password}')
    public String mongoPassword
    @Value('${database.host}')
    public String databaseHost
    @Value('${log.kibana.url}')
    public String logKibanaUrl

}
