package com.dobybros.hulkadmin.controllers

import com.dobybros.hulkadmin.remoteService.scheduledTask.ScheduledTaskService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by lick on 2019/8/3.
 * Description：
 */
@RequestMapping
@CrossOrigin
@RestController
class ScheduledTaskController {
    @Autowired
    ServiceStubManager serviceStubManager

    @GetMapping("scheduledtasks")
    def getScheduledTasks(){
        ScheduledTaskService scheduledTaskService = serviceStubManager.getService(ScheduledTaskService.SERVICE, ScheduledTaskService.class)
        List list = scheduledTaskService.getTaskFireAndState()
        return list
    }
}

