package com.dobybros.hulkadmin.remoteService.discovery
/**
 * Created by lick on 2019/5/30.
 * Description：
 */
interface ServiceVersionService {
    String SERVICE = "discovery"
    void addServiceVersion(ServiceVersion serviceVersion)
    List<ServiceVersion> getServiceVersions()
    void deleteServiceVersion(String id)
    void addServerServices(Map serverServices)
    Map getServerServices()
}
