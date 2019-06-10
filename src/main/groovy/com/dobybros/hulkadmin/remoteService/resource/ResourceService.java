package com.dobybros.hulkadmin.remoteService.resource;

import java.util.List;

/**
 * 资源服务器提供的资源服务
 *
 */
public interface ResourceService {
    String SERVICE = "resource";
    /**
     * 标记对临时上传的资源ID进行了正式使用， 即把资源文件从临时目录移动到正式的资源目录
     *
     * @param resourceId 资源ID
     * @return 返回是否移动成功
     */
    public boolean useTempResource(String resourceId, List prefixs, List buckets);
    /**
     * 根据id获取video的大小
     *
     * @param resourceIds
     * @return
     */
    public long countVideoSize(List<String> resourceIds);
    void downloadFile(String fieldId, String localFilePath);
}