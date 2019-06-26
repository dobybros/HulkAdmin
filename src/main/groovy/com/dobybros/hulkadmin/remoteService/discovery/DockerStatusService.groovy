package com.dobybros.hulkadmin.remoteService.discovery

import chat.errors.CoreException

/**
 * Created by wenqi on 2018/12/5
 */
interface DockerStatusService {
    String SERVICE = "discovery"
    void deleteDockerStatus(String server) throws CoreException

    void addDockerStatus(DockerStatus serverStatus)

    void deleteService(String server, String service) throws CoreException

    void update(String server, Integer status, Integer health) throws CoreException

    DockerStatus getDockerStatusByServer(String server) throws CoreException

    public List<DockerStatus> getDockerStatuses()

    public void deleteDockerStatusByServer(String server)
}
