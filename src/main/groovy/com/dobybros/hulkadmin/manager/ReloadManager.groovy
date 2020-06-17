package com.dobybros.hulkadmin.manager

import chat.json.Result
import chat.utils.TimerEx
import chat.utils.TimerTaskEx
import com.alibaba.fastjson.JSON
import com.dobybros.hulkadmin.controllers.DeployController
import com.dobybros.hulkadmin.data.DeployRecord
import com.dobybros.hulkadmin.data.Server
import com.dobybros.hulkadmin.data.ServerType
import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.hanler.ReloadServerSuccess
import com.dobybros.hulkadmin.hanler.nginx.ReloadNginxHandler
import com.dobybros.hulkadmin.manager.config.NginxManager
import com.dobybros.hulkadmin.manager.config.ServerManager
import com.dobybros.hulkadmin.manager.config.ServerTypeManager
import com.dobybros.hulkadmin.service.impl.DeployRecordServiceImpl
import com.docker.data.DeployServiceVersion
import com.docker.data.DockerStatus
import com.docker.data.ServiceVersion
import com.docker.storage.adapters.impl.DeployServiceVersionServiceImpl
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import com.docker.utils.ScriptHttpUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.config.AutowireCapableBeanFactory
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.CountDownLatch
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
@Component
class ReloadManager {
    @Autowired
    DockerStatusServiceImpl dockerStatusService
    @Autowired
    DeployRecordServiceImpl deployRecordService
    @Autowired
    DeployServiceVersionServiceImpl deployServiceVersionService
    @Autowired
    ServerManager serverManager
    @Autowired
    ServerTypeManager serverTypeManager
    @Autowired
    ServiceVersionServiceImpl serviceVersionService
    @Autowired
    RemoteClientBuilder remoteClientBuilder
    @Autowired
    private AutowireCapableBeanFactory beanFactory;
    @Autowired
    BaseJarManager baseJarManager
    @Autowired
    NginxManager nginxManager
    private final String RELOAD_TASK = "RELOAD"
    private final String TAG = ReloadManager.class.getSimpleName()
    private Map<String, Map<String, List<String>>> serverTypeDeployMap = new ConcurrentHashMap<>()
    private Map<String, Map<String, TimerTaskEx>> timerTaskExMap = new ConcurrentHashMap<>()
    private Map<String, Long> serverTypeTimeMap = new ConcurrentHashMap<>()
    Properties groovyCloudProp
    {
        InputStream inStream = DeployController.class.getClassLoader().getResourceAsStream("groovycloud.properties");
        groovyCloudProp = new Properties();
        groovyCloudProp.load(inStream);
    }

    public void addDeployId(String serverType, String deployId) {
        String oldDeployId = getDeployId(serverType)
        List ipDockerNames = serverManager.getIPDockerNames(serverType)
        if (oldDeployId != null && ipDockerNames != null && !ipDockerNames.isEmpty()) {
            DeployRecord deployRecord = deployRecordService.getDeployRecord(oldDeployId)
            if (deployRecord != null) {
                Map deployIngMap = deployRecord.getDeployIngMap()
                if (deployIngMap == null) {
                    for (String ipDockerName : ipDockerNames) {
                        deployRecordService.upateDeployRecordServer(oldDeployId, ipDockerName, DeployRecord.DEPLOY_SERVER_STOP + DeployRecord.DEPLOY_SERVER_SEPEATOR + "Replace by ${deployId}")
                    }
                } else {
                    for (String ipDockerName : ipDockerNames) {
                        if (!deployIngMap.containsKey(ipDockerName)) {
                            deployRecordService.upateDeployRecordServer(oldDeployId, ipDockerName, DeployRecord.DEPLOY_SERVER_STOP + DeployRecord.DEPLOY_SERVER_SEPEATOR + "Replace by ${deployId}")
                        } else {
                            String status = deployIngMap.get(ipDockerName)
                            if(!status.contains(DeployRecord.DEPLOY_SERVER_SUCCESS) && !status.contains(DeployRecord.DEPLOY_SERVER_FAILED)){
                                deployRecordService.upateDeployRecordServer(oldDeployId, ipDockerName, deployIngMap.get(ipDockerName) + DeployRecord.DEPLOY_SERVER_SEPEATOR + "Replace by ${deployId}")
                            }
                        }
                    }
                }
            }
        }
        if (serverTypeDeployMap[serverType] == null) {
            Map deployMap = new ConcurrentHashMap()
            serverTypeDeployMap[serverType] = deployMap
        }
        synchronized (serverTypeDeployMap[serverType]) {
            Map deployMap = serverTypeDeployMap[serverType]
            deployMap.clear()
            if (ipDockerNames != null) {
                deployMap[deployId] = ipDockerNames
            }
            List<ReloadServerSuccess> reloadServerSuccesses = new ArrayList<>()
            ReloadServerSuccess reloadNginxHandler = new ReloadNginxHandler()
            beanFactory.autowireBean(reloadNginxHandler)
            reloadServerSuccesses.add(reloadNginxHandler)
            releaseServerTypeTimerTask(serverType)
            addDeployTask(serverType, deployId, reloadServerSuccesses)
            reload(serverType, deployId)
        }
    }

    public boolean sameDeploy(String serverType, String deployId) {
        Map deployMap = serverTypeDeployMap[serverType]
        if (deployMap == null || deployMap.isEmpty()) {
            return false
        }
        synchronized (serverTypeDeployMap[serverType]) {
            return deployMap.keySet()[0].equals(deployId)
        }
    }

    public void canLoad(String serverType) {
        Long lastLoadTime = serverTypeTimeMap[serverType]
        if (lastLoadTime != null) {
            if (System.currentTimeMillis() - lastLoadTime < 10000) {
                throw new GeneralException(Errors.ERROR_CANTLOADAGAIN, "Cant reload ${serverType} again in 10s")
            } else {
                serverTypeTimeMap.put(serverType, System.currentTimeMillis())
            }
        } else {
            serverTypeTimeMap.put(serverType, System.currentTimeMillis())
        }
    }

    public String getDeployId(String serverType) {
        Map deployMap = serverTypeDeployMap[serverType]
        if (deployMap == null || deployMap.isEmpty()) {
            return null
        }
        synchronized (serverTypeDeployMap[serverType]) {
            return deployMap.keySet()[0]
        }
    }

    private void addDeployTask(String serverType, String deployId, List<ReloadServerSuccess> reloadServerSuccesses) {
        TimerTaskEx timerTaskEx = new TimerTaskEx() {
            @Override
            void execute() {
                List ipDockerNames = serverManager.getIPDockerNames(serverType)
                if (ipDockerNames != null && !ipDockerNames.isEmpty()) {
                    int mustHasServerSize = 1
                    if (ipDockerNames.size() >= 4) {
                        mustHasServerSize = ipDockerNames / 4
                    }
                    List dockerStatuses = dockerStatusService.getDockerStatusByCondition(null, null, serverType, DockerStatus.STATUS_OK, deployId)
                    if (nginxManager.canLoadNginx(deployId, serverType)) {
                        if (dockerStatuses != null) {
                            ServiceVersion serviceVersion = getCurrentServiceVersion(serverType)
                            boolean canReloadThis = false
                            if (serviceVersion == null) {
                                canReloadThis = true
                            }
                            if (!canReloadThis) {
                                if (!serviceVersion.getDeployId().equals(deployId)) {
                                    canReloadThis = true
                                }
                            }
                            if (canReloadThis) {
                                if (dockerStatuses.size() >= mustHasServerSize) {
                                    if (reloadServerSuccesses != null) {
                                        for (ReloadServerSuccess reloadServerSuccess : reloadServerSuccesses) {
                                            reloadServerSuccess.execute(serverType)
                                        }
                                    }
                                }
                            }
                        }
                        nginxManager.releaseNginx(deployId, serverType)
                    }
                    dockerStatuses = dockerStatusService.getDockerStatusByCondition(null, null, serverType, null, deployId)
                    Map deployMap = serverTypeDeployMap[serverType]
                    if (deployMap != null) {
                        List dockerNames = deployMap[deployId]
                        if (dockerNames != null && !dockerNames.isEmpty()) {
                            for (DockerStatus dockerStatus : dockerStatuses) {
                                String ipDockerName = dockerStatus.getIp() + ServerManager.IPDOCKERNAME_SYMBOL + dockerStatus.getDockerName()
                                if (dockerNames.contains(ipDockerName)) {
                                    if (dockerStatus.getStatus() == DockerStatus.STATUS_OK || dockerStatus.getStatus() == DockerStatus.STATUS_FAILED) {
                                        dockerNames.remove(ipDockerName)
                                        if (dockerStatus.getStatus() == DockerStatus.STATUS_OK) {
                                            deployRecordService.upateDeployRecordServer(deployId, ipDockerName, DeployRecord.DEPLOY_SERVER_SUCCESS)
                                        } else {
                                            deployRecordService.upateDeployRecordServer(deployId, ipDockerName, DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + dockerStatus.getFailedReason())
                                        }
                                        if (dockerNames.isEmpty()) {
                                            releaseTimerTask(serverType, "Deploy")
                                            updateDeployBaseJarVersions(deployId)
                                            Logger.info(TAG, "Reload ${serverType} all servers finish")
                                        }
                                    } else {
                                        deployRecordService.upateDeployRecordServer(deployId, ipDockerName, DeployRecord.getStatusStr(dockerStatus.getStatus()))
                                    }
                                }
                            }
                        } else {
                            releaseTimerTask(serverType, "Deploy")
                        }
                    } else {
                        releaseTimerTask(serverType, "Deploy")
                    }
                }
            }
        }

        addTimerTask(serverType, "Deploy", timerTaskEx)
        TimerEx.schedule(timerTaskEx, 5000L, 5000L)
    }

    private void updateDeployBaseJarVersions(String deployId) {
        DeployRecord deployRecord = deployRecordService.getDeployRecord(deployId)
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getDeployServiceVersionByDeployId(deployId)
        if (deployRecord != null && deployServiceVersion != null) {
            Map updateBaseJarVersions = deployRecord.getUpdateBaseJarVersions()
            if (updateBaseJarVersions != null && !updateBaseJarVersions.isEmpty()) {
                Map deployBaseJarVersions = deployServiceVersion.getBaseJarVersions()
                if (deployBaseJarVersions == null) {
                    deployBaseJarVersions = new HashMap()
                }
                for (String jarName : updateBaseJarVersions.keySet()) {
                    deployBaseJarVersions[jarName] = updateBaseJarVersions[jarName]
                }
                deployServiceVersionService.updateBaseJarVersions(deployServiceVersion.get_id(), deployBaseJarVersions)
                Logger.info(TAG, "DeployServiceVersion updateBaseJarVersions success")
            }
        }
    }

    private void addObserverServerTask(String serverType, String ipDockerName, Integer allAvailableSize, String newDeployId, boolean needNoUser) {
        TimerTaskEx timerTaskEx = new TimerTaskEx() {
            @Override
            void execute() {
                String[] ipDockerNameStrs = ipDockerName.split(ServerManager.IPDOCKERNAME_SYMBOL)
                String ip = ipDockerNameStrs[0]
                String dockerName = ipDockerNameStrs[1]
                List<DockerStatus> dockerStatuses = new ArrayList<>()
                dockerStatuses.addAll(dockerStatusService.getDockerStatusByCondition(ip, dockerName, serverType, DockerStatus.STATUS_OK, null))
                dockerStatuses.addAll(dockerStatusService.getDockerStatusByCondition(ip, dockerName, serverType, DockerStatus.STATUS_PAUSE, null))
                if (dockerStatuses.isEmpty()) {
                    releaseTimerTask(serverType, ipDockerName)
                    return
                }
                synchronized (timerTaskExMap[serverType]) {
                    if (canReload(allAvailableSize, serverType, ip, dockerName)) {
                        dockerStatusService.updateDeployId(dockerStatuses[0].getServer(), newDeployId)
                        if (needNoUser) {
                            if (noOnlineUser(dockerStatuses[0])) {
                                Logger.info(TAG, "No user ${ipDockerName}")
                                dockerStatusService.updateStatus(dockerStatuses[0].getServer(), DockerStatus.STATUS_WAITSTART)
                                reloadContainer(serverType, ip, dockerName, newDeployId, true, dockerStatuses[0].getServer())
                            } else {
                                Logger.info(TAG, "Has user ${ipDockerName}")
                                dockerStatusService.updateStatus(dockerStatuses[0].getServer(), DockerStatus.STATUS_PAUSE)
                            }
                        } else {
                            Logger.info(TAG, "Can load serverType: ${serverType} ipDockerName: ${ipDockerName}")
                            dockerStatusService.updateStatus(dockerStatuses[0].getServer(), DockerStatus.STATUS_WAITSTART)
                            reloadContainer(serverType, ip, dockerName, newDeployId, true, dockerStatuses[0].getServer())
                        }
                    }
//                    else {
//                        dockerStatusService.updateStatus(dockerStatuses[0].getServer(), DockerStatus.STATUS_WAITSTART)
//                    }
                }
            }
        }
        addTimerTask(serverType, ipDockerName, timerTaskEx)
        TimerEx.schedule(timerTaskEx, 10000L, 10000L)
    }

    private void addTimerTask(String serverType, String taskName, TimerTaskEx timerTaskEx) {
        Map<String, TimerTaskEx> timeTaskMap = timerTaskExMap[serverType]
        if (timeTaskMap == null) {
            timeTaskMap = new ConcurrentHashMap<>()
            Map oldTimerTaskMap = timerTaskExMap.putIfAbsent(serverType, timeTaskMap)
            if (oldTimerTaskMap != null) {
                timeTaskMap = oldTimerTaskMap
            }
        }
        TimerTaskEx timerTaskExOld = timeTaskMap.put(taskName, timerTaskEx)
        if (timerTaskExOld != null) {
            timerTaskExOld.cancel()
        }
    }

    public void releaseTimerTask(String serverType, String taskName) {
        Map<String, TimerTaskEx> timeTaskMap = timerTaskExMap[serverType]
        if (timeTaskMap != null) {
            TimerTaskEx timerTaskEx = timeTaskMap.remove(taskName)
            if (timerTaskEx != null) {
                timerTaskEx.cancel()
                Logger.info(TAG, "Cancel ${taskName} success, serverType: ${serverType}!!!")
            }
        }
    }

    private void releaseServerTypeTimerTask(String serverType) {
        Map<String, TimerTaskEx> timeTaskMap = timerTaskExMap[serverType]
        if (timeTaskMap != null) {
            for (String key : timeTaskMap.keySet()) {
                try {
                    TimerTaskEx timerTaskEx = timeTaskMap.remove(key)
                    if (timerTaskEx != null) {
                        timerTaskEx.cancel()
                        Logger.info(TAG, "Cancel ${key} success, serverType: ${serverType}!!!")
                    }
                } catch (Throwable t) {
                    Logger.error(TAG, "Timertask cancel err, key: ${key}")
                }
            }
        }
    }

    public void reload(String serverType, String deployId) {
        ServerType serverTypeData = serverTypeManager.getServerType(serverType)
        if (serverTypeData != null) {
            List ipDockerNames = serverManager.getIPDockerNames(serverType)
            if (ipDockerNames != null && !ipDockerNames.isEmpty()) {
                ServiceVersion serviceVersion = getCurrentServiceVersion(serverType)
                Integer allAvailableSize = 0
                if (serviceVersion != null) {
                    List allAvailableDockerStatuses = dockerStatusService.getDockerStatusByCondition(null, null, serverType, DockerStatus.STATUS_OK, serviceVersion.getDeployId())
                    if (allAvailableDockerStatuses != null) {
                        allAvailableSize = allAvailableDockerStatuses.size()
                    }
                }
                switch (serverTypeData.getGroovyCloudType()) {
                    case DockerStatus.TYPE_NORMAL:
                        for (String ipDockerName : ipDockerNames) {
                            String[] ipDockerNameStrs = ipDockerName.split(ServerManager.IPDOCKERNAME_SYMBOL)
                            String ip = ipDockerNameStrs[0]
                            String dockerName = ipDockerNameStrs[1]
                            List dockerStatuses = dockerStatusService.getDockerStatusByCondition(ip, dockerName, serverType, null, null)
                            if (dockerStatuses == null || dockerStatuses.isEmpty()) {
                                Logger.info(TAG, "Because dockerStatus not exist, will relaod first, serverType: ${serverType} ip: ${ip} dockerName: ${dockerName}")
                                reloadContainer(serverType, ip, dockerName, deployId, false, null)
                            }
                        }
                        List<DockerStatus> dockerStatuses = dockerStatusService.getDockerStatusByServerType(serverType)
                        for (DockerStatus dockerStatus : dockerStatuses) {
                            if (dockerStatus.status != DockerStatus.STATUS_OK) {
                                Logger.info(TAG, "Because dockerStatus status is not ok, will relaod first, serverType: ${serverType} server: ${dockerStatus.getServer()}")
                                reloadContainer(serverType, dockerStatus.getIp(), dockerStatus.getDockerName(), deployId, true, dockerStatus.getServer())
                            } else {
                                serviceVersion = getCurrentServiceVersion(serverType)
                                if (serviceVersion != null) {
                                    if (!dockerStatus.getDeployId().equals(serviceVersion.getDeployId())) {
                                        Logger.info(TAG, "Because dockerStatus deployId != serviceVersion's deployId, will relaod first, serverType: ${serverType} server: ${dockerStatus.getServer()}")
                                        reloadContainer(serverType, dockerStatus.getIp(), dockerStatus.getDockerName(), deployId, true, dockerStatus.getServer())
                                    } else {
                                        addObserverServerTask(serverType, dockerStatus.getIp() + ServerManager.IPDOCKERNAME_SYMBOL + dockerStatus.getDockerName(), allAvailableSize, deployId, false)
                                    }
                                } else {
                                    Logger.info(TAG, "Because serviceVersion is not exist, will relaod first, serverType: ${serverType} server: ${dockerStatus.getServer()}")
                                    reloadContainer(serverType, dockerStatus.getIp(), dockerStatus.getDockerName(), deployId, true, dockerStatus.getServer())
                                }
                            }
                        }
                        break
                    case DockerStatus.TYPE_GATEWAY:
                    case DockerStatus.TYPE_PROXY:
                        for (String ipDockerName : ipDockerNames) {
                            String[] ipDockerNameStrs = ipDockerName.split(ServerManager.IPDOCKERNAME_SYMBOL)
                            String ip = ipDockerNameStrs[0]
                            String dockerName = ipDockerNameStrs[1]
                            List availableDockerStatuses = dockerStatusService.getDockerStatusByCondition(ip, dockerName, serverType, null, null)
                            if (availableDockerStatuses == null || availableDockerStatuses.isEmpty()) {
                                Logger.info(TAG, "Because dockerStatus not exist, will relaod first, serverType: ${serverType} ip: ${ip} dockerName: ${dockerName}")
                                reloadContainer(serverType, ip, dockerName, deployId, false, null)
                            }
                        }
                        List<DockerStatus> dockerStatuses = dockerStatusService.getDockerStatusByServerType(serverType)
                        for (DockerStatus dockerStatus : dockerStatuses) {
                            String ipDockerName = dockerStatus.getIp() + ServerManager.IPDOCKERNAME_SYMBOL + dockerStatus.getDockerName()
                            if (dockerStatus.status != DockerStatus.STATUS_OK && dockerStatus.status != DockerStatus.STATUS_PAUSE) {
                                if (ipDockerNames.contains(ipDockerName)) {
                                    Logger.info(TAG, "Because dockerStatus status is not ok, will relaod first, serverType: ${serverType} server: ${dockerStatus.getServer()}")
                                    reloadContainer(serverType, dockerStatus.getIp(), dockerStatus.getDockerName(), deployId, true, dockerStatus.getServer())
                                }
//                            } else if (!noOnlineUser(dockerStatus)) {
//                                    if (canReload(allAvailableSize, serverType, dockerStatus.getIp(), dockerStatus.getDockerName()) && !noOnlineUser(dockerStatus)) {
//                                        if (ipDockerNames.contains(ipDockerName)) {
//                                            Logger.info(TAG, "Because dockerStatus no onOnlineUser, will relaod first, serverType: ${serverType} server: ${dockerStatus.getServer()}")
//                                            reloadContainer(serverType, dockerStatus.getIp(), dockerStatus.getDockerName(), deployId, true, dockerStatus.getServer())
//                                        }
//                                    } else {
//                                        addObserverServerTask(serverType, ipDockerName, allAvailableSize, deployId, true)
//                                    }
                            } else {
                                addObserverServerTask(serverType, ipDockerName, allAvailableSize, deployId, true)
                            }
                        }
                        break
                    default: Logger.error(TAG, "Illegal groovyCloudType: ${serverTypeData.getGroovyCloudType()}")
                        break
                }
            } else {
                Logger.error(TAG, "IpDockerNames is null or empty, serverType: ${serverType}")
            }
        } else {
            Logger.error(TAG, "Cant find serverTypeData, serverType: ${serverType}")
        }
    }

    private void deleteDockerStatus(DockerStatus dockerStatus, List list) {
        String ipDockerName = dockerStatus.getIp() + ServerManager.IPDOCKERNAME_SYMBOL + dockerStatus.getDockerName()
        dockerStatusService.deleteDockerStatus(dockerStatus.getServer())
        if (!list.contains(ipDockerName)) {
            list.add(ipDockerName)
        }
    }

    private ServiceVersion getCurrentServiceVersion(String serverType) {
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersions(serverType)
        if (serviceVersions != null && !serviceVersions.isEmpty()) {
            return serviceVersions[0]
        }
        return null
    }

    public void reloadContainer(String serverType, String ip, String dockerName, String newDeployId, boolean needDeleteOld, String dockerServer) {
        TimerTaskEx timerTaskEx = new TimerTaskEx() {
            @Override
            void execute() {
                try {
                    Logger.info(TAG, "Now will reload serverType ${serverType} ipDockerName: ${ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName}")
                    if (needDeleteOld) {
                        dockerStatusService.deleteDockerStatus(dockerServer)
                    }
                    Server server = serverManager.getServer(ip)
                    if (server != null) {
                        List ipDockerNames = serverManager.getIPDockerNames(serverType)
                        if (ipDockerNames != null && ipDockerNames.contains(ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName)) {
                            DeployRecord deployRecord = deployRecordService.getDeployRecord(newDeployId)
                            if (deployRecord != null && deployRecord.getUpdateBaseJarVersions() != null && !deployRecord.getUpdateBaseJarVersions().isEmpty()) {
                                String jarPath = groovyCloudProp.get("groovycloud.server.project.path")
                                Map<String, String> normalBaseJarMap = baseJarManager.convertJarName(deployRecord.getUpdateBaseJarVersions())
                                for (String jarName : normalBaseJarMap.keySet()) {
                                    remoteClientBuilder.buildSftpClient(server.getIp(), server.getAccount(), server.getPasswd(), Integer.valueOf(server.getPort())).uploadByStream(jarPath + dockerName + "/lib", jarName, baseJarManager.getJarInputStream(jarName, normalBaseJarMap.get(jarName)))
                                    if (getMainJars().contains(jarName)) {
                                        remoteClientBuilder.buildShellClient(server.getIp(), server.getAccount(), server.getPasswd(), Integer.valueOf(server.getPort())).excuteCommand("sudo cp ${jarPath + dockerName}/lib/${jarName} ${jarPath + dockerName}")
                                    }
                                }
                            }
                            remoteClientBuilder.buildShellClient(server.getIp(), server.getAccount(), server.getPasswd(), Integer.valueOf(server.getPort())).excuteCommand("sudo docker restart " + dockerName)
                        } else {
                            Logger.info(TAG, "Because of ipDockerNames not contains ${ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName}, serverType: ${serverType}, cant reload")
                        }
                    }
                } catch (Throwable t) {
                    Logger.error(TAG, "Reload container err, server: ${ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName} errMSg: ${t.getMessage()}")
                    deployRecordService.upateDeployRecordServer(newDeployId, ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName, DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + t.getMessage())
                } finally {
                    releaseTimerTask(serverType, ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName + RELOAD_TASK)
                }
            }
        }
        addTimerTask(serverType, ip + ServerManager.IPDOCKERNAME_SYMBOL + dockerName + RELOAD_TASK, timerTaskEx)
        TimerEx.schedule(timerTaskEx, 20000L)
    }

    private List getMainJars() {
        String redeployJar = groovyCloudProp.get("redeploy.jars")
        return Arrays.asList(redeployJar.split(","))
    }

    private boolean canReload(Integer allAvailableSize, String serverType, String ip, String dockerName) {
        Integer currentAvailableSize = 0
        ServiceVersion serviceVersion = getCurrentServiceVersion(serverType)
        if (serviceVersion != null) {
            List availableDockerStatuses = dockerStatusService.getDockerStatusByCondition(ip, dockerName, serverType, DockerStatus.STATUS_OK, serviceVersion.getDeployId())
            if (availableDockerStatuses == null || availableDockerStatuses.isEmpty()) {
                return true
            }
            availableDockerStatuses = dockerStatusService.getDockerStatusByCondition(null, null, serverType, DockerStatus.STATUS_OK, serviceVersion.getDeployId())
            if (availableDockerStatuses != null) {
                currentAvailableSize = availableDockerStatuses.size()
            }
            if (allAvailableSize <= 1) {
                return false
            }
            if (currentAvailableSize == 0) {
                return true
            }
            Integer mustHasServers = 1
            if (allAvailableSize > 4) {
                mustHasServers = (allAvailableSize / 4).intValue()
            }
            if ((currentAvailableSize - 1) >= mustHasServers) {
                return true
            }
            return false
        } else {
            return true
        }
    }

    private boolean noOnlineUser(DockerStatus dockerStatus) {
        String url = "http://" + dockerStatus.getIp() + ":" + dockerStatus.getHttpPort() + "/base/gateway/params"
        Result result = ScriptHttpUtils.post(null, url, null, Result.class)
        if (result != null && result.success()) {
            switch (dockerStatus.getType()) {
                case DockerStatus.TYPE_GATEWAY:
                    List onlineUserIds = result.getData()
                    if (onlineUserIds != null) {
                        Logger.info(TAG, "gw: ip: ${dockerStatus.getIp()} onlineUserIds: ${JSON.toJSONString(onlineUserIds)}")
                        if (!onlineUserIds.isEmpty()) {
                            return false
                        }
                    }
                    break
                case DockerStatus.TYPE_PROXY:
                    List onlineUserIds = result.getData()
                    Logger.info(TAG, "Proxy: ipDockerName: ${dockerStatus.getIp() + ServerManager.IPDOCKERNAME_SYMBOL + dockerStatus.getDockerName()} onlineUserIds: ${onlineUserIds}")
                    if (onlineUserIds != null) {
                        if (!onlineUserIds.isEmpty()) {
                            return false
                        }
                    }
                    break
                default:
                    Logger.error(TAG, "NoOnlineUser, illegal groovyCloudType: ${dockerStatus.getType()}")
                    break
            }
        } else {
            if (result != null) {
                throw new GeneralException(result.getCode(), result.getMsg())
            }
        }

        return true
    }
}
