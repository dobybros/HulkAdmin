package com.dobybros.hulkadmin.bean

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.docker.file.adapters.GridFSFileHandler
import com.docker.rpc.remote.stub.ServiceStubManager
import com.docker.storage.mongodb.MongoHelper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * Created by lick on 2019/6/10.
 * Description：
 */
@Configuration
class CommonBean {
    @Autowired
    ApplicationConfig applicationConfig
    @Bean
    ServiceStubManager serviceStubManager() {
        ServiceStubManager serviceStubManager = new ServiceStubManager();
        serviceStubManager.setHost(applicationConfig.remoteServiceHost)
        serviceStubManager.init()
        return serviceStubManager
    }
    @Bean
    GridFSFileHandler fileAdapter(){
        GridFSFileHandler fileAdapter = new GridFSFileHandler()
        MongoHelper gridfsHelper = new MongoHelper();
        gridfsHelper.setHost(applicationConfig.gridfsHost);
        gridfsHelper.setConnectionsPerHost(Integer.valueOf(applicationConfig.gridfsConnectionsPerHost));
        gridfsHelper.setDbName(applicationConfig.gridfsDBName);
        gridfsHelper.setUsername(applicationConfig.gridfsUserName);
        gridfsHelper.setPassword(applicationConfig.gridfsPassword);
        gridfsHelper.init()
        fileAdapter.setResourceHelper(gridfsHelper);
        fileAdapter.setBucketName(applicationConfig.gridfsBucket);
        fileAdapter.init()
        return fileAdapter;
    }
}
