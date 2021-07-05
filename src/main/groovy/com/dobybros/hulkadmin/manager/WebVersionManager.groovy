package com.dobybros.hulkadmin.manager

import chat.utils.TimerEx
import chat.utils.TimerTaskEx
import com.dobybros.hulkadmin.data.Nginx
import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.manager.config.NginxManager
import com.dobybros.hulkadmin.manager.db.RedisManager
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import org.apache.commons.io.IOUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.web.multipart.MultipartFile

import javax.servlet.http.HttpServletResponse
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentMap

/**
 * Created by lick on 2020/6/16.
 * Description：
 */
@Component
class WebVersionManager {
    @Autowired
    NginxManager nginxManager
    @Autowired
    RemoteClientBuilder remoteClientBuilder
    @Autowired
    RedisManager redisManager
    private Map<String, List> webNginxMap = new ConcurrentHashMap<>()
    public static final String WEBVERSIONPREFIX = "HULKADMIN_WEBVERSIONS"

    public List getAllWebVersions(String nginxName) {
        Nginx nginx = nginxManager.getNginx(nginxName)
        List webFilenames = remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommandReturnLs("sudo ls " + nginx.getWebPath())
        if (webFilenames != null && !webFilenames.isEmpty()) {
            List webFilenameList = new ArrayList()
            Map webFileNameMap
            for (String webFileName : webFilenames) {
                webFileNameMap = new HashMap()
                List projectFileNames = remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommandReturnLs("sudo ls " + nginx.getWebPath() + "/" + webFileName)
                if (projectFileNames != null && !projectFileNames.isEmpty()) {
                    Map projectFileNameMap
                    List projectFileNameList = new ArrayList()
                    for (String projectFileName : projectFileNames) {
                        projectFileNameMap = new HashMap()
                        List projectFileNameVersions = remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommandReturnLs("sudo ls " + nginx.getWebPath() + "/" + webFileName + "/" + projectFileName)
                        if (projectFileNameVersions != null && !projectFileNameVersions.isEmpty()) {
                            List projectFileNameVersionList = sortWebVersion(projectFileNameVersions)
                            projectFileNameMap.put("projectName", projectFileName)
                            projectFileNameMap.put("versions", projectFileNameVersionList)
                        }
                        projectFileNameList.add(projectFileNameMap)
                    }
                    if (projectFileNameMap != null && !projectFileNameMap.isEmpty()) {
                        webFileNameMap.put("webName", webFileName)
                        webFileNameMap.put("projectNames", projectFileNameList)
                    }
                }
                if (!webFileNameMap.isEmpty()) {
                    webFilenameList.add(webFileNameMap)
                }
            }
            if (!webFilenameList.isEmpty()) {
                webNginxMap[nginxName] = webFilenameList
            }
        }
        return null
    }

    List getWebList(String nginxName) {
        List list = webNginxMap[nginxName]
        if (list == null) {
            getAllWebVersions(nginxName)
            TimerEx.schedule(new TimerTaskEx() {
                @Override
                void execute() {
                    getAllWebVersions(nginxName)
                }
            }, 15000L, 15000L)
            return webNginxMap[nginxName]
        }
        return list
    }

    public void uploadWebFile(String nginxName, String webName, String projectName, MultipartFile file) {
        Nginx nginx = nginxManager.getNginx(nginxName)
        String projectPath = nginx.getWebPath() + "/" + webName + "/" + projectName
        String fileName = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
        remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo mkdir -p " + projectPath + "/" + fileName)
        remoteClientBuilder.buildSftpClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).uploadByStream(projectPath, fileName + ".zip", file.inputStream)
        remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo unzip -d " + projectPath + "/" + fileName + " " + projectPath + "/" + fileName + ".zip")
        remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo rm -rf " + projectPath + "/" + fileName + ".zip")
        getAllWebVersions(nginxName)
    }

    public void deleteWebVersion(String nginxName, String webName, String projectName, String version) {
        Nginx nginx = nginxManager.getNginx(nginxName)
        String projectPath = nginx.getWebPath() + "/" + webName + "/" + projectName
        remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo rm -rf " + projectPath + "/" + version)
        getAllWebVersions(nginxName)
    }

    public void setCurrentVersions(Map webVersions) {
        redisManager.getRedisHandler().setObject(WEBVERSIONPREFIX, webVersions)

    }

    public Map getCurrentWebVersions() {
        Map webVersions = redisManager.getRedisHandler().getObject(WEBVERSIONPREFIX, Map.class)
        return webVersions
    }

    private List sortWebVersion(List fileNames) {
        List projectFileNameVersionLongList = new ArrayList()
        for (String projectFileNameVersion : fileNames) {
            projectFileNameVersionLongList.add(TimeUtils.getDateLong(projectFileNameVersion, "yyyy_MM_dd_HH_mm_ss"))
        }
        Collections.reverse(projectFileNameVersionLongList)
        List projectFileNameVersionList = new ArrayList()
        for (Long projectFileNameVersionLong : projectFileNameVersionLongList) {
            projectFileNameVersionList.add(TimeUtils.getDateString(projectFileNameVersionLong, "yyyy_MM_dd_HH_mm_ss"))
        }
        return projectFileNameVersionList
    }

    public void downloadWeb(String nginxName, String webName, String projectName, String version, HttpServletResponse response) {
        Nginx nginx = nginxManager.getNginx(nginxName)
        InputStream inputStream
        String projectPath = nginx.getWebPath() + "/" + webName + "/" + projectName
        String projectVersionName = webName + "-" + projectName + "-" + version
        SftpClient sftpClient
        try {
            response.setContentType("application/zip");
            response.addHeader("Content-Disposition", "attachment;fileName=" + projectVersionName + ".zip");
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo cp -r " + projectPath + "/" + version + " ./" + projectVersionName)
            //remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo zip -r " + projectVersionName + ".zip " + projectVersionName + "/*")
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("cd " + projectVersionName + " && sudo zip -r ../" + projectVersionName + ".zip ./*")
            sftpClient = remoteClientBuilder.buildSftpClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort()))
            inputStream = sftpClient.download(projectVersionName + ".zip")
            if(inputStream != null){
                IOUtils.copy(inputStream, response.getOutputStream())
            }else {
                throw new GeneralException(Errors.ERROR_SFTP_DOWNLOAD_FAILED, "Sftp download failed")
            }
        }finally{
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo rm -rf " + projectVersionName + ".zip")
            remoteClientBuilder.buildShellClient(nginx.getIp(), nginx.getAccount(), nginx.getPasswd(), Integer.valueOf(nginx.getPort())).excuteCommand("sudo rm -rf " + projectVersionName)
            if (inputStream != null) {
                inputStream.close()
            }
            if(sftpClient != null){
                sftpClient.close()
            }
        }
    }
}
