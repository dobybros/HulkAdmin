package com.dobybros.hulkadmin.remoteService.discovery


/**
 * Created by lick on 2019/10/18.
 * Description：
 */
interface DiscoveryService {
    final static String SERVICE = "discovery"
    List getTaskFireAndState()
}