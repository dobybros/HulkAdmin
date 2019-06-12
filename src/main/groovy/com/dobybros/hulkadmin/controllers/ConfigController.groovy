package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.remoteService.discovery.ServersService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("config")
@CrossOrigin
@RestController
class ConfigController {
    @Autowired
    ServiceStubManager serviceStubManager

    @PostMapping
    def addNewApp(@RequestBody List configs) {
        ServersService serversService = serviceStubManager.getService(ServersService.SERVICE, ServersService.class)
        return serversService.addConfig(configs)
    }
}
