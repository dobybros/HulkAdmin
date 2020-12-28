package com.dobybros.hulkadmin.remoteService.version.data

import connectors.mongodb.annotations.DBDocument
import connectors.mongodb.codec.BaseObject

@DBDocument
class Build extends BaseObject {
    private Integer buildNumber
    private String version
    private Integer type
    private String downloadUrl
    private String resourceId
    private List<String> releaseNotes
    private Long publishTime

    Integer getBuildNumber() {
        return buildNumber
    }

    void setBuildNumber(Integer buildNumber) {
        this.buildNumber = buildNumber
    }

    String getVersion() {
        return version
    }

    void setVersion(String version) {
        this.version = version
    }

    Integer getType() {
        return type
    }

    void setType(Integer type) {
        this.type = type
    }

    String getDownloadUrl() {
        return downloadUrl
    }

    void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl
    }

    List<String> getReleaseNotes() {
        return releaseNotes
    }

    void setReleaseNotes(List<String> releaseNotes) {
        this.releaseNotes = releaseNotes
    }

    Long getPublishTime() {
        return publishTime
    }

    void setPublishTime(Long publishTime) {
        this.publishTime = publishTime
    }

    String getResourceId() {
        return resourceId
    }

    void setResourceId(String resourceId) {
        this.resourceId = resourceId
    }
}
