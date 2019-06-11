package com.dobybros.hulkadmin.remoteService.resource

import com.dobybros.hulkadmin.remoteService.data.AppInfo

import javax.servlet.http.HttpServletRequest

interface InternalApiService {
     static final String SERVICE = "pushnotification"

     void updateAllInfo();

     void addNewApp(AppInfo appInfo);

     List<AppInfo> getAllApps();
}