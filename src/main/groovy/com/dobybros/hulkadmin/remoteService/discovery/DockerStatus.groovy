package com.dobybros.hulkadmin.remoteService.discovery

/**
 * Used for login session in Redis.
 *
 * Created by aplomb on 17-7-8.
 */
class DockerStatus{
    private String _id
    /**
     * 6位服务器名称， 随机生成的， 在数据库中是唯一字段
     */
    private String server

    /**
     * 这是网卡上能取到的IP， 一般是内网IP， 可以用于相同局域网的服务器间通信。
     */
    private String ip
    /**
     * 通过msg.jar包装jetty提供http服务，
     * 这样的设计需要提供两个jar， 一个msg.jar提供元数据和接口， 以及使用classloader启动msgimpl.jar， 在msgimpl.jar里包含所有的依赖包， 例如jetty的。
     */
    private Integer httpPort
    /**
     * 通过msg.jar提供的rpc端口
     */
    private Integer rpcPort
    /*
     * ssl rpc port
     */
    private Integer sslRpcPort
    /**
     * ip有可能对应的是内网IP， 如果这台服务器需要对外， 就需要通过IM的管理后台配置外网IP。
     */
    private String publicDomain
    /**
     * 相同lanId的服务器可以通过ip直接通信， 说明他们在同一内网。
     * 不同lanId的服务器只能通过publicDomain访问， 说明他们不在同一内网， 可以是跨越国家或者大洲的不同部署。
     */
    private String lanId
    private String serverType
    private String dockerName;

    /**
     * 状态， OK是可以正常工作， Standby是服务器刚启动后的待命状态， 此时还不能提供服务器， 到OK状态之后开始服务。
     */
    private Integer status
    public static final int STATUS_OK = 1
    public static final int STATUS_PREPARING = 50
    public static final int STATUS_STANDBY = 100
    public static final int STATUS_DELETED = 200


    /**
     * 一台服务器的健康值， 0分是最健康的， 100分是最不健康的。 100分封顶。
     *
     * 这个值的计算需要综合各方面因素， 定期刷新到服务器中， 例如每10秒刷一次。
     */
    private Integer health
    public static final int HEALTH_MAX = 100

    public static final String FIELD_DOCKERSTATUS_SERVER = "server"
    public static final String FIELD_DOCKERSTATUS_STATUS = "status"
    public static final String FIELD_DOCKERSTATUS_SERVICES = "services"
    public static final String FIELD_DOCKERSTATUS_HEALTH = "health"
    String get_id() {
        return _id
    }

    void set_id(String _id) {
        this._id = _id
    }

    String getServer() {
        return server
    }

    void setServer(String server) {
        this.server = server
    }

    String getIp() {
        return ip
    }

    void setIp(String ip) {
        this.ip = ip
    }

    Integer getHttpPort() {
        return httpPort
    }

    void setHttpPort(Integer httpPort) {
        this.httpPort = httpPort
    }

    Integer getRpcPort() {
        return rpcPort
    }

    void setRpcPort(Integer rpcPort) {
        this.rpcPort = rpcPort
    }

    Integer getSslRpcPort() {
        return sslRpcPort
    }

    void setSslRpcPort(Integer sslRpcPort) {
        this.sslRpcPort = sslRpcPort
    }

    String getPublicDomain() {
        return publicDomain
    }

    void setPublicDomain(String publicDomain) {
        this.publicDomain = publicDomain
    }

    String getLanId() {
        return lanId
    }

    void setLanId(String lanId) {
        this.lanId = lanId
    }

    Integer getStatus() {
        return status
    }

    void setStatus(Integer status) {
        this.status = status
    }

    Integer getHealth() {
        return health
    }

    void setHealth(Integer health) {
        this.health = health
    }

    String getServerType() {
        return serverType
    }

    void setServerType(String serverType) {
        this.serverType = serverType
    }

    String getDockerName() {
        return dockerName
    }

    void setDockerName(String dockerName) {
        this.dockerName = dockerName
    }
}
