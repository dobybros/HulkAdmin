package com.dobybros.hulkadmin.hanler.nginx


import com.alibaba.fastjson.JSON
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.data.DeployRecord
import com.dobybros.hulkadmin.data.ServerType
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.hanler.ReloadServerSuccess
import com.dobybros.hulkadmin.manager.ReloadManager
import com.dobybros.hulkadmin.manager.config.NginxManager
import com.dobybros.hulkadmin.manager.config.ServerManager
import com.dobybros.hulkadmin.manager.config.ServerTypeManager
import com.dobybros.hulkadmin.manager.db.RedisManager
import com.dobybros.hulkadmin.service.DeployRecordService
import com.dobybros.hulkadmin.utils.CommonStants
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.data.DeployServiceVersion
import com.docker.data.ServiceVersion
import com.docker.storage.adapters.impl.DeployServiceVersionServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import org.apache.commons.lang.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
class ReloadNginxHandler implements ReloadServerSuccess {
    @Autowired
    DeployServiceVersionServiceImpl deployServiceVersionService
    @Autowired
    ServerTypeManager serverTypeManager
    @Autowired
    NginxManager nginxManager
    @Autowired
    RedisManager redisManager
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    DeployRecordService deployRecordService
    @Autowired
    ReloadManager reloadManager
    @Autowired
    ServerManager serverManager
    @Autowired
    ServiceVersionServiceImpl serviceVersionService
    private final String TAG = ReloadNginxHandler.class.getSimpleName()

    @Override
    void execute(String serverType) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        if (deployServiceVersion != null) {
            if (!canLoad(serverType, deployServiceVersion.getDeployId())) {
                return
            }
        } else {
            Logger.error(TAG, "Reload nginx failed, cant find deployServiceVersion, serverType: ${serverType}")
            return
        }
        ServerType serverTypeData = serverTypeManager.getServerType(serverType)
        if (serverTypeData != null) {
            String nginxName = serverTypeData.getNginxName()
            if (nginxName != null) {
                synchronized (nginxManager.getLock(nginxName)) {
                    Map serviceVersions = deployServiceVersion.getServiceVersions()
                    if (serviceVersions != null) {
                        def returnResult = nginxManager.getNginxContent(nginxName)
                        if (returnResult != null) {
                            String msg = returnResult["message"]
                            if (msg != null) {
                                deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + msg)
                                return
                            }
                            String nginxContent = returnResult["nginxContent"]
                            if (nginxContent != null) {
                                boolean needReloadNginx = false
                                for (String service : serviceVersions.keySet()) {
                                    if (nginxContent.contains(service + CommonStants.SERVICE_VERSION_SYMBOL)) {
                                        String originalPre = service.replaceAll(" ", "") + CommonStants.SERVICE_VERSION_SYMBOL
                                        int index = nginxContent.indexOf(originalPre)
                                        if (index != -1) {
                                            String oldVersion = ''
                                            for (int i = 0; i < 4; i++) {
                                                if (StringUtils.isNumeric(nginxContent.charAt(index + originalPre.size() + i).toString())) {
                                                    oldVersion += nginxContent.charAt(index + originalPre.size() + i).toString()
                                                } else {
                                                    break
                                                }
                                            }
                                            if (!oldVersion.equals(serviceVersions.get(service))) {
                                                String newVersion = service.replaceAll(" ", "") + "_v" + serviceVersions.get(service).replaceAll(" ", "")
                                                nginxContent = nginxContent.replaceAll(originalPre + oldVersion, newVersion)
                                                needReloadNginx = true
                                            }
                                        }
                                    }
                                }
                                if (!canLoad(serverType, deployServiceVersion.getDeployId())) {
                                    return
                                }
                                if (needReloadNginx) {
                                    Logger.info(TAG, "Need reload nginx")
                                    String targetTime = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + "target"
                                    String result = nginxManager.uploadNginxFile(nginxName, nginxContent, targetTime)
                                    if (result == null) {
                                        List testResult = nginxManager.testNginx(nginxName, targetTime)
                                        boolean testSuccess = false
                                        if (testResult != null) {
                                            if (JSON.toJSONString(testResult).contains("success")) {
                                                testSuccess = true
                                            } else {
                                                reloadManager.releaseTimerTask(serverType, "Deploy")
                                                deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + testResult)
                                            }
                                        }
                                        if (testSuccess) {
                                            if (!canLoad(serverType, deployServiceVersion.getDeployId())) {
                                                return
                                            }
                                            result = nginxManager.reloadNginx(nginxName, targetTime)
                                            if (result != null) {
                                                deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + result)
                                            } else {
                                                deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_SUCCESS)
                                                updateServiceVersion(deployServiceVersion)
                                            }
                                        }
                                    } else {
                                        deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + result)
                                    }
                                } else {
                                    Logger.info(TAG, "Not need reload nginx")
                                    deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_SUCCESS + DeployRecord.DEPLOY_SERVER_SEPEATOR + "Dont need")
                                    updateServiceVersion(deployServiceVersion)
                                }
                            } else {
                                Logger.error(TAG, "Reload nginx failed, cant get nginxContent, nginxName: ${nginxName}")
                            }
                        }
                    } else {
                        Logger.error(TAG, "Reload nginx failed, cant find serviceVersions, serverType: ${serverType}")
                    }
                }
            } else {
                Logger.error(TAG, "Reload nginx failed, cant find nginxName, serverType: ${serverType}")
            }
        } else {
            Logger.error(TAG, "Reload nginx failed, cant find serverType, serverType: ${serverType}")
        }

    }

    private void updateServiceVersion(DeployServiceVersion deployServiceVersion) {
        boolean updateServiceVersionSuccess = true
        try {
            List<ServiceVersion> serviceVersionList = serviceVersionService.getServiceVersionsByType(deployServiceVersion.getServerType(), deployServiceVersion.getType())
            if (serviceVersionList != null && !serviceVersionList.isEmpty()) {
                for (ServiceVersion serviceVersion : serviceVersionList) {
                    serviceVersion.setServiceVersions(deployServiceVersion.getServiceVersions())
                    serviceVersion.setDeployId(deployServiceVersion.getDeployId())
                    serviceVersionService.addServiceVersion(serviceVersion)
                }
            } else {
                ServiceVersion serviceVersion = new ServiceVersion()
                serviceVersion.setServerType([deployServiceVersion.getServerType()])
                serviceVersion.set_id(deployServiceVersion.get_id())
                serviceVersion.setType(deployServiceVersion.getType())
                serviceVersion.setServiceVersions(deployServiceVersion.getServiceVersions())
                serviceVersion.setDeployId(deployServiceVersion.getDeployId())
                serviceVersionService.addServiceVersion(serviceVersion)
            }
        } catch (Throwable t) {
            updateServiceVersionSuccess = false
            Logger.error(TAG, "Update serviceVersion err, errMsg: ${t.getMessage()}")
            deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), "ServiceVersion", DeployRecord.DEPLOY_SERVER_FAILED + DeployRecord.DEPLOY_SERVER_SEPEATOR + t.getMessage())
        }
        if (updateServiceVersionSuccess) {
            deployRecordService.upateDeployRecordServer(deployServiceVersion.getDeployId(), "ServiceVersion", DeployRecord.DEPLOY_SERVER_SUCCESS)
        }
    }

    private boolean canLoad(String serverType, String deployId) {
        if (!reloadManager.sameDeploy(serverType, deployId)) {
            Logger.info(TAG, "DeployId replaced")
            deployRecordService.upateDeployRecordServer(deployId, getNginxServer(serverType), DeployRecord.DEPLOY_SERVER_PAUSED + DeployRecord.DEPLOY_SERVER_SEPEATOR + "Replace by ${reloadManager.getDeployId(serverType)}")
            return false
        }
        return true
    }

    private String getNginxServer(String serverType) {
        return "nginx-" + nginxManager.getNginx(serverTypeManager.getServerType(serverType).getNginxName()).getIp()
    }
}
