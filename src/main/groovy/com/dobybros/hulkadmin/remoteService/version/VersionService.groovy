package com.dobybros.hulkadmin.remoteService.version

import com.dobybros.hulkadmin.remoteService.version.data.App
import com.dobybros.hulkadmin.remoteService.version.data.Build

interface VersionService {
    static final String SERVICE = "versionweb"
    void putApp(App requestApp)

    List<App> getAllApp()

    void addBuild(String appNumber, Build build)

    void deleteApp(String appNumber)
}
