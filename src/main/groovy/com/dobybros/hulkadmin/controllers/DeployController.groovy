package com.dobybros.hulkadmin.controllers

import chat.errors.CoreException
import chat.json.Result
import chat.logs.LoggerEx
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONObject
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.NginxConfig
import com.dobybros.hulkadmin.data.DeployRecord
import com.dobybros.hulkadmin.data.Nginx
import com.dobybros.hulkadmin.data.Server
import com.dobybros.hulkadmin.data.ServerType
import com.dobybros.hulkadmin.error.Errors
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.manager.BaseJarManager
import com.dobybros.hulkadmin.manager.GroovyZipManager
import com.dobybros.hulkadmin.manager.ReloadManager
import com.dobybros.hulkadmin.manager.WebVersionManager
import com.dobybros.hulkadmin.manager.config.NginxManager
import com.dobybros.hulkadmin.manager.config.ServerManager
import com.dobybros.hulkadmin.manager.config.ServerTypeManager
import com.dobybros.hulkadmin.manager.db.RedisManager
import com.dobybros.hulkadmin.service.impl.DeployRecordServiceImpl
import com.dobybros.hulkadmin.utils.CommonStants
import com.dobybros.hulkadmin.utils.RequestUtils
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.data.DeployServiceVersion
import com.docker.data.DockerStatus
import com.docker.data.ServiceVersion
import com.docker.file.adapters.GridFSFileHandler
import com.docker.storage.adapters.impl.DeployServiceVersionServiceImpl
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.storage.adapters.impl.ServersServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import com.mongodb.BasicDBObject
import org.apache.commons.io.FileUtils
import org.apache.commons.lang.StringUtils
import org.apache.commons.lang.exception.ExceptionUtils
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.web.bind.annotation.*
import script.file.FileAdapter
import script.memodb.ObjectId

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentSkipListMap
import java.util.regex.Matcher
import java.util.regex.Pattern

@RequestMapping("deploy")
@CrossOrigin
@RestController
class DeployController {
    private static final String TAG = DeployController.class.getSimpleName()
    private final String nginxFileName = "nginx.conf"
    private final String GROOVYCLOUYDSERVERS = "groovycloud.servers"
    private final String GROOVYCLOUYDSERVERS1 = "groovycloud.server."

    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    NginxConfig nginxConfig
    @Autowired
    GridFSFileHandler fileAdapter
    @Autowired
    ServersServiceImpl serversService
    @Autowired
    DockerStatusServiceImpl dockerStatusService
    @Autowired
    DeployServiceVersionServiceImpl deployServiceVersionService
    @Autowired
    RedisManager redisManager
    @Autowired
    ServerTypeManager serverTypeManager
    @Autowired
    ServerManager serverManager
    @Autowired
    GroovyZipManager groovyZipManager
    @Autowired
    BaseJarManager baseJarManager
    @Autowired
    DeployRecordServiceImpl deployRecordService
    @Autowired
    ReloadManager reloadManager
    @Autowired
    NginxManager nginxManager
    @Autowired
    WebVersionManager webVersionManager

    @GetMapping("repairconfig")
    def repairConfig() {
        List<Document> configs = serversService.getServerConfigs()
        for (Document document : configs) {
            for (String key : document.keySet()) {
                if (key.equals("_id")) {
                    String value = document.get(key)
                    if (!value.contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                        document.put(key, value + CommonStants.SERVICE_VERSION_SYMBOL + "1")
                        serversService.deleteServerConfig(new Document().append("_id", value))
                        try {
                            serversService.addServerConfig(document)
                        } catch (Throwable t) {

                        }
                    }
                    break
                }
            }
        }
    }

    @GetMapping("repairbaseJars")
    def repairBaseJars() {
        File file = new File(applicationConfig.basrJarsPath)
        if (file.exists() && file.isDirectory()) {
            List<File> files = file.listFiles()
            if (files != null && !files.isEmpty()) {
                for (File jarFile : files) {
                    baseJarManager.uploadBaseJar(FileUtils.openInputStream(jarFile), jarFile.getName())
                }
            }
        } else {
            throw new GeneralException(Errors.ERROR_PARAMS_ILLEGAL, "File ${applicationConfig.basrJarsPath} is illegal")
        }
        Logger.info(TAG, "Repair base jars finish!")
    }

    @GetMapping("baseJars/{serverType}")
    def getBaseJars(@PathVariable String serverType) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        Map result = new HashMap()
        result.put("serverType", serverType)
        if (deployServiceVersion != null) {
            if (deployServiceVersion.baseJarVersions != null) {
                List<Map> list = new ArrayList<>()
                Map normalBaseJarsMap = baseJarManager.convertJarName(deployServiceVersion.baseJarVersions)
                for (String jarName : normalBaseJarsMap.keySet()) {
                    Map map = new HashMap()
                    map.put("jarName", jarName)
                    map.put("version", TimeUtils.getDateString(normalBaseJarsMap.get(jarName), "yyyyMMddHHmmss"))
                    if (jarName.contains("container")) {
                        list.add(0, map)
                    } else {
                        list.add(map)
                    }
                }
                if (!list.isEmpty()) {
                    result.put("baseJarVersions", list)
                }
            }
            Map ipDockerNamesMap = serverManager.getDockerNames(serverType)
            List list = new ArrayList()
            for (String ip : ipDockerNamesMap.keySet()) {
                Map map = new HashMap()
                map.put("ip", ip)
                map.put("dockerNames", JSON.toJSONString(ipDockerNamesMap.get(ip)))
                list.add(map)
            }
            result.put("servers", list)
        }
        return result
    }

    @GetMapping("/serviceconfig/healthy")
    def checkServiceVersionConfig(@RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version) {
        String serviceNameVersion = null
        if (version != null) {
            String versionNumber = null
            String[] versionStrs = version.split(":")
            if (versionStrs.length > 1) {
                versionNumber = versionStrs[1].trim()
            } else {
                versionNumber = versionStrs[0].trim()
            }
            if (versionNumber != null) {
                if (versionNumber != "0") {
                    serviceNameVersion = serviceName + "_v" + versionNumber
                } else {
                    serviceNameVersion = serviceName
                }
            }
            Document document = serversService.getServerConfig(serviceNameVersion)
            if (document != null) {
                return ["result": true, "service": serviceNameVersion]
            }
        }
        return ["result": false, "service": serviceNameVersion]
    }

    private Map getServices() {
        List<Document> documents = serversService.getServerConfigs()
        Map serviceMap = new HashMap()
        serviceMap.put("value", "service")
        serviceMap.put("label", "service")
        Map serviceVersionNewMap = new HashMap()
        Map serviceVersionMap = new HashMap()
        for (Document document : documents) {
            String serviceVersion = document.get("_id")
            if (serviceVersion.contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                String service = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)[0]
                String version = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)[1]
                List theVersionList = serviceVersionMap.get(service)
                String theNewVersion = serviceVersionNewMap.get(service)
                if (theNewVersion == null) {
                    serviceVersionNewMap.put(service, version)
                } else {
                    if (Integer.valueOf(version) > Integer.valueOf(theNewVersion)) {
                        serviceVersionNewMap.put(service, version)
                    }
                }
                if (theVersionList == null) {
                    theVersionList = new ArrayList()
                    serviceVersionMap.put(service, theVersionList)
                }
                theVersionList.add(version)
            }
        }
        List firstChildList = new ArrayList()
        serviceMap.put("children", firstChildList)
        for (String service : serviceVersionMap.keySet()) {
            Map secondMap = new HashMap()
            secondMap.put("value", service)
            secondMap.put("label", service)
            firstChildList.add(secondMap)
            List secondChildList = new ArrayList()
            secondMap.put("children", secondChildList)
            Map thirdMap1 = new HashMap()
            Map thirdMap2 = new HashMap()
            thirdMap1.put("value", "latest version")
            thirdMap1.put("label", "latest version")
            thirdMap2.put("value", "allVersion")
            thirdMap2.put("label", "allVersion")
            secondChildList.add(thirdMap1)
            secondChildList.add(thirdMap2)
        }
        return serviceMap
    }

    private Map getServiceVersions() {
        List<DeployServiceVersion> serviceVersions = deployServiceVersionService.getServiceVersionsAll()
        Map serviceVersionMap = new HashMap()
        serviceVersionMap.put("value", "serverType")
        serviceVersionMap.put("label", "serverType")
        Map serverTypeMap = new HashMap()
        for (DeployServiceVersion serviceVersion : serviceVersions) {
            String serverType = serviceVersion.getServerType()
            Map theServerTypeMap = serverTypeMap.get(serverType)
            if (theServerTypeMap == null) {
                theServerTypeMap = new HashMap()
                serverTypeMap.put(serverType, theServerTypeMap)
            }
            Map theTypeMap = theServerTypeMap.get(serverType)
            if (theTypeMap == null) {
                theTypeMap = new HashMap()
                theServerTypeMap.put(serviceVersion.type, theTypeMap)
            }
            Map allServiceVersionMap = serviceVersion.serviceVersions
            for (String service : allServiceVersionMap.keySet()) {
                String theVersion = theTypeMap.get(service)
                if (theVersion == null) {
                    theTypeMap.put(service, allServiceVersionMap.get(service))
                } else {
                    theTypeMap.put(service, theVersion + "," + allServiceVersionMap.get(service))
                }
            }
        }
        List firstChildList = new ArrayList()
        serviceVersionMap.put("children", firstChildList)
        for (String serverType : serverTypeMap.keySet()) {
            Map secondChildMap = new HashMap()
            secondChildMap.put("value", serverType)
            secondChildMap.put("label", serverType)
            firstChildList.add(secondChildMap)
            Map theTypeMap = serverTypeMap.get(serverType)
            List secondCildList = new ArrayList()
            secondChildMap.put("children", secondCildList)
            for (String type : theTypeMap.keySet()) {
                Map thirdChildMap = new HashMap()
                thirdChildMap.put("value", type)
                thirdChildMap.put("label", type)
                secondCildList.add(thirdChildMap)
                List thirdChildList = new ArrayList()
                Map fourthMap1 = new HashMap()
                Map fourthMap2 = new HashMap()
                thirdChildList.add(fourthMap1)
                thirdChildList.add(fourthMap2)
                thirdChildMap.put("children", thirdChildList)
                fourthMap1.put("value", "currentVersion")
                fourthMap1.put("label", "currentVersion")
                fourthMap2.put("value", "allVersion")
                fourthMap2.put("label", "allVersion")
            }
        }
        return serviceVersionMap
    }

    @PostMapping("/serverconfig")
    def addConfig(@RequestBody Document config) {
        Document configFinal = new Document()
        if (config != null) {
            for (String key : config.keySet()) {
                if (!StringUtils.isEmpty(key)) {
                    Map<String, String> map = config.get(key)
                    if (map.get("key").equals("_id")) {
                        String serviceVersion = map.get("value")
                        map.put("value", serviceVersion.toLowerCase())
                        if (!serviceVersion.toLowerCase().contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                            throw new GeneralException(5000, "_id's value must contains _v")
                        }
                    }
                    if (!StringUtils.isEmpty(map.get("key")) && !StringUtils.isEmpty(map.get("value"))) {
                        configFinal.append(map.get("key").replaceAll(" ", "").replaceAll("\\.", "_"), map.get("value").replaceAll(" ", ""))
                    }
                }
            }
        }
        if (!configFinal.isEmpty()) {
            serversService.deleteServerConfig(new Document().append("_id", configFinal.get("_id")))
            serversService.addServerConfig(configFinal)
            String serviceVersion = configFinal.get("_id")
            if (!serviceVersion.contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                throw new CoreException(Errors.ERROR_PARAMS_ILLEGAL, "Config's _id must contains '_' ,serviceVersion: ${serviceVersion}")
            }
            String service = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)[0]
            String version = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)[1]
            deployServiceVersionService.updateTheServiceVersion(service, version)
        }
    }

    @PostMapping("/serverconfig/withlast")
    def addConfigWithLast(@RequestBody Document config) {
        Document configFinal = new Document()
        if (config != null) {
            for (String key : config.keySet()) {
                if (!StringUtils.isEmpty(key)) {
                    Map<String, String> map = config.get(key)
                    if (map.get("key").equals("_id")) {
                        String serviceVersion = map.get("value")
                        if (serviceVersion.contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                            String[] strings = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)
                            String oldServiceVersion = strings[0] + (strings[1].equals("1") ? "" : (CommonStants.SERVICE_VERSION_SYMBOL + (Integer.valueOf(strings[1]) - 1).toString()))
                            if (serversService.getServerConfig(oldServiceVersion) != null) {
                                configFinal = serversService.getServerConfig(oldServiceVersion)
                            }
                        } else {
                            throw new GeneralException(5000, "_id's value must contains _v")
                        }
                    }
                    if (!StringUtils.isEmpty(map.get("key")) && !StringUtils.isEmpty(map.get("value"))) {
                        configFinal.append(map.get("key").replaceAll(" ", "").replaceAll("\\.", "_"), map.get("value").replaceAll(" ", ""))
                    }
                }
            }
        }
        if (!configFinal.isEmpty()) {
            serversService.deleteServerConfig(new Document().append("_id", configFinal.get("_id")))
            serversService.addServerConfig(configFinal)
            String serviceVersion = configFinal.get("_id")
            if (!serviceVersion.contains(CommonStants.SERVICE_VERSION_SYMBOL)) {
                throw new CoreException(Errors.ERROR_PARAMS_ILLEGAL, "Config's _id must contains '_' ,serviceVersion: ${serviceVersion}")
            }
            String service = serviceVersion.split("_")[0]
            String version = serviceVersion.split("_")[1]
            deployServiceVersionService.updateTheServiceVersion(service, version)
        }
    }

    @GetMapping("/serviceconfig/{service}/{version}")
    def getServiceConfigs(@PathVariable String service, @PathVariable Integer version) {
        String serviceVersion = service + CommonStants.SERVICE_VERSION_SYMBOL + version
        Map mapInternal = null
        Document document = serversService.getServerConfig(serviceVersion)
        Map map = new ConcurrentSkipListMap(new MyComparator())
        for (String key : document.keySet()) {
            mapInternal = new HashMap()
            mapInternal.put("key", key)
            mapInternal.put("value", document.get(key))
            map.put(key, mapInternal)
        }
        return map
    }

    @GetMapping("/serverconfig")
    def getConfigServicersion(@RequestParam(required = false, name = "s") String searchInput) {
        List searchServies = new ArrayList()
        if (StringUtils.isNotBlank(searchInput) && searchInput != "undefined") {
            Map serverTypeMap = getServiceVresions()
            for (String serverType : serverTypeMap.keySet()) {
                if (serverType.contains(searchInput)) {
                    Map theTypeMap = serverTypeMap.get(serverType)
                    for (String type : theTypeMap.keySet()) {
                        Map theServiceMap = theTypeMap.get(type)
                        for (String service : theServiceMap.keySet()) {
                            searchServies.add(service)
                        }
                    }
                }
            }
        }
        List<Document> configs = serversService.getServerConfigs()
        Map<String, List<Integer>> serviceVersionMap = new HashMap()
        for (Document document : configs) {
            String serviceVersion = document.get("_id")
            if (serviceVersion != null) {
                String[] serviceVersionArray = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)
                String service = serviceVersionArray[0]
                String version = serviceVersionArray[1]
                List<Integer> serviceVersionList = serviceVersionMap.get(service)
                if (serviceVersionList == null) {
                    serviceVersionList = new ArrayList<>()
                    serviceVersionMap.put(service, serviceVersionList)
                }
                serviceVersionList.add(Integer.valueOf(version))
            }
        }
        List list = new ArrayList()
        for (String service : serviceVersionMap.keySet()) {
            if (StringUtils.isNotBlank(searchInput) && searchInput != "undefined") {
                if (!service.contains(searchInput) && !searchServies.contains(service)) {
                    continue
                }
            }
            Map serviceMap = new HashMap()
            list.add(serviceMap)
            List<Integer> versionList = serviceVersionMap.get(service)
            Collections.sort(versionList)
            List children = new ArrayList()
            for (int i = versionList.size() - 1; i >= 0; i--) {
                if (i == (versionList.size() - 1)) {
                    serviceMap.put("service", service)
                    serviceMap.put("version", versionList[i])
                    serviceMap.put("id", UUID.randomUUID().toString())
                } else {
                    Map internalMap = new HashMap()
                    internalMap.put("service", service)
                    internalMap.put("version", versionList[i])
                    internalMap.put("id", UUID.randomUUID().toString())
                    children.add(internalMap)
                }
            }
            serviceMap.put("children", children)
        }
        List downList = new ArrayList()
        if (StringUtils.isBlank(searchInput) || searchInput == "undefined") {
            downList.add(getServiceVersions())
            downList.add(getServices())
        }
        return ["list": list, "downList": downList]
    }

    @DeleteMapping("/serverconfig/{serviceName}")
    def deleteConfig(@PathVariable String serviceName) {
        return serversService.deleteServerConfig((new Document().append("_id", serviceName)))
    }

    private Map getServiceVresions() {
        List<DeployServiceVersion> serviceVersions = deployServiceVersionService.getServiceVersionsAll()
        Map serverTypeMap = new HashMap()
        for (DeployServiceVersion serviceVersion : serviceVersions) {
            String serverType = serviceVersion.getServerType()
            Map theServerTypeMap = serverTypeMap.get(serverType)
            if (theServerTypeMap == null) {
                theServerTypeMap = new HashMap()
                serverTypeMap.put(serverType, theServerTypeMap)
            }
            Map theTypeMap = theServerTypeMap.get(serverType)
            if (theTypeMap == null) {
                theTypeMap = new HashMap()
                theServerTypeMap.put(serviceVersion.type, theTypeMap)
            }
            Map allServiceVersionMap = serviceVersion.serviceVersions
            for (String service : allServiceVersionMap.keySet()) {
                List theVersionList = theTypeMap.get(service)
                if (theVersionList == null) {
                    theVersionList = new ArrayList()
                    theTypeMap.put(service, theVersionList)
                }
                if (!theVersionList.contains(serviceVersion.serviceVersions.get(service))) {
                    theVersionList.add(serviceVersion.serviceVersions.get(service))
                }
            }
        }
        return serverTypeMap
    }

    @GetMapping("/groovyzips")
    def getGroovyZips(@RequestParam(required = false, name = "s") String searchInput) {
        List searchServies = new ArrayList()
        if (StringUtils.isNotBlank(searchInput) && searchInput != "undefined") {
            Map serverTypeMap = getServiceVresions()
            for (String serverType : serverTypeMap.keySet()) {
                if (serverType.contains(searchInput)) {
                    Map theTypeMap = serverTypeMap.get(serverType)
                    for (String type : theTypeMap.keySet()) {
                        Map theServiceMap = theTypeMap.get(type)
                        for (String service : theServiceMap.keySet()) {
                            searchServies.add(service)
                        }
                    }
                }
            }
        }
        List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath), null, true)
        if (fileEntities != null && fileEntities.size() > 0) {
            Map<String, Map<String, String>> serviceMap = new HashMap<>()
            for (FileAdapter.FileEntity fileEntity : fileEntities) {
                String absolutePath = fileEntity.absolutePath
                if (absolutePath != null) {
                    String[] serviceVersions = absolutePath.split("/")
                    String serviceVersion;
                    if (StringUtils.isEmpty(serviceVersions[0])) {
                        serviceVersion = serviceVersions[2]
                    } else {
                        serviceVersion = serviceVersions[1]
                    }
                    String version = null
                    String service = serviceVersion.split("_v")[0]
                    if (serviceVersion.split("_v").length > 1) {
                        version = serviceVersion.split("_v")[1]
                    }
                    if (service != null) {
                        Map versionDateMap = serviceMap.get(service)
                        if (versionDateMap == null) {
                            versionDateMap = new HashMap()
                            serviceMap.put(service, versionDateMap)
                        }
                        if (version == null) {
                            versionDateMap.put("0", TimeUtils.getDateString(fileEntity.lastModificationTime, "yyyy-MM-dd HH:mm:ss"))
                        } else {
                            versionDateMap.put(version, TimeUtils.getDateString(fileEntity.lastModificationTime, "yyyy-MM-dd HH:mm:ss"))
                        }
                    }
                }
            }
            List outList = new ArrayList()
            List interalList = null
            for (String serviceName : serviceMap.keySet()) {
                if (StringUtils.isNotBlank(searchInput) && searchInput != "undefined") {
                    if (!serviceName.contains(searchInput) && !searchServies.contains(serviceName)) {
                        continue
                    }
                }
                Map newServiceMap = new HashMap<>()
                Map versionDateMap = serviceMap.get(serviceName)
                outList.add(newServiceMap)
                newServiceMap.put("serviceName", serviceName)
                List versionList = new ArrayList()
                List<Integer> sortList = new ArrayList()
                String type = "groovy"
                for (String version : versionDateMap.keySet()) {
                    String[] versionStrs = version.split("#")
                    version = versionStrs[0]
                    if(versionStrs.length > 1){
                        type = versionStrs[1].toLowerCase()
                    }
                    sortList.add(Integer.valueOf(version))
                }
                Collections.sort(sortList)
                if (sortList.size() > 0) {
                    interalList = new ArrayList()
                    for (int i = sortList.size() - 1; i >= 0; i--) {
                        if (i == sortList.size() - 1) {
                            newServiceMap.put("version", String.valueOf(sortList.get(i)))
                            newServiceMap.put("date", versionDateMap.get(String.valueOf(type.equals("groovy") ? sortList.get(i) : sortList.get(i) + "#Jar")))
                            newServiceMap.put("maxVersion", String.valueOf(sortList.get(i)))
                            newServiceMap.put("id", UUID.randomUUID().toString())
                            newServiceMap.put("type", type)
                        } else {
                            Map newVersionDateMap = new HashMap()
                            newVersionDateMap.put("serviceName", serviceName)
                            newVersionDateMap.put("version", String.valueOf(sortList.get(i)))
                            newVersionDateMap.put("date", versionDateMap.get(String.valueOf(type.equals("groovy") ? sortList.get(i) : sortList.get(i) + "#Jar")))
                            newVersionDateMap.put("id", UUID.randomUUID().toString())
                            newVersionDateMap.put("type", type)
                            interalList.add(newVersionDateMap)
                        }
                        Map versionMap = new HashMap()
                        versionMap.put("value", "version: " + String.valueOf(sortList.get(i)))
                        versionList.add(versionMap)
                    }
                    newServiceMap.put("children", interalList)
                    newServiceMap.put("versions", versionList)
                }
            }
            List downList = new ArrayList()
            if (StringUtils.isBlank(searchInput) || searchInput == "undefined") {
                downList.add(getServiceVersions())
                downList.add(getServices())
            }
            return ["list": outList, "downList": downList]
        }
    }

    @DeleteMapping("/groovyzip")
    def deleteGroovy(@RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version) {
        String versionNumber = null
        if (version != null) {
            String[] versionStrs = version.split(":")
            if (versionStrs.length > 1) {
                versionNumber = versionStrs[1].trim()
            } else {
                versionNumber = versionStrs[0].trim()
            }
        }
        if (versionNumber != null) {
            String thePath = null
            if (versionNumber != 0) {
                thePath = applicationConfig.scriptRemotePath + serviceName + "_v" + versionNumber + "/groovy.zip"
            } else {
                thePath = applicationConfig.scriptRemotePath + serviceName + "/groovy.zip"
            }
            FileAdapter.PathEx path = new FileAdapter.PathEx(thePath);
            fileAdapter.deleteFile(path)
        }
    }

    @DeleteMapping("/groovyzips")
    def deleteGroovys(@RequestParam(value = "s") String serviceName) {
        if (!StringUtils.isEmpty(serviceName)) {
            fileAdapter.deleteFileRegix(new BasicDBObject("filename", new Document().append("\$regex", applicationConfig.scriptRemotePath + serviceName)))
        }
    }

    @GetMapping("/deployserviceversions")
    def getAllDeployServiceVersions() {
        Map serverTypeMap = serverTypeManager.getServerTypeMap()
        List<Map> list = new ArrayList<>()
        for (String serverType : serverTypeMap.keySet()) {
            Map map = new HashMap()
            ServerType serverTypeData = serverTypeMap.get(serverType)
            map.put("serverType", serverType)
            map.put("groovyCloudType", ServerType.getGroovyTypeStr(serverTypeData.getGroovyCloudType()))
            DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
            if (deployServiceVersion != null) {
                map.put("serviceLength", deployServiceVersion.getServiceVersions() == null ? 0 : deployServiceVersion.getServiceVersions().size())
                map.put("baseJarLength", deployServiceVersion.getBaseJarVersions() == null ? 0 : deployServiceVersion.getBaseJarVersions().size())
            } else {
                map.put("serviceLength", 0)
                map.put("baseJarLength", 0)
            }
            list.add(map)
        }
        return list
    }

    @GetMapping("/deployserviceversions/services/{serverType}")
    def getDeployServices(@PathVariable String serverType) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        if (deployServiceVersion != null) {
            if (deployServiceVersion.serviceVersions != null && !deployServiceVersion.serviceVersions.isEmpty()) {
                List<Map> list = new ArrayList<>()
                for (String service : deployServiceVersion.serviceVersions.keySet()) {
                    Map map = new HashMap()
                    map.put("service", service)
                    map.put("version", deployServiceVersion.serviceVersions.get(service))
                    list.add(map)
                }
                return ["serviceVersions": list, "serverType": deployServiceVersion.getServerType()]
            }
        }
        return ["serverType": serverType]
    }

    @PostMapping("/deployserviceversions/services/{serverType}/service/{serviceName}")
    def addDeployService(@PathVariable String serverType, @PathVariable String serviceName) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        if (deployServiceVersion == null) {
            throw new GeneralException(Errors.ERROR_CANTFIND_DEPLOYSERVICEVERSION, "Cant find deployServiceVersion, serverType: ${serverType}")
        }
        if (deployServiceVersion.serviceVersions != null && deployServiceVersion.serviceVersions.containsKey(serviceName)) {
            throw new GeneralException(Errors.ERROR_SERVICENAME_EXIST, "The deployServiceVersion contains ${serviceName}")
        }
        List<String> versions = groovyZipManager.getServiceVersions(serviceName)
        String maxVersion = "-1"
        if (versions != null && !versions.isEmpty()) {
            maxVersion = versions.get(versions.size() - 1)
        }
        deployServiceVersionService.addService(serverType, serviceName, maxVersion)
        return getDeployServices(serverType)
    }

    @DeleteMapping("/deployserviceversions/services/{serverType}/service/{serviceName}")
    def delDeployService(@PathVariable String serverType, @PathVariable String serviceName) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        if (deployServiceVersion == null) {
            throw new GeneralException(Errors.ERROR_CANTFIND_DEPLOYSERVICEVERSION, "Cant find deployServiceVersion, serverType: ${serverType}")
        }
        deployServiceVersionService.deleteService(serverType, serviceName)
        return getDeployServices(serverType)
    }

    @DeleteMapping("/deployserviceversion")
    def deleteServiceVersion(@RequestParam(value = "i") String id) {
        if (!StringUtils.isNotBlank(id)) {
            deployServiceVersionService.deleteServiceVersion(id)
            return getAllDeployServiceVersions()
        }
        return null
    }

    @GetMapping("allnginx")
    def getAllNginx() {
        List nginxList = new ArrayList()
        Map map = null
        for (String nginxName : nginxManager.getNginxNames()) {
            map = new HashMap()
            map.put("value", nginxName)
            nginxList.add(map)
        }
        return nginxList
    }


    @GetMapping("/webs/{nginxName}")
    def getWebs(@PathVariable String nginxName) {
        if (StringUtils.isNotBlank(nginxName)) {
            return webVersionManager.getWebList(nginxName)
        }
    }

    @DeleteMapping("/web/{nginxName}/{webName}/{projectName}/{version}")
    def deleteWeb(@PathVariable String nginxName, @PathVariable String webName, @PathVariable String projectName, @PathVariable String version) {
        webVersionManager.deleteWebVersion(nginxName, webName, projectName, version)
    }

    @GetMapping("/serverweb/{nginxName}")
    def getServerWeb(@PathVariable String nginxName) {
        List webList = webVersionManager.getWebList(nginxName)
        if (webList != null) {
            List finalList = new ArrayList()
            for (Map map : webList) {
                String webName = map.get("webName")
                List projectNames = map.get("projectNames")
                for (Map projectMap : projectNames) {
                    Map finalProjectMap = new HashMap()
                    String projectName = projectMap.get("projectName")
                    List versions = projectMap.get("versions")
                    finalProjectMap.put("webName", webName)
                    finalProjectMap.put("projectName", projectName)
                    finalProjectMap.put("versions", versions)
//                    finalProjectMap.put("projectNames", projectNames)
                    Map currentVersions = webVersionManager.getCurrentWebVersions()
                    if (currentVersions != null) {
                        finalProjectMap.put("currentVersion", currentVersions.get(webName + "#" + projectName))
                    }
                    finalList.add(finalProjectMap)
                }
            }
            return finalList
        }
        return null
    }

    @GetMapping("/serverweb/server/{serviceName}")
    def getServerVersionsByServiceName(@PathVariable String serviceName) {
        List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath + serviceName + "_v"), null, true)
        if (fileEntities != null && fileEntities.size() > 0) {
            List versions = new ArrayList()
            for (FileAdapter.FileEntity fileEntity : fileEntities) {
                String absolutePath = fileEntity.absolutePath
                if (absolutePath != null) {
                    String[] serviceVersions = absolutePath.split("/")
                    String serviceVersion;
                    if (StringUtils.isEmpty(serviceVersions[0])) {
                        serviceVersion = serviceVersions[2]
                    } else {
                        serviceVersion = serviceVersions[1]
                    }
                    String version = null
                    if (serviceVersion.split("_v").length > 1) {
                        version = serviceVersion.split("_v")[1]
                    }
                    if (version != null && !versions.contains(version)) {
                        versions.add(Integer.valueOf(version))
                    }
                }
            }
            if (versions.size() > 0) {
                Collections.reverse(versions)
                return versions
            }
        }
    }

    @GetMapping("/serverweb/web/{nginxName}/{webName}/{projectName}")
    def getWebVersionsByWebName(@PathVariable String nginxName, @PathVariable String webName, @PathVariable String projectName) {
        List list = webVersionManager.getWebList(nginxName)
        if (list != null) {
            for (Map map : list) {
                if (map.get("webName").equals(webName)) {
                    List projectlist = map.get("projectNames")
                    if (projectlist != null) {
                        for (Map projectMap : projectlist) {
                            if (projectMap.get("projectName").equals(projectName)) {
                                return projectMap.get("versions")
                            }
                        }
                    }
                }
            }
        }
        return null
    }

    @PostMapping("/serverweb")
    def reloadNginx(@RequestBody Map map) {
        String nginxName = map.get("nginxName")
        if (!StringUtils.isEmpty(nginxName)) {
            List<Map> webs = map.get("webs")
            if (webs != null) {
                synchronized (nginxManager.getLock(nginxName)) {
                    Map webVersions = new HashMap()
                    def returnResult = nginxManager.getNginxContent(nginxName)
                    if (returnResult != null) {
                        String msg = returnResult["message"]
                        if (msg != null) {
                            throw new GeneralException(5000, msg)
                        }
                    }
                    String nginxContent = returnResult["nginxContent"]
                    Nginx nginx = nginxManager.getNginx(nginxName)
                    boolean needReload = false
                    for (Map webMap : webs) {
                        String webName = webMap.get("webName")
                        String projectName = webMap.get("projectName")
                        String currentVersion = null
                        if (webMap.get("currentVersion") != null) {
                            currentVersion = webMap.get("currentVersion").toString()
                        }
                        if (StringUtils.isNotBlank(webName) && StringUtils.isNotBlank(currentVersion) && StringUtils.isNotBlank(projectName)) {
                            needReload = true
                            String originalPre = nginx.getWebPath() + "/" + webName.replaceAll(" ", "") + "/" + projectName.replaceAll(" ", "") + "/"
                            String replacePath = nginx.getWebPath() + "/" + webName.replaceAll(" ", "") + "/" + projectName.replaceAll(" ", "") + "/" + currentVersion.replaceAll(" ", "")
                            Pattern pattern = Pattern.compile(originalPre + "\\d{4}_\\d{2}_\\d{2}_\\d{2}_\\d{2}_\\d{2}")
                            Matcher matcher = pattern.matcher(nginxContent)
                            nginxContent = matcher.replaceAll(replacePath)
                            webVersions.put(webName + "#" + projectName, currentVersion)
                        }
                    }
                    if (!needReload) {
                        return
                    }
                    String targetTime = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + "target"
                    String result = nginxManager.uploadNginxFile(nginxName, nginxContent, targetTime)
                    if (result == null) {
                        List testResult = nginxManager.testNginx(nginxName, targetTime)
                        boolean testSuccess = false
                        if (testResult != null) {
                            if (JSON.toJSONString(testResult).contains("success")) {
                                testSuccess = true
                            }
                        }
                        if (testSuccess) {
                            List reloadResult = nginxManager.reloadNginx(nginxName, targetTime)
                            if (reloadResult == null || !JSON.toJSONString(reloadResult).contains("process started")) {
                                throw new GeneralException(5000, "Reload nginx failed ${reloadResult}")
                            }
                        } else {
                            throw new GeneralException(5000, "Test nginx failed ${testResult}")
                        }
                    } else {
                        throw new GeneralException(5000, "Upload nginx failed ${result}")
                    }
                    if (!webVersions.isEmpty()) {
                        webVersionManager.setCurrentVersions(webVersions)
                    }
                }
            }
        }
    }

    @GetMapping("/containers")
    def getAllContainers() {
        List<DockerStatus> dockerStatuses = dockerStatusService.getAllDockerStatus()
        return dockerStatuses
    }

    @DeleteMapping("/container/{server}")
    def deleteContainer(@PathVariable String server) {
        dockerStatusService.deleteDockerStatus(server)
    }

    @GetMapping("/container/serverips")
    def getServerIps() {
        InputStream inStream = DeployController.class.getClassLoader().getResourceAsStream("groovycloud.properties");
        Properties prop = new Properties();
        prop.load(inStream)
        String ip = prop.getProperty(GROOVYCLOUYDSERVERS)
        if (ip != null) {
            return Arrays.asList(ip.split(","))
        }
        return null
    }

    @GetMapping("/container/{serverType}")
    def reloadContainer(HttpServletRequest request, @PathVariable String serverType) {
        DeployServiceVersion deployServiceVersion = deployServiceVersionService.getServiceVersion(serverType)
        if (deployServiceVersion != null) {
            reloadManager.canLoad(deployServiceVersion.getServerType())
            String account = RequestUtils.getAccount(request)
            DeployRecord deployRecord = new DeployRecord()
            deployRecord.setId(ObjectId.get().toString())
            deployRecord.setTime(TimeUtils.getDateString(System.currentTimeMillis(), "yyyy-MM-dd HH:mm:ss,SSS"))
            deployRecord.setServerType(deployServiceVersion.getServerType())
            deployRecord.setServiceVersions(deployServiceVersion.getServiceVersions())
            List ipDockerNames = serverManager.getIPDockerNames(serverType)
            Map serverMap = null
            if (ipDockerNames != null && !ipDockerNames.isEmpty()) {
                serverMap = new HashMap()
                for (String ipDockerName : ipDockerNames){
                    serverMap.put(ipDockerName.replaceAll("\\.", "__"), DeployRecord.DEPLOY_SERVER_WAIT)
                }
            }
            deployRecord.setDeployIngMap(serverMap)
            deployRecord.setDeployer(account)
//            Map updateBaseJarVersions = baseJarManager.getUpdateBaseJarsVersion(deployServiceVersion.getBaseJarVersions())
//            deployRecord.setUpdateBaseJarVersions(updateBaseJarVersions)
            deployRecordService.addDeployRecord(deployRecord)
            deployServiceVersionService.updateServiceVersionDeployId(deployServiceVersion.get_id(), deployRecord.getId())
            reloadManager.addDeployId(deployRecord.getServerType(), deployRecord.getId())
        } else {
            throw new GeneralException(Errors.ERROR_CANTFIND_DEPLOYSERVICEVERSION, "Cant find deployServiceVersion, id: ${deployServiceVersion.get_id()}")
        }
    }

    @GetMapping("/deployrecords")
    def getDeployRecords(@RequestParam(required = false, name = "s") String searchInput) {
        boolean filter = false
        if (StringUtils.isNotBlank(searchInput) && searchInput != "undefined") {
            filter = true
        }
        List<DeployRecord> deployRecords = deployRecordService.getDeployRecords()
        if (deployRecords != null && !deployRecords.isEmpty()) {
            List list = new ArrayList()
            for (DeployRecord deployRecord : deployRecords) {
                boolean execute = true
                if (filter) {
                    if (!deployRecord.getServerType().contains(searchInput) && !deployRecord.getDeployer().contains(searchInput)) {
                        execute = false
                    }
                }
                if (execute) {
                    Map map = new HashMap()
                    map.put("id", deployRecord.getId())
                    map.put("serverType", deployRecord.getServerType())
                    map.put("deployer", deployRecord.getDeployer())
                    map.put("time", deployRecord.getTime())
                    list.add(map)
                }
            }

            return list
        }
        return null
    }

    @GetMapping("newbaseJars/{id}")
    def getUpdateBaseJars(@PathVariable String id) {
        DeployRecord deployRecord = deployRecordService.getDeployRecord(id)
        Map result = new HashMap()
        result.put("id", id)
        result.put("serverType", deployRecord.getServerType())
        if (deployRecord != null) {
            if (deployRecord.getUpdateBaseJarVersions() != null) {
                List<Map> list = new ArrayList<>()
                Map normalBaseJars = baseJarManager.convertJarName(deployRecord.getUpdateBaseJarVersions())
                for (String jarName : normalBaseJars.keySet()) {
                    Map map = new HashMap()
                    map.put("jarName", jarName)
                    map.put("version", TimeUtils.getDateString(normalBaseJars.get(jarName), "yyyyMMddHHmmss"))
                    if (jarName.contains("container")) {
                        list.add(0, map)
                    } else {
                        list.add(map)
                    }
                }
                if (!list.isEmpty()) {
                    result.put("baseJarVersions", list)
                }
            }
            return result
        }
    }

    @GetMapping("thisserviceversions/{id}")
    def getTheDeployServiceVersions(@PathVariable String id) {
        DeployRecord deployRecord = deployRecordService.getDeployRecord(id)
        Map result = new HashMap()
        result.put("id", id)
        result.put("serverType", deployRecord.getServerType())
        if (deployRecord != null) {
            if (deployRecord.getServiceVersions() != null) {
                List<Map> list = new ArrayList<>()
                for (String serviceName : deployRecord.getServiceVersions().keySet()) {
                    Map map = new HashMap()
                    map.put("serviceName", serviceName)
                    map.put("version", deployRecord.getServiceVersions().get(serviceName))
                    list.add(map)
                }
                if (!list.isEmpty()) {
                    result.put("serviceVersions", list)
                }
            }
            return result
        }
    }

    @GetMapping("deployserver/{id}")
    def getDeployServer(@PathVariable String id) {
        DeployRecord deployRecord = deployRecordService.getDeployRecord(id)
        Map result = new HashMap()
        result.put("id", id)
        result.put("serverType", deployRecord.getServerType())
        if (deployRecord != null) {
            Map deployInMap = deployRecord.getDeployIngMap()
            if (deployInMap != null) {
                List<Map> list = new ArrayList<>()
                for (String server : deployInMap.keySet()) {
                    Map map = new HashMap()
                    map.put("server", server)
                    map.put("status", deployInMap.get(server))
                    list.add(map)
                }
                if (!list.isEmpty()) {
                    result.put("deployServers", list)
                }
            }
            return result
        }
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

    private class MyComparator implements Comparator<String> {
        @Override
        public int compare(String s1, String s2) {
            return s1 <=> s2;
        }
    }
}
