package com.dobybros.hulkadmin.remoteService.pushnotification

import com.dobybros.hulkadmin.remoteService.pushnotification.AppInfo

interface InternalApiService {
     static final String SERVICE = "pushnotification"

     void updateAllInfo();

     void addNewApp(AppInfo appInfo);

     List<AppInfo> getAllApps();
}