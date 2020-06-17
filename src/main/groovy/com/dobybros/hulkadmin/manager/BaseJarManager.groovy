package com.dobybros.hulkadmin.manager

import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.utils.CommonStants
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.file.adapters.GridFSFileHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import script.file.FileAdapter

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
@Component
class BaseJarManager {
    @Autowired
    GridFSFileHandler fileAdapter
    private final String BASEREMOTEPATHPREFIX = "/basejars/"
    public static final String BASEJARSUFFIX = ".jar"
    public static final String BASEJARSEPRATOR = "\\."
    private final String TAG = BaseJarManager.class.getSimpleName()

    public void uploadBaseJar(InputStream inputStream, String jarName) {
        String baseJarName = getBaseJarName(jarName)
        if (baseJarName != null) {
            try {
                String thePath = BASEREMOTEPATHPREFIX + baseJarName + "/" + TimeUtils.getDateString(System.currentTimeMillis(), "yyyyMMddHHmmss") + BASEJARSUFFIX
                FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
                fileAdapter.saveFile(inputStream, path, FileAdapter.FileReplaceStrategy.REPLACE);
                Logger.info(TAG, "Upload jar ${jarName} success!!!")
            } catch (Throwable t) {
                Logger.error(TAG, "Upload jar failed, jarName: ${jarName} errMsg: ${t.getMessage()}")
                throw new GeneralException(Errors.ERROR_GRIDFS_UPLOADFAILED, "Upload jar failed, jarName: ${jarName} errMsg: ${t.getMessage()}")
            }
        } else {
            Logger.error(TAG, "Upload jar failed, jarName: ${jarName}")
        }
    }

    public InputStream getJarInputStream(String jarName, String version) {
        String baseJarName = getBaseJarName(jarName)
        if (baseJarName != null) {
            String thePath = BASEREMOTEPATHPREFIX + baseJarName + "/" + version + BASEJARSUFFIX
            return fileAdapter.readInputStream(new FileAdapter.PathEx(thePath))
        } else {
            Logger.error(TAG, "GetJarInputStream failed, jarName: ${jarName} version: ${version}")
        }
        return null
    }

    public Map getUpdateBaseJarsVersion(Map<String, String> currentDeployJarVersions) {
        if (currentDeployJarVersions == null || currentDeployJarVersions.isEmpty()) {
            return convertMongoJarName(getLatestBaseJarsVersion())
        } else {
            Map updateBaseJarsVersion = new HashMap()
            Map latestVersionMap = convertMongoJarName(getLatestBaseJarsVersion())
            for (String jarName : latestVersionMap.keySet()) {
                String currentVersion = currentDeployJarVersions[jarName]
                if(currentVersion == null){
                    updateBaseJarsVersion.put(jarName, latestVersionMap.get(jarName))
                }else {
                    if(Long.valueOf(latestVersionMap.get(jarName)) > Long.valueOf(currentVersion)){
                        updateBaseJarsVersion.put(jarName, latestVersionMap.get(jarName))
                    }
                }
            }
            return convertMongoJarName(updateBaseJarsVersion)
        }
    }
    public Map<String, String> convertMongoJarName(Map<String, String> normalMap){
        Map map = new HashMap()
        for (String jarName : normalMap.keySet()){
            map[jarName.replaceAll("\\.", "__")] = normalMap[jarName]
        }
        return map
    }
    public Map<String, String> convertJarName(Map mongoMap){
        Map map = new HashMap()
        for (String jarName : mongoMap.keySet()){
            map[jarName.replaceAll("__", "\\.")] = mongoMap[jarName]
        }
        return map
    }
    private Map getLatestBaseJarsVersion() {
        List<FileAdapter.FileEntity> files = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(BASEREMOTEPATHPREFIX), null, true);
        if (files != null && !files.isEmpty()) {
            Map<String, String> versionMap = new HashMap()
            for (FileAdapter.FileEntity fileEntity : files) {
                String path = fileEntity.getAbsolutePath()
                String[] paths = path.split("/")
                String jarName = paths[2]
                String version = paths[3].split(BASEJARSEPRATOR)[0]
                String oldVersion = versionMap[jarName]
                if (oldVersion != null) {
                    if (Integer.valueOf(version) > Integer.valueOf(oldVersion)) {
                        versionMap[jarName + BASEJARSUFFIX] = version
                    }
                } else {
                    versionMap[jarName + BASEJARSUFFIX] = version
                }
            }
            return versionMap
        }
        return null
    }

    public String getBaseJarName(String baseJarName) {
        if (baseJarName.endsWith(BASEJARSUFFIX)) {
            String jarName = baseJarName.split(BASEJARSUFFIX)[0]
            return jarName
        }
        return null
    }
}
