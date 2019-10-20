package com.dobybros.hulkadmin.controllers

import chat.json.Result
import com.dobybros.hulkadmin.remoteService.discovery.DiscoveryService
import com.docker.rpc.remote.stub.ServiceStubManager
import com.docker.utils.ScriptHttpUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

/**
 * Created by lick on 2019/8/3.
 * Description：
 */
@RequestMapping
@CrossOrigin
@RestController
class GroovyCloudController {
    @Autowired
    ServiceStubManager serviceStubManager

    @GetMapping("scheduledtasks")
    def getScheduledTasks(@RequestParam(name = "pro") String protocol,
                            @RequestParam(name = "a") String addr,
                            @RequestParam(name = "p") String port){
        String url = protocol + "://" + addr + ":" + port
       Result result = ScriptHttpUtils.get(url + "/rest/discovery/timerInfo", Result.class)
        if(result != null){
            return result.getData()
        }
        return null
    }
}

