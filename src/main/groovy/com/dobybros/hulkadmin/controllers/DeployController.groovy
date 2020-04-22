package com.dobybros.hulkadmin.controllers

import chat.logs.LoggerEx
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.config.NginxConfig
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger
import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.data.DockerStatus
import com.docker.data.ServiceVersion
import com.docker.file.adapters.GridFSFileHandler
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.storage.adapters.impl.ServersServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import com.mongodb.BasicDBObject
import org.apache.commons.io.FileUtils
import org.apache.commons.lang.StringUtils
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.web.bind.annotation.*
import script.file.FileAdapter

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
    public static final String SERVICE_VERSION_SYMBOL = "_v"

    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    NginxConfig nginxConfig
    @Autowired
    GridFSFileHandler fileAdapter
    @Autowired
    RedisTemplate redisTemplate
    @Autowired
    ServersServiceImpl serversService
    @Autowired
    DockerStatusServiceImpl dockerStatusService
    @Autowired
    ServiceVersionServiceImpl serviceVersionService

    @GetMapping("repairconfig")
    def repairConfig() {
        List<Document> configs = serversService.getServerConfigs()
        for (Document document : configs) {
            for (String key : document.keySet()) {
                if (key.equals("_id")) {
                    String value = document.get(key)
                    if (!value.contains(SERVICE_VERSION_SYMBOL)) {
                        document.put(key, value + SERVICE_VERSION_SYMBOL + "1")
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

    @GetMapping("/serviceconfig/healthy")
    def checkServiceVersionConfig(@RequestParam(value = "s") String serviceName, @RequestParam(value = "v") String version){
        String serviceNameVersion = null
        if(version != null){
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
    private Map getServices(){
        List<Document> documents = serversService.getServerConfigs()
        Map serviceMap = new HashMap()
        serviceMap.put("value", "service")
        serviceMap.put("label", "service")
        Map serviceVersionNewMap = new HashMap()
        Map serviceVersionMap = new HashMap()
        for(Document document : documents){
            String serviceVersion = document.get("_id")
            if(serviceVersion.contains(SERVICE_VERSION_SYMBOL)){
                String service = serviceVersion.split(SERVICE_VERSION_SYMBOL)[0]
                String version = serviceVersion.split(SERVICE_VERSION_SYMBOL)[1]
                List theVersionList = serviceVersionMap.get(service)
                String theNewVersion = serviceVersionNewMap.get(service)
                if(theNewVersion == null){
                    serviceVersionNewMap.put(service, version)
                }else {
                    if(Integer.valueOf(version) > Integer.valueOf(theNewVersion)){
                        serviceVersionNewMap.put(service, version)
                    }
                }
                if(theVersionList == null){
                    theVersionList = new ArrayList()
                    serviceVersionMap.put(service, theVersionList)
                }
                theVersionList.add(version)
            }
        }
        List firstChildList = new ArrayList()
        serviceMap.put("children", firstChildList)
        for (String service : serviceVersionMap.keySet()){
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
    private Map getServiceVersions(){
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersionsAll()
        Map serviceVersionMap = new HashMap()
        serviceVersionMap.put("value", "serverType")
        serviceVersionMap.put("label", "serverType")
        Map serverTypeMap = new HashMap()
        for (ServiceVersion serviceVersion : serviceVersions){
            List serverTypes = serviceVersion.getServerType()
            for (String serverType : serverTypes){
                Map theServerTypeMap = serverTypeMap.get(serverType)
                if(theServerTypeMap == null){
                    theServerTypeMap = new HashMap()
                    serverTypeMap.put(serverType, theServerTypeMap)
                }
                Map theTypeMap = theServerTypeMap.get(serverType)
                if(theTypeMap == null){
                    theTypeMap = new HashMap()
                    theServerTypeMap.put(serviceVersion.type, theTypeMap)
                }
                Map allServiceVersionMap = serviceVersion.serviceVersions
                for (String service : allServiceVersionMap.keySet()){
                    String theVersion = theTypeMap.get(service)
                    if(theVersion == null){
                        theTypeMap.put(service, allServiceVersionMap.get(service))
                    }else {
                        theTypeMap.put(service, theVersion + "," + allServiceVersionMap.get(service))
                    }
                }
            }
        }
        List firstChildList = new ArrayList()
        serviceVersionMap.put("children", firstChildList)
        for (String serverType : serverTypeMap.keySet()){
            Map secondChildMap = new HashMap()
            secondChildMap.put("value",serverType)
            secondChildMap.put("label",serverType)
            firstChildList.add(secondChildMap)
            Map theTypeMap = serverTypeMap.get(serverType)
            List secondCildList = new ArrayList()
            secondChildMap.put("children", secondCildList)
            for (String type : theTypeMap.keySet()){
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
                        if (!serviceVersion.toLowerCase().contains(SERVICE_VERSION_SYMBOL)) {
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
                        if (serviceVersion.contains(SERVICE_VERSION_SYMBOL)) {
                            String[] strings = serviceVersion.split(SERVICE_VERSION_SYMBOL)
                            String oldServiceVersion = strings[0] + (strings[1].equals("1") ? "" : (SERVICE_VERSION_SYMBOL + (Integer.valueOf(strings[1]) - 1).toString()))
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
        }
    }

    @GetMapping("/serviceconfig/{service}/{version}")
    def getServiceConfigs(@PathVariable String service, @PathVariable Integer version) {
        String serviceVersion = service + SERVICE_VERSION_SYMBOL + version
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
        if(StringUtils.isNotBlank(searchInput) && searchInput != "undefined"){
            Map serverTypeMap = getServiceVresions()
            for (String serverType : serverTypeMap.keySet()){
                if(serverType.contains(searchInput)){
                    Map theTypeMap = serverTypeMap.get(serverType)
                    for (String type : theTypeMap.keySet()){
                        Map theServiceMap = theTypeMap.get(type)
                        for (String service : theServiceMap.keySet()){
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
                String[] serviceVersionArray = serviceVersion.split(SERVICE_VERSION_SYMBOL)
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
            if(StringUtils.isNotBlank(searchInput) && searchInput != "undefined"){
                if(!service.contains(searchInput) && !searchServies.contains(service)){
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
        if(StringUtils.isBlank(searchInput) || searchInput == "undefined"){
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
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersionsAll()
        Map serverTypeMap = new HashMap()
        for (ServiceVersion serviceVersion : serviceVersions) {
            List serverTypes = serviceVersion.getServerType()
            for (String serverType : serverTypes) {
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
        }
        return serverTypeMap
    }
    @GetMapping("/groovyzips")
    def getGroovyZips(@RequestParam(required = false, name = "s") String searchInput) {
        List searchServies = new ArrayList()
        if(StringUtils.isNotBlank(searchInput) && searchInput != "undefined"){
            Map serverTypeMap = getServiceVresions()
            for (String serverType : serverTypeMap.keySet()){
                if(serverType.contains(searchInput)){
                    Map theTypeMap = serverTypeMap.get(serverType)
                    for (String type : theTypeMap.keySet()){
                        Map theServiceMap = theTypeMap.get(type)
                        for (String service : theServiceMap.keySet()){
                            searchServies.add(service)
                        }
                    }
                }
            }
        }
        List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx("/"), null, true)
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
                if(StringUtils.isNotBlank(searchInput) && searchInput != "undefined"){
                    if(!serviceName.contains(searchInput) && !searchServies.contains(serviceName)){
                        continue
                    }
                }
                Map newServiceMap = new HashMap<>()
                Map versionDateMap = serviceMap.get(serviceName)
                outList.add(newServiceMap)
                newServiceMap.put("serviceName", serviceName)
                List versionList = new ArrayList()
                List<Integer> sortList = new ArrayList()
                for (String version : versionDateMap.keySet()) {
                    sortList.add(Integer.valueOf(version))
                }
                Collections.sort(sortList)
                if (sortList.size() > 0) {
                    interalList = new ArrayList()
                    for (int i = sortList.size() - 1; i >= 0; i--) {
                        if (i == sortList.size() - 1) {
                            newServiceMap.put("version", String.valueOf(sortList.get(i)))
                            newServiceMap.put("date", versionDateMap.get(String.valueOf(sortList.get(i))))
                            newServiceMap.put("maxVersion", String.valueOf(sortList.get(i)))
                            newServiceMap.put("id", UUID.randomUUID().toString())
                        } else {
                            Map newVersionDateMap = new HashMap()
                            newVersionDateMap.put("serviceName", serviceName)
                            newVersionDateMap.put("version", String.valueOf(sortList.get(i)))
                            newVersionDateMap.put("date", versionDateMap.get(String.valueOf(sortList.get(i))))
                            newVersionDateMap.put("id", UUID.randomUUID().toString())
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
            if(StringUtils.isBlank(searchInput) || searchInput == "undefined"){
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

    @GetMapping("/serviceversions")
    def getAllServiceVersions() {
        List<ServiceVersion> serviceVersions = serviceVersionService.getServiceVersionsAll()
        List<Map> list = new ArrayList<>()
        Map<String, Map<String, String>> serviceVersionsMap = null
        Map map = null
        for (ServiceVersion serviceVersion : serviceVersions) {
            map = new ConcurrentHashMap()
            List serverTypes = serviceVersion.getServerType()
            String serverTypesStr = ""
            for (int i = 0; i < serverTypes.size(); i++) {
                if (i == serverTypes.size() - 1) {
                    serverTypesStr = serverTypesStr + serverTypes.get(i)
                } else {
                    serverTypesStr = serverTypesStr + serverTypes.get(i) + ","
                }
            }
            map.put("serverType", serverTypesStr)
            map.put("type", serviceVersion.type)
            map.put("_id", serviceVersion._id)
            serviceVersionsMap = new ConcurrentHashMap<>()
            if (serviceVersion.serviceVersions != null) {
                Map<String, String> serviceVersionMap = null

                Map keyValueMap = null
                for (String service : serviceVersion.serviceVersions.keySet()) {
                    keyValueMap = new HashMap()
                    serviceVersionMap = new ConcurrentHashMap<>()
                    if (StringUtils.isEmpty((String) serviceVersion.serviceVersions.get(service))) {
                        keyValueMap.put("key", service)
                        keyValueMap.put("value", "0")
                    } else {
                        keyValueMap.put("key", service)
                        keyValueMap.put("value", serviceVersion.serviceVersions.get(service))
                    }
                    serviceVersionsMap.put(service, keyValueMap)
                }
                if (serviceVersionsMap.size() > 0) {
                    map.put("serviceVersions", serviceVersionsMap)
                    map.put("serviceLength", serviceVersionsMap.size())
                }
            } else {
                map.put("serviceLength", 0)
            }
            list.add(map)
        }
        return list
    }

    @PostMapping("/serviceversion")
    def addServiceVersion(@RequestBody Map serviceVersionMap) {
        ServiceVersion serviceVersion = new ServiceVersion()
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("_id"))) {
            serviceVersion._id = (String) serviceVersionMap.get("_id").replaceAll(" ", "")
        }
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("type"))) {
            serviceVersion.type = (String) serviceVersionMap.get("type").replaceAll(" ", "")
        }
        if (!StringUtils.isEmpty((String) serviceVersionMap.get("serverType"))) {
            String serverType = (String) serviceVersionMap.get("serverType").replaceAll(" ", "")
            List<String> serverTypes = Arrays.asList(serverType.split(","))
            if (serverTypes != null && serverTypes.size() > 0) {
                serviceVersion.serverType = serverTypes
            }
        }
        Map serviceVersions = (Map) serviceVersionMap.get("serviceVersions")
        Document serviceVersionFinal = new Document()
        if (serviceVersions != null && serviceVersions.size() > 0) {
            for (String service : serviceVersions.keySet()) {
                Map serviceVersionMap1 = serviceVersions.get(service)
                if (serviceVersionMap1 != null && serviceVersionMap1.size() > 0) {
                    if (!StringUtils.isEmpty(serviceVersionMap1.get("key")) && !StringUtils.isEmpty(serviceVersionMap1.get("value"))) {
                        if (serviceVersionMap1.get("value").equals("0")) {
                            serviceVersionFinal.append(serviceVersionMap1.get("key").replaceAll(" ", ""), "")
                        } else {
                            serviceVersionFinal.append(serviceVersionMap1.get("key").replaceAll(" ", ""), serviceVersionMap1.get("value").replaceAll(" ", ""))
                        }
                    }
                }
            }
        }
        if (serviceVersionFinal.size() > 0) {
            serviceVersion.serviceVersions = serviceVersionFinal
        }
        serviceVersionService.addServiceVersion(serviceVersion)
    }

    @DeleteMapping("/serviceversion")
    def deleteServiceVersion(@RequestParam(value = "i") String id) {
        if (!StringUtils.isEmpty(id)) {
            serviceVersionService.deleteServiceVersion(new Document().append("_id", id))
        }
    }

    @GetMapping("allnginx")
    def getAllNginx() {
        List nginxList = new ArrayList()
        Map map = null
        for (String nginxName : nginxConfig.getNginxMap().keySet()) {
            map = new HashMap()
            map.put("value", nginxName)
            nginxList.add(map)
        }
        return nginxList
    }


    @GetMapping("/webs/{nginxName}")
    def getWebs(@PathVariable String nginxName) {
        if (StringUtils.isNotBlank(nginxName)) {
            Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
            if (theNginxMap != null) {
                ShellClient sshClient = new ShellClient(theNginxMap.get("ip"), theNginxMap.get("account"), theNginxMap.get("passwd"), Integer.valueOf(theNginxMap.get("port")))
                List webFilenames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath"))
                List webFileList = new ArrayList()
                Map webFileMap
                if (webFilenames != null && !webFilenames.isEmpty()) {
                    List webFilenameList = new ArrayList()
                    Map webFileNameMap
                    for (String webFileName : webFilenames) {
                        webFileNameMap = new HashMap()
                        List projectFileNames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath") + "/" + webFileName)
                        if (projectFileNames != null && !projectFileNames.isEmpty()) {
                            Map projectFileNameMap
                            List projectFileNameList = new ArrayList()
                            for (String projectFileName : projectFileNames) {
                                projectFileNameMap = new HashMap()
                                List projectFileNameVersions = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath") + "/" + webFileName + "/" + projectFileName)
                                Map projectFileNameVersionsMap = new HashMap()
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
                        return webFilenameList
                    }
                }
            } else {
                throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
            }
        }
    }

    @DeleteMapping("/web/{nginxName}/{webName}/{projectName}/{version}")
    def deleteWeb(@PathVariable String nginxName, @PathVariable String webName, @PathVariable String projectName, @PathVariable String version) {
        Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
        if (theNginxMap != null) {
            String nginxAccount = theNginxMap.get("account")
            String nginxPort = theNginxMap.get("port")
            String nginxPasswd = theNginxMap.get("passwd")
            String nginxIp = theNginxMap.get("ip")
            String wwwPath = theNginxMap.get("webPath")
            String projectPath = wwwPath + "/" + webName + "/" + projectName
            ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
            sshClient.excuteCommand("sudo rm -rf " + projectPath + "/" + version)
        } else {
            throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
        }
    }

    @GetMapping("/serverweb/{nginxName}")
    def getServerWeb(@PathVariable String nginxName) {
        Map serverWebMap = new HashMap()
        Map nginxServerServices = redisTemplate.opsForHash().get("SERVICEWEBS", "SERVICEWEBS".hashCode())
        Map serverServices = null
        if (nginxServerServices != null) {
            serverServices = nginxServerServices.get(nginxName)
        }
        if (serverServices != null && serverServices.size() > 0) {
            List servers = new ArrayList()
            List versions = null
            Map serverServiceMap = null
            for (String serverService : serverServices.keySet()) {
                List<FileAdapter.FileEntity> fileEntities = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath + serverService + "_v"), null, true)
                if (fileEntities != null && fileEntities.size() > 0) {
                    versions = new ArrayList()
                    serverServiceMap = new HashMap()
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
                        serverServiceMap.put("serviceName", serverService)
                        if (serverServices.get(serverService) != null && serverServices.size() > 0) {
                            serverServiceMap.put("currentVersion", Integer.valueOf(serverServices.get(serverService)))
                        }
                        serverServiceMap.put("versions", versions)
                        servers.add(serverServiceMap)
                    }
                }
            }
            if (servers.size() > 0) {
                serverWebMap.put("servers", servers)
            }
        }
        Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
        if (theNginxMap != null) {
            String nginxAccount = theNginxMap.get("account")
            String nginxPort = theNginxMap.get("port")
            String nginxPasswd = theNginxMap.get("passwd")
            String nginxIp = theNginxMap.get("ip")
            ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
            List firstFilenames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath"))
            List webFileList = new ArrayList()
            List webFiles = null
            Map webFileMap = null
            if (firstFilenames != null && firstFilenames.size() > 0) {
                //tc這一層
                for (String firstFileName : firstFilenames) {
                    List secondFileNames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath") + "/" + firstFileName)
                    if (secondFileNames != null && secondFileNames.size() > 0) {
                        Map projectMap
                        for (String secondFileName : secondFileNames) {
                            projectMap = new HashMap()
                            projectMap.put("webName", firstFileName)
                            projectMap.put("projectName", secondFileName)
                            if (serverServices != null) {
                                if (serverServices.get(firstFileName + "#" + secondFileName) != null) {
                                    projectMap.put("currentVersion", serverServices.get(firstFileName + "#" + secondFileName))
                                }
                            }
                            List thirdFileNames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath") + "/" + firstFileName + "/" + secondFileName)
                            if (thirdFileNames != null && !thirdFileNames.isEmpty()) {
                                projectMap.put("versions", sortWebVersion(thirdFileNames))
                            }
                            webFileList.add(projectMap)
                        }
                    }
                }
                if (webFileList.size() > 0) {
                    serverWebMap.put("webs", webFileList)
                }
            }
            return serverWebMap
        } else {
            throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
        }
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
        Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
        if (theNginxMap != null) {
            String nginxAccount = theNginxMap.get("account")
            String nginxPort = theNginxMap.get("port")
            String nginxPasswd = theNginxMap.get("passwd")
            String nginxIp = theNginxMap.get("ip")
            ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
            List secondFileNames = sshClient.excuteCommand("sudo ls " + theNginxMap.get("webPath") + "/" + webName + "/" + projectName)
            if (secondFileNames != null && secondFileNames.size() > 0) {
                secondFileNames = sortWebVersion(secondFileNames)
                return secondFileNames
            }
        } else {
            throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
        }
    }

    @PostMapping("/serverweb")
    def reloadNginx(@RequestBody Map map) {
        String nginxName = map.get("nginxName")
        if (!StringUtils.isEmpty(nginxName)) {
            Map theNginxMap = nginxConfig.getNginxMap().get(nginxName)
            if (theNginxMap != null) {
                String nginxAccount = theNginxMap.get("account")
                String nginxPort = theNginxMap.get("port")
                String nginxPasswd = theNginxMap.get("passwd")
                String nginxIp = theNginxMap.get("ip")
                SftpClient sftpClient = new SftpClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                sftpClient.download(theNginxMap.get("nginxRemotePath"), "nginx.conf", applicationConfig.nginxPath + "nginx.conf")
                LoggerEx.info("DeployController", "Download nginx.conf success,path: " + applicationConfig.nginxPath + "nginx.conf")
                if (map != null && map.size() > 0) {
                    Map serverServices = new HashMap()
                    String originPath = applicationConfig.nginxPath + nginxFileName
                    String nginxContent = FileUtils.readFileToString(new File(originPath), "utf8")
                    // replace html path
                    List<Map> webs = map.get("webs")
                    if (webs != null) {
                        for (Map webMap : webs) {
                            String webName = webMap.get("webName")
                            String projectName = webMap.get("projectName")
                            String currentVersion = null
                            if (webMap.get("currentVersion") != null) {
                                currentVersion = webMap.get("currentVersion").toString()
                            }
                            if (!StringUtils.isEmpty(webName) && !StringUtils.isEmpty(currentVersion) && !StringUtils.isEmpty(projectName)) {
                                String originalPre = theNginxMap.get("webPath") + "/" + webName.replaceAll(" ", "") + "/" + projectName.replaceAll(" ", "") + "/"
                                String replacePath = theNginxMap.get("webPath") + "/" + webName.replaceAll(" ", "") + "/" + projectName.replaceAll(" ", "") + "/" + currentVersion.replaceAll(" ", "")
                                Pattern pattern = Pattern.compile(originalPre + "\\d{4}_\\d{2}_\\d{2}_\\d{2}_\\d{2}_\\d{2}")
                                Matcher matcher = pattern.matcher(nginxContent)
                                nginxContent = matcher.replaceAll(replacePath)
                                serverServices.put(webName + "#" + projectName, currentVersion)
                            }
                        }
                    }
                    // replace server version
                    List<Map> servers = map.get("servers")
                    if (servers != null) {
                        for (Map serverMap : servers) {
                            String serviceName = serverMap.get("serviceName")
                            String currentVersion = null
                            if (serverMap.get("currentVersion") != null) {
                                currentVersion = serverMap.get("currentVersion").toString()
                            }
                            if (!StringUtils.isEmpty(serviceName) && !StringUtils.isEmpty(currentVersion)) {
                                String originalPre = serviceName.replaceAll(" ", "") + "_v"
                                String replacePath = serviceName.replaceAll(" ", "") + "_v" + currentVersion.replaceAll(" ", "")
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
                                    if (oldVersion != null) {
                                        nginxContent = nginxContent.replaceAll(originalPre + oldVersion, replacePath)
                                        serverServices.put(serviceName, currentVersion)
                                    }
                                }
                            }
                        }
                    }
                    // write content to temp file
                    String targetTime = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss") + "target"
                    def targetDir = originPath + "_" + targetTime
                    FileUtils.writeStringToFile(new File(targetDir), nginxContent, "utf8")
                    try {
                        sftpClient.upload(targetDir, theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + targetTime)
                    } catch (Throwable t) {
                        LoggerEx.error(TAG, "Upload file failed!!! err: " + t.getMessage())
                    }
                    LoggerEx.info("DeployController", "upload nginx target.conf success,path: " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + targetTime)
                    // check nginx config
                    ShellClient sshClient = new ShellClient(nginxIp, nginxAccount, nginxPasswd, Integer.valueOf(nginxPort))
                    try {
                        sshClient.excuteCommand("sudo docker exec nginx nginx -tc $targetDir")
                    } catch (Throwable t) {
                        FileUtils.deleteQuietly(new File(targetDir))
                        sftpClient.close()
                        LoggerEx.error(TAG, "Manage exec nginx failed!!! error: " + t.getMessage())
                        throw t
                    }
////             rename original nginx fileName,   reload file
                    String nginxBak = TimeUtils.getDateString(System.currentTimeMillis(), "yyyy_MM_dd_HH_mm_ss")
                    try {
                        sshClient.excuteCommand("sudo mv " + theNginxMap.get("nginxRemotePath") + nginxFileName + " " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + nginxBak)
                        LoggerEx.info("DeployController", "mv old nginx.conf success,path: " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + nginxBak)
                        Thread.sleep(1000)
                        sshClient.excuteCommand("sudo mv " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + targetTime + " " + theNginxMap.get("nginxRemotePath") + nginxFileName)
                        LoggerEx.info("DeployController", "mv new nginx.conf success,path: " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + targetTime + " to " + theNginxMap.get("nginxRemotePath") + nginxFileName)
                        sshClient.excuteCommand("sudo docker exec nginx nginx -s reload")
                        LoggerEx.info(TAG, "sudo docker exec nginx nginx -s reload")
                    } catch (Throwable t) {
                        FileUtils.deleteQuietly(new File(originPath))
                        FileUtils.deleteQuietly(new File(targetDir))
                        sshClient.excuteCommand("sudo rm -rf " + theNginxMap.get("nginxRemotePath") + nginxFileName)
                        sshClient.excuteCommand("sudo mv " + theNginxMap.get("nginxRemotePath") + nginxFileName + "_" + nginxBak + " " + theNginxMap.get("nginxRemotePath") + nginxFileName)
                        sftpClient.close()
                        LoggerEx.error(TAG, "Manage nginx.conf failed!!! error: " + t.getMessage())
                        throw t
                    }
                    if (serverServices.size() > 0) {
                        Map nginxServerServices = new HashMap()
                        nginxServerServices.put(nginxName, serverServices)
                        redisTemplate.opsForHash().put("SERVICEWEBS", "SERVICEWEBS".hashCode(), nginxServerServices)
                    }
                    sftpClient.close()
                    FileUtils.deleteQuietly(new File(originPath))
                    FileUtils.deleteQuietly(new File(targetDir))
                }
            } else {
                throw new GeneralException(5000, "Nginx map is empty, nginx: " + nginxName)
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

    @PostMapping("/container")
    def reloadContainer(@RequestBody DockerStatus dockerStatus) {
        if (dockerStatus != null) {
            if (dockerStatus.server != null && dockerStatus.ip != null && dockerStatus.dockerName != null) {
                InputStream inStream = DeployController.class.getClassLoader().getResourceAsStream("groovycloud.properties");
                Properties prop = new Properties();
                prop.load(inStream)
                String ip = dockerStatus.ip
                String address = prop.getProperty(GROOVYCLOUYDSERVERS1 + dockerStatus.ip)
                if (address != null) {
                    String[] addresses = address.split(",")
                    String port = addresses[1]
                    String account = addresses[2]
                    String passwd = addresses[3]
                    if (StringUtils.isEmpty(port)) {
                        port = "22"
                    }
                    if (StringUtils.isEmpty(account)) {
                        account = ""
                    }
                    if (StringUtils.isEmpty(passwd)) {
                        passwd = ""
                    }
                    try {
                        dockerStatusService.deleteDockerStatus(dockerStatus.server)
                    } catch (Throwable t) {
                        LoggerEx.error(TAG, t.getMessage())
                    }
                    ShellClient sshClient = new ShellClient(ip, account, passwd, Integer.valueOf(port))
                    try {
                        sshClient.excuteCommand("sudo docker restart " + dockerStatus.dockerName)
                    } catch (Throwable t) {
                        LoggerEx.error(DeployController.class.getSimpleName(), "Reload container failed!!! err: " + t.message)
                    }
                }
            }
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
