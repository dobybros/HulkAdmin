package com.dobybros.hulkadmin.bean

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.docker.file.adapters.GridFSFileHandler
import com.docker.rpc.remote.stub.ServiceStubManager
import com.docker.storage.adapters.ServiceVersionService
import com.docker.storage.adapters.impl.DockerStatusServiceImpl
import com.docker.storage.adapters.impl.ServersServiceImpl
import com.docker.storage.adapters.impl.ServiceVersionServiceImpl
import com.docker.storage.mongodb.MongoHelper
import com.docker.storage.mongodb.daos.DockerStatusDAO
import com.docker.storage.mongodb.daos.ServersDAO
import com.docker.storage.mongodb.daos.ServiceVersionDAO
import org.apache.catalina.Context
import org.apache.tomcat.util.http.LegacyCookieProcessor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.web.embedded.tomcat.TomcatContextCustomizer
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory
import org.springframework.boot.web.server.WebServerFactory
import org.springframework.boot.web.server.WebServerFactoryCustomizer
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
    private MongoHelper dockerStatusHelper
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
    @Bean
    public ServersServiceImpl serversService(){
        return new ServersServiceImpl()
    }

    @Bean
    public ServersDAO serversDAO(){
        MongoHelper configHelper = new MongoHelper();
        configHelper.setHost(applicationConfig.databaseHost);
        configHelper.setConnectionsPerHost(Integer.valueOf(applicationConfig.connectionsPerHost));
        configHelper.setDbName(applicationConfig.configDBName);
        configHelper.setUsername(applicationConfig.mongoUserName);
        configHelper.setPassword(applicationConfig.mongoPassword);
        configHelper.init()
        ServersDAO serversDAO = new ServersDAO();
        serversDAO.setMongoHelper(configHelper);
        serversDAO.init()
        return serversDAO
    }
    @Bean
    public DockerStatusServiceImpl dockerStatusService(){
        DockerStatusDAO dockerStatusDAO = new DockerStatusDAO()
        dockerStatusDAO.setMongoHelper(getDockerStatusHelper())
        dockerStatusDAO.init()
        DockerStatusServiceImpl dockerStatusService = new DockerStatusServiceImpl()
        dockerStatusService.setDockerStatusDAO(dockerStatusDAO)
        return dockerStatusService
    }
    @Bean
    public ServiceVersionServiceImpl serviceVersionService(){
        ServiceVersionDAO serviceVersionDAO = new ServiceVersionDAO()
        serviceVersionDAO.setMongoHelper(getDockerStatusHelper())
        serviceVersionDAO.init()
        ServiceVersionService serviceVersionService = new ServiceVersionServiceImpl()
        serviceVersionService.setServiceVersionDAO(serviceVersionDAO)
        return serviceVersionService
    }
    @Bean
    public WebServerFactoryCustomizer cookieProcessorCustomizer() {
        return new WebServerFactoryCustomizer() {
            void customize(WebServerFactory factory) {
                if (factory instanceof TomcatServletWebServerFactory) {
                    ((TomcatServletWebServerFactory) factory)
                            .addContextCustomizers(new TomcatContextCustomizer() {

                                @Override
                                void customize(Context context) {
                                    context.setCookieProcessor(new LegacyCookieProcessor());
                                }
                            });
                }
            }
        };
    }
    private synchronized MongoHelper getDockerStatusHelper(){
        if(dockerStatusHelper == null){
            dockerStatusHelper = new MongoHelper();
            dockerStatusHelper.setHost(applicationConfig.databaseHost);
            dockerStatusHelper.setConnectionsPerHost(Integer.valueOf(applicationConfig.connectionsPerHost));
            dockerStatusHelper.setDbName(applicationConfig.dockerStatusDBName);
            dockerStatusHelper.setUsername(applicationConfig.mongoUserName);
            dockerStatusHelper.setPassword(applicationConfig.mongoPassword);
            dockerStatusHelper.init()
        }
        return dockerStatusHelper
    }
}
