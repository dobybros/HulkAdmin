package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.remoteService.pushnotification.AppInfo
import com.dobybros.hulkadmin.remoteService.pushnotification.InternalApiService
import com.dobybros.hulkadmin.remoteService.pushnotification.Platform
import com.dobybros.hulkadmin.remoteService.resource.ResourceService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("log")
@CrossOrigin
@RestController
class LogController {
    @Autowired
    ApplicationConfig applicationConfig
    @GetMapping("/page")
    def getPage() {
        return applicationConfig.logKibanaUrl
    }
}
