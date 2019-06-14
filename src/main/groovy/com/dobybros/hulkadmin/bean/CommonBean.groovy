package com.dobybros.hulkadmin.bean

import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * Created by lick on 2019/6/10.
 * Description：
 */
@Configuration
class CommonBean {
    @Bean
    ServiceStubManager serviceStubManager() {
        ServiceStubManager serviceStubManager = new ServiceStubManager();
        serviceStubManager.setHost("localhost:80")
        serviceStubManager.init()
        return serviceStubManager
    }
}
