package com.dobybros.hulkadmin.remoteService.transaction.data

/**
 * Created by wenqi on 2018/12/6
 */
class TransactionTry implements Comparable<TransactionTry>{
    private Integer order
    private String className
    private String methodName
    private Integer version
    private String serviceName
    private String notify

    TransactionTry() {
    }

    TransactionTry(String serviceName, Integer order, String className, String methodName, Integer version, String notify) {
        this.serviceName = serviceName
        this.order = order
        this.className = className
        this.methodName = methodName
        this.version = version
        this.notify = notify
    }

    Integer getOrder() {
        return order
    }

    void setOrder(Integer order) {
        this.order = order
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

    int compareTo(TransactionTry transactionTry) {
        return (order - transactionTry.order)
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
