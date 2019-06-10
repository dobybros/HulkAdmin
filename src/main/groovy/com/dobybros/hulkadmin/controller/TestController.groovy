package com.dobybros.hulkadmin.controller

import com.dobybros.hulkadmin.remoteService.resource.ResourceService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

import javax.xml.ws.Service

/**
 * Created by lick on 2019/6/10.
 * Description：
 */
@RestController
class TestController {
    @Autowired
    ServiceStubManager serviceStubManager
    @RequestMapping("/test")
    String test(){
      ResourceService resourceService = serviceStubManager.getService(ResourceService.SERVICE, ResourceService.class)
      resourceService.useTempResource("group1+M00+00+00+wKhQZVz4yYKAcwujAAGlYb743Ro9654370+FD", null, null)
    }
}
