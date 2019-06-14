package com.dobybros.hulkadmin.remoteService.discovery

import org.bson.Document

/**
 * Created by lick on 2019/5/30.
 * Description：
 */
interface ServersConfigService {
    String SERVICE = "discovery"
    public void addConfig(List<Document> documents)
    List<Document> getConfigs()
}
