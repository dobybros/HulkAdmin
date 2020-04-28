package com.dobybros.hulkadmin.remoteService.transaction.data

/**
 * Created by wenqi on 2018/12/14
 */
class TransactionResultNotify {

    private String className
    private String methodName
    private Integer version
    private String serviceName
    private String notify

    TransactionResultNotify(){

    }

    TransactionResultNotify(String className, String methodName, Integer version, String serviceName, String notify) {
        this.className = className
        this.methodName = methodName
        this.version = version
        this.serviceName = serviceName
        this.notify = notify
    }

    String getClassName() {
        return className
    }

    void setClassName(String className) {
        this.className = className
    }

    String getMethodName() {
        return methodName
    }

    void setMethodName(String methodName) {
        this.methodName = methodName
    }

    Integer getVersion() {
        return version
    }

    void setVersion(Integer version) {
        this.version = version
    }

    String getServiceName() {
        return serviceName
    }

    void setServiceName(String serviceName) {
        this.serviceName = serviceName
    }

    String getNotify() {
        return notify
    }

    void setNotify(String notify) {
        this.notify = notify
    }
}
