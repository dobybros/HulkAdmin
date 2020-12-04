package com.dobybros.hulkadmin.data

import com.docker.data.DataObject
import com.docker.data.DockerStatus
import org.bson.Document

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
class DeployRecord extends DataObject{
    public static final String SERVER_TYPE = "serverType"
    public static final String DEPLOYER = "deployer"
    public static final String TIME = "time"
    public static final String DEPLOY_ING_MAP = "deployIngMap"
    public static final String SERVICE_VERSIONS = "serviceVersions"
    public static final String UPDATE_BASE_JAR_VERSIONS = "updateBaseJarVersions"
    private String serverType
    private String deployer
    private String time
    public static final String DEPLOY_SERVER_FAILED = "FAILED"
    public static final String DEPLOY_SERVER_SUCCESS = "SUCCESS"
    public static final String DEPLOY_SERVER_PAUSED = "PAUSED"
    public static final String DEPLOY_SERVER_STARTING = "STARTING"
    public static final String DEPLOY_SERVER_WAITSTART = "WAITSTART"
    public static final String DEPLOY_SERVER_STOP = "STOP"
    public static final String DEPLOY_SERVER_WAIT = "WAIT"
    public static final String DEPLOY_SERVER_SEPEATOR = " || "
    private Map<String, String> deployIngMap
    private Map<String, String> serviceVersions
    private Map<String, String> updateBaseJarVersions

    @Override
    Document toDocument() {
        Document document = super.toDocument()
        document.append(SERVER_TYPE, serverType)
                .append(TIME, time)
                .append(DEPLOYER, deployer)
                .append(DEPLOY_ING_MAP, deployIngMap)
                .append(SERVICE_VERSIONS, serviceVersions)
                .append(UPDATE_BASE_JAR_VERSIONS, updateBaseJarVersions)
        return document
    }

    @Override
    void fromDocument(Document dbObj) {
        super.fromDocument(dbObj)
        serverType = dbObj.getString(SERVER_TYPE)
        time = dbObj.getString(TIME)
        deployer = dbObj.getString(DEPLOYER)
        deployIngMap = (Map<String, String>)dbObj.get(DEPLOY_ING_MAP)
        serviceVersions = (Map<String, String>)dbObj.get(SERVICE_VERSIONS)
        updateBaseJarVersions = (Map<String, String>)dbObj.get(UPDATE_BASE_JAR_VERSIONS)
    }

    String getServerType() {
        return serverType
    }

    void setServerType(String serverType) {
        this.serverType = serverType
    }

    String getDeployer() {
        return deployer
    }

    void setDeployer(String deployer) {
        this.deployer = deployer
    }

    String getTime() {
        return time
    }

    void setTime(String time) {
        this.time = time
    }

    Map<String, String> getDeployIngMap() {
        Map map = new HashMap()
        if(deployIngMap != null){
            for (String server : deployIngMap.keySet()){
                map.put(server.replaceAll("__", "\\."), deployIngMap.get(server))
            }
        }
        return map
    }

    void setDeployIngMap(Map<String, String> deployIngMap) {
        this.deployIngMap = deployIngMap
    }

    Map<String, String> getServiceVersions() {
        return serviceVersions
    }

    void setServiceVersions(Map<String, String> serviceVersions) {
        this.serviceVersions = serviceVersions
    }

    Map<String, String> getUpdateBaseJarVersions() {
        return updateBaseJarVersions
    }

    void setUpdateBaseJarVersions(Map<String, String> updateBaseJarVersions) {
        this.updateBaseJarVersions = updateBaseJarVersions
    }

    static String getStatusStr(Integer status){
        switch (status){
            case DockerStatus.STATUS_PAUSE:
                return DEPLOY_SERVER_PAUSED + DEPLOY_SERVER_SEPEATOR + "Has users"
            case DockerStatus.STATUS_STARTING:
                return DEPLOY_SERVER_STARTING
            case DockerStatus.STATUS_WAITSTART:
                return DEPLOY_SERVER_WAITSTART
            default:break
        }
        return null
    }
}
