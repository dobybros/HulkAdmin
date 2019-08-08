package com.dobybros.hulkadmin.remoteService.scheduledTask

import org.springframework.scheduling.config.ScheduledTask

interface ScheduledTaskService {
    String SERVICE = "scheduledtask"

    List getTaskFireAndState()
}