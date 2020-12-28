package com.dobybros.hulkadmin.remoteService.version.data


import connectors.mongodb.codec.DataObject

class App extends DataObject {
    private String appNumber
    private String appId
    private String name
    private List<Build> builds
    private String project
    private Integer minBuild
    private String deviceType
    private String deviceRegular
    private Long createTime
    private Long updateTime

    String getAppNumber() {
        return appNumber
    }

    void setAppNumber(String appNumber) {
        this.appNumber = appNumber
    }

    String getAppId() {
        return appId
    }

    void setAppId(String appId) {
        this.appId = appId
    }

    String getName() {
        return name
    }

    void setName(String name) {
        this.name = name
    }

    List<Build> getBuilds() {
        return builds
    }

    void setBuilds(List<Build> builds) {
        this.builds = builds
    }

    Integer getMinBuild() {
        return minBuild
    }

    void setMinBuild(Integer minBuild) {
        this.minBuild = minBuild
    }

    String getDeviceType() {
        return deviceType
    }

    void setDeviceType(String deviceType) {
        this.deviceType = deviceType
    }

    String getDeviceRegular() {
        return deviceRegular
    }

    void setDeviceRegular(String deviceRegular) {
        this.deviceRegular = deviceRegular
    }

    Long getCreateTime() {
        return createTime
    }

    void setCreateTime(Long createTime) {
        this.createTime = createTime
    }

    Long getUpdateTime() {
        return updateTime
    }

    void setUpdateTime(Long updateTime) {
        this.updateTime = updateTime
    }

    String getProject() {
        return project
    }

    void setProject(String project) {
        this.project = project
    }

}
