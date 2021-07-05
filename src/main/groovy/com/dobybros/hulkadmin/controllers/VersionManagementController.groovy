package com.dobybros.hulkadmin.controllers


import com.dobybros.hulkadmin.remoteService.version.VersionService
import com.dobybros.hulkadmin.remoteService.version.data.App
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("version")
@CrossOrigin
@RestController
class VersionManagementController {
    private static final String TAG = VersionManagementController.class.getSimpleName()

    @Autowired
    ServiceStubManager serviceStubManager

    @GetMapping("/app/all")
    def getAllApps() {
        VersionService versionService = serviceStubManager.getService(VersionService.SERVICE, VersionService.class)
        return versionService.getAllApp()
    }

    @PutMapping("/app")
    def putApp(@RequestBody App app) {
        VersionService versionService = serviceStubManager.getService(VersionService.SERVICE, VersionService.class)
        return versionService.putApp(app)
    }

    @DeleteMapping("/app/delete")
    def deleteApp(@RequestParam(name = "appnum", required = true) String appNumber) {
        VersionService versionService = serviceStubManager.getService(VersionService.SERVICE, VersionService.class)
        return versionService.deleteApp(appNumber)
    }
}
