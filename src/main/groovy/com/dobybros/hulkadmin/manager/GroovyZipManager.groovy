package com.dobybros.hulkadmin.manager

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.utils.CommonStants
import com.docker.file.adapters.GridFSFileHandler
import org.apache.commons.lang.StringUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import script.file.FileAdapter

/**
 * Created by lick on 2020/6/2.
 * Description：
 */
@Component
class GroovyZipManager {
    @Autowired
    GridFSFileHandler fileAdapter
    @Autowired
    ApplicationConfig applicationConfig
    public List<String> getServiceVersions(String serviceName) {
        List<FileAdapter.FileEntity> files = fileAdapter.getFilesInDirectory(new FileAdapter.PathEx(applicationConfig.scriptRemotePath + serviceName), null, true);
        if(files != null && !files.isEmpty()){
            List<String> versions = new ArrayList<>()
            for (FileAdapter.FileEntity fileEntity : files){
                String absolutePath = fileEntity.absolutePath
                if (absolutePath != null) {
                    String[] serviceVersions = absolutePath.split("/")
                    String serviceVersion;
                    if (StringUtils.isEmpty(serviceVersions[0])) {
                        serviceVersion = serviceVersions[2]
                    } else {
                        serviceVersion = serviceVersions[1]
                    }
                    if(serviceVersion.contains(CommonStants.SERVICE_VERSION_SYMBOL)){
                        String[] theServiceVersions = serviceVersion.split(CommonStants.SERVICE_VERSION_SYMBOL)
                        String service = theServiceVersions[0]
                        String version = theServiceVersions[1]
                        if(service.equals(serviceName) && !versions.contains(version)){
                            versions.add(version)
                        }
                    }
                }
            }
            if(!versions.isEmpty()){
                Collections.sort(versions)
                return versions
            }
        }
        return null
    }
}
