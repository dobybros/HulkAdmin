package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.remoteService.discovery.ServersConfigService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("deploy")
@CrossOrigin
@RestController
class DeployController {
    @Autowired
    ServiceStubManager serviceStubManager

    @PostMapping("/serverconfig")
    def addConfigs(@RequestBody List configs) {
        ServersConfigService serversService = serviceStubManager.getService(ServersConfigService.SERVICE, ServersConfigService.class)
        return serversService.addConfig(configs)
    }
    @GetMapping("/serverconfig")
    def getConfigs(){
        ServersConfigService serversService = serviceStubManager.getService(ServersConfigService.SERVICE, ServersConfigService.class)
        return serversService.getConfigs()
    }
}
