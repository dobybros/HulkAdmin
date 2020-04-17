package com.dobybros.hulkadmin.controllers

import chat.json.Result
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONObject
import com.dobybros.hulkadmin.general.GeneralException
import com.docker.data.DockerStatus
import com.docker.data.Service
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.utils.ScriptHttpUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

import java.util.concurrent.ConcurrentHashMap

/**
 * Created by lick on 2019/8/3.
 * Description：
 */
@RequestMapping("gc")
@CrossOrigin
@RestController
class GroovyCloudController {
    @Autowired
    DockerStatusServiceImpl dockerStatusService
    Map serverTypeAddressMap;

    @GetMapping("/init")
    def getGCInit() {
        List<DockerStatus> dockerStatuses = dockerStatusService.getAllDockerStatus()
        List dockerList = new ArrayList()
        if (dockerStatuses != null) {
            serverTypeAddressMap = new ConcurrentHashMap()
            for (DockerStatus dockerStatus : dockerStatuses) {
                if (dockerStatus.getIp() != null && dockerStatus.getHttpPort() != null && dockerStatus.getDockerName() != null) {
                    serverTypeAddressMap.putIfAbsent(dockerStatus.getDockerName() + "_" + dockerStatus.getIp(), "http://" + dockerStatus.getIp() + ":" + dockerStatus.getHttpPort())
                    Map dockerMap = new HashMap()
                    dockerMap.put("value", dockerStatus.getDockerName() + "_" + dockerStatus.getIp())
                    dockerMap.put("label", dockerStatus.getDockerName() + "_" + dockerStatus.getIp())
                    List secondList = new ArrayList()
                    dockerMap.put("children", secondList)
                    Map timerMap = new HashMap()
                    timerMap.put("value", "timer")
                    timerMap.put("label", "timer")
                    secondList.add(timerMap)
                    List timerThirdList = new ArrayList()
                    Map timerThirdMap = new HashMap()
                    timerThirdMap.put("value", "timer")
                    timerThirdMap.put("label", "timer")
                    timerThirdList.add(timerThirdMap)
                    timerMap.put("children", timerThirdList)
                    Map serviceMap = new HashMap()
                    serviceMap.put("value", "memory")
                    serviceMap.put("label", "memory")
                    secondList.add(serviceMap)
                    List<Service> serviceList = dockerStatus.getServices()
                    if (serviceList != null && !serviceList.isEmpty()) {
                        List serviceThirdList = new ArrayList()
                        for (Service service : serviceList) {
                            Map serviceThirdMap = new HashMap()
                            serviceThirdMap.put("value", service.getService() + "_v" + service.getVersion().toString())
                            serviceThirdMap.put("label", service.getService())
                            serviceThirdList.add(serviceThirdMap)
                        }
                        serviceMap.put("children", serviceThirdList)
                    }
//                    Map baseMemoryMap = new HashMap()
//                    baseMemoryMap.put("value", "baseMemory")
//                    baseMemoryMap.put("label", "baseMemory")
//                    List<String> baseMemoryBeans = dockerStatus.getBaseMemoryBeans()
//                    if(baseMemoryBeans != null && !baseMemoryBeans.isEmpty()){
//                        List baseMemoryThirdList = new ArrayList()
//                        for (String beanName : baseMemoryBeans){
//                            Map beanNameMap = new HashMap()
//                            beanNameMap.put("value", beanName)
//                            beanNameMap.put("label", beanName)
//                            baseMemoryThirdList.add(beanNameMap)
//                        }
//                        baseMemoryMap.put("children", baseMemoryThirdList)
//                    }
//                    secondList.add(baseMemoryMap)
                    dockerList.add(dockerMap)
                }
            }
            return dockerList
        }
        return null
    }

    @PostMapping("/data")
    def getGCData(@RequestBody String[] params) {
        return getGCDataPrivate(params)
    }

    private def getGCDataPrivate(String[] params) {
        if (params.length == 3) {
            String serverType = params[0]
            String address = serverTypeAddressMap.get(serverType)
            if (address != null) {
                String url = address + "/base/" + params[1] + "/" + params[2]
                Result result = ScriptHttpUtils.post(null, url, null, Result.class)
                if (result != null && result.success()) {
                    List list = new ArrayList()
                    if (params[2].contains("gws")) {
                        JSONObject jsonObject = result.getData()
                        if (jsonObject != null) {
                            Map onlineUserMap = jsonObject.get("onlineUserMap")
                            if (onlineUserMap != null) {
                                Map userIdMap
                                for (String userId : onlineUserMap.keySet()) {
                                    Map onlineServiceUserMap = onlineUserMap.get(userId)
                                    if (onlineServiceUserMap != null) {
                                        for (String service : onlineServiceUserMap.keySet()) {
                                            userIdMap = new HashMap()
                                            userIdMap.put("userId", userId)
                                            userIdMap.put("service", service)
                                            list.add(userIdMap)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!list.isEmpty()) {
                        return ["data": JSON.toJSONString(result.getData(), true), "tableList": list]
                    } else {
                        return ["data": JSON.toJSONString(result.getData(), true)]
                    }
                } else {
                    if(result != null){
                        throw new GeneralException(result.getCode(), result.getMsg())
                    }
                }
            }
        }
    }

    @PostMapping("/gws/delete/{userId}")
    def deleteOnlineUser(@PathVariable String userId, @RequestBody String[] params) {
        if (userId != null && params.length == 3) {
            String serverType = params[0]
            String address = serverTypeAddressMap.get(serverType)
            if (address != null) {
                String url = address + "/rest/" + params[2] + "/sys/destroy/theuser/" + userId
                Result result = ScriptHttpUtils.get(url, Result.class)
                if (result != null && result.getCode() == 1) {
                    return getGCDataPrivate(params)
                }
            }
        }
    }
}

