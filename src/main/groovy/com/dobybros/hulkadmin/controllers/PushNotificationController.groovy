package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.remoteService.pushnotification.AppInfo
import com.dobybros.hulkadmin.remoteService.pushnotification.InternalApiService
import com.dobybros.hulkadmin.remoteService.pushnotification.Platform
import com.dobybros.hulkadmin.remoteService.resource.ResourceService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RequestMapping("noti")
@CrossOrigin
@RestController
class PushNotificationController {
    @Autowired
    ServiceStubManager serviceStubManager

    @PostMapping("/app")
    def addNewApp(@RequestBody AppInfo appinfo) {
        InternalApiService service = serviceStubManager.getService(InternalApiService.SERVICE, InternalApiService.class)
        ResourceService resourceService = serviceStubManager.getService(ResourceService.SERVICE, ResourceService.class)
        for (Platform platform : appinfo.platforms) {
            resourceService.useTempResource(platform.keychainRid, null, null)
            platform.keychainRid = null
        }
        return service.addNewApp(appinfo)
    }

    @GetMapping("/apps")
    def getAllApps() {
        InternalApiService service = serviceStubManager.getService(InternalApiService.SERVICE, InternalApiService.class)
        return service.getAllApps()
    }

    @PostMapping("/apps/update")
    def updateAllApps() {
        InternalApiService service = serviceStubManager.getService(InternalApiService.SERVICE, InternalApiService.class)
        return service.updateAllInfo()
    }
}
