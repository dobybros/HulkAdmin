package com.dobybros.hulkadmin.controllers

import chat.json.Result
import com.alibaba.fastjson.JSON
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
    def getGCInit(){
        List<DockerStatus> dockerStatuses = dockerStatusService.getAllDockerStatus()
        List dockerList = new ArrayList()
        if(dockerStatuses != null){
            serverTypeAddressMap = new ConcurrentHashMap()
            for (DockerStatus dockerStatus : dockerStatuses){
                if(dockerStatus.getIp() != null && dockerStatus.getHttpPort() != null && dockerStatus.getDockerName() != null){
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
                    if(serviceList != null && !serviceList.isEmpty()){
                        List serviceThirdList = new ArrayList()
                        for (Service service : serviceList){
                            Map serviceThirdMap = new HashMap()
                            serviceThirdMap.put("value", service.getService() + "_v" + service.getVersion().toString())
                            serviceThirdMap.put("label", service.getService())
                            serviceThirdList.add(serviceThirdMap)
                        }
                        serviceMap.put("children", serviceThirdList)
                    }
                    dockerList.add(dockerMap)
                }
            }
            return dockerList
        }
        return null
    }
    @PostMapping("/data")
    def getGCData(@RequestBody String[] params){
        if(params.length == 3){
            String serverType = params[0]
            String address = serverTypeAddressMap.get(serverType)
            if(address != null){
                String url = address + "/base/" + params[1] + "/" + params[2]
                Result result = ScriptHttpUtils.post(null, url, null, Result.class)
                if(result != null){
                    return JSON.toJSONString(result.getData(), true)
                }
            }
        }
    }
}

