package com.dobybros.hulkadmin.manager.config

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.data.Nginx
import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.manager.RemoteClientBuilder
import com.dobybros.hulkadmin.utils.CommonStants
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import org.apache.commons.io.FileUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.TimeUnit

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
@Component
class NginxManager {
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    RemoteClientBuilder remoteClientBuilder
    private Map<String, Nginx> nginxMap = new ConcurrentHashMap<>()
    private Map<String, Long> serverTypeNginxMap = new ConcurrentHashMap<>()
    private Map lockMap = new HashMap()
    private final String TAG = NginxManager.class.getSimpleName()
    public static final String nginxFileName = "nginx.conf"

    public boolean canLoadNginx(String deployId, String serverType) {
        Long lastLoadTime = serverTypeNginxMap[deployId + serverType]
        if (lastLoadTime == null) {
            serverTypeNginxMap[deployId + serverType] = System.currentTimeMillis()
            return true
        } else if ((lastLoadTime - System.currentTimeMillis()) >= TimeUnit.MINUTES.toMillis(5)) {
            serverTypeNginxMap.remove(serverTypeNginxMap)
            return true
        }
        return false
    }

    public void releaseNginx(String deployId, String serverType) {
        serverTypeNginxMap.remove(deployId + serverType)
    }

    public void addNginx(Nginx nginx) {
        nginxMap[nginx.getName()] = nginx
        lockMap[nginx.getName()] = new int[0]
    }

    public Nginx getNginx(String name) {
        Nginx nginx = nginxMap[name]
        if (nginx == null) {
            Logger.error(TAG, "Cant find nginx ${name}")
            throw new GeneralException(Errors.ERROR_CANTFIND_NGINX, "Cant find nginx in config, ningxName: ${name}")
        }
        return nginx
    }

    def getLock(String nginxName) {
        return lockMap[nginxName]
    }

    public def getNginxContent(String nginxName) {
        try {
            Nginx nginx = getNginx(nginxName)
            remoteClientBuilder.buildSftpClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).download(nginx.getNginxPath(), nginxFileName, applicationConfig.nginxPath + nginxFileName)
            Logger.info(TAG, "Download nginx.conf success!")
            String nginxContent = FileUtils.readFileToString(new File(applicationConfig.nginxPath + nginxFileName), "utf8")
            return ["nginxContent": nginxContent]
        } catch (Throwable t) {
            Logger.error(TAG, "Dwonload nginx.conf err, errMsg: ${t.getMessage()}")
            return ["message": t.getMessage()]
        }
    }

    public String uploadNginxFile(String nginxName, String nginxContent, String nginxTag) {
        try {
            Nginx nginx = getNginx(nginxName)
            FileUtils.writeStringToFile(new File(applicationConfig.nginxPath + nginxFileName + "_" + nginxTag), nginxContent, "utf8")
            remoteClientBuilder.buildSftpClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).upload(applicationConfig.nginxPath + nginxFileName + "_" + nginxTag, nginx.getNginxPath() + nginxFileName + "_" + nginxTag)
            Logger.info(TAG, "Upload nginx.conf success, remoteNginxPath: ${nginx.getNginxPath() + nginxFileName + "_" + nginxTag}")
        } catch (Throwable t) {
            Logger.error(TAG, "Upload nginx.conf err, errMsg: ${t.getMessage()}")
            return t.getMessage()
        } finally {
            FileUtils.deleteQuietly(new File(applicationConfig.nginxPath + nginxFileName + "_" + nginxTag))
            FileUtils.deleteQuietly(new File(applicationConfig.nginxPath + nginxFileName))
        }
        return null
    }

    public String reloadNginx(String nginxName, String nginxTag) {
        try {
            Nginx nginx = getNginx(nginxName)
            String nginxBak = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo mv " + nginx.getNginxPath() + nginxFileName + " " + nginx.getNginxPath() + nginxFileName + "_" + nginxBak)
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo mv " + nginx.getNginxPath() + nginxFileName + "_" + nginxTag + " " + nginx.getNginxPath() + nginxFileName)
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo docker exec nginx nginx -s reload")
            Logger.info(TAG, "Reload nginx ${nginxName} success")
        } catch (Throwable t) {
            Logger.error(TAG, "Reload nginx err, errMsg: ${t.getMessage()}")
            return t.getMessage()
        }
        return null
    }

    public List testNginx(String nginxName, String nginxTag) {
        Nginx nginx = getNginx(nginxName)
        try {
            return remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo docker exec nginx nginx -tc " + nginx.getNginxPath() + nginxFileName + "_" + nginxTag)
        } catch (Throwable t) {
            Logger.error(TAG, "Test nginx err, errMsg: ${t.getMessage()}")
            return [t.getMessage()]
        }
    }

    public Set getNginxNames() {
        return nginxMap.keySet()
    }
}
