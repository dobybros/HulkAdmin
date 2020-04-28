import request from '@/plugin/axios'
import util from "@/libs/util";

export function GetAllServerConfigs(searchInput) {
    return request({
        url: '/deploy/serverconfig?s=' + searchInput,
        method: 'get'
    })
}

export function GetServiceConfigs(service, version) {
    return request({
        url: '/deploy/serviceconfig/' + service + '/' + version,
        method: 'get'
    })
}

export function GetServiceConfigsByType() {
    return request({
        url: '/deploy/configs/type',
        method: 'get'
    })
}

export function SaveConfig(data) {
    return request({
        url: '/deploy/serverconfig',
        method: 'post',
        data: data
    })
}

export function SaveWithLastConfig(data) {
    return request({
        url: '/deploy/serverconfig/withlast',
        method: 'post',
        data: data
    })
}

export function RemoveConfig(id) {
    return request({
        url: '/deploy/serverconfig/' + id,
        method: 'delete'
    })
}

export function CheckServiceConfig(service, version) {
    return request({
        url: '/deploy/serviceconfig/healthy?s=' + service + '&v=' + version,
        method: 'get'
    })
}

export function RepairConfig() {
    return request({
        url: '/deploy/repairconfig',
        method: 'get'
    })
}

export function GetAllGroovyInfo(searchInput) {
    return request({
        url: '/deploy/groovyzips?s=' + searchInput,
        method: 'get'
    })
}

export function DeleteServiceVersion(service, version) {
    return request({
        url: '/deploy/groovyzip?s=' + service + '&v=' + version,
        method: 'delete'
    })
}

export function RemoveService(service) {
    return request({
        url: '/deploy/groovyzips?s=' + service,
        method: 'delete'
    })
}

export function GetAllServiceVersions() {
    return request({
        url: '/deploy/serviceversions',
        method: 'get'
    })
}

export function SaveServiceVersion(data) {
    return request({
        url: '/deploy/serviceversion',
        method: 'post',
        data: data
    })
}

export function RemoveServiceVersion(id) {
    return request({
        url: '/deploy/serviceversion?i=' + id,
        method: 'delete'
    })
}

export function GetAllServerWebs(data) {
    return request({
        url: '/deploy/serverweb/' + data,
        method: 'get'
    })
}

export function ReloadNginx(data) {
    return request({
        url: '/deploy/serverweb',
        method: 'post',
        data: data
    })
}

export function GetServerVersions(data) {
    return request({
        url: '/deploy/serverweb/server/' + data,
        method: 'get'
    })
}

export function GetWebVersions(nginxName, webName, projectName) {
    return request({
        url: '/deploy/serverweb/web/' + nginxName + '/' + webName + '/' + projectName,
        method: 'get'
    })
}

export function GetAllContainer() {
    return request({
        url: '/deploy/containers',
        method: 'get'
    })
}

export function ReloadContainer(data) {
    return request({
        url: '/deploy/container',
        method: 'post',
        data: data
    })
}

export function GetServerIps() {
    return request({
        url: '/deploy/container/serverips',
        method: 'get'
    })
}

export function UploadAllJars() {
    return request({
        url: '/open/allbasejars',
        method: 'post'
    })
}

export function DeleteContainer(server) {
    return request({
        url: '/deploy/container/' + server,
        method: 'delete'
    })
}

export function GetAllNginx() {
    return request({
        url: '/deploy/allnginx',
        method: 'get'
    })
}

export function GetWebsByNginx(data) {
    return request({
        url: '/deploy/webs/' + data,
        method: 'get'
    })
}

export function DownloadAllGroovy(directoryStr) {
    return request({
        url: '/deploy/downloadgroovys',
        method: 'post',
        data: directoryStr
    })
}

export function DeleteWebProjectVersion(nginxName, webName, projectName, version) {
    return request({
        url: '/deploy/web/' + nginxName + '/' + webName + '/' + projectName + '/' + version,
        method: 'delete'
    })
}

export function GetGroovyCloud() {
    return request({
        url: '/gc/init',
        method: 'get'
    })
}

export function GetGroovyCloudData(data) {
    return request({
        url: '/gc/data',
        method: 'post',
        data: data
    })
}

export function DeleteGwsUser(data, userId) {
    return request({
        url: '/gc/gws/delete/' + userId,
        method: 'post',
        data: data
    })
}

export function GetKibanaUrl() {
    return request({
        url: '/log/page',
        method: 'get'
    })
}

export function GetAllGCRepairs() {
    return request({
        url: '/repair/all',
        method: 'get'
    })
}

export function GCRepair(id) {
    return request({
        url: '/repair/' + id,
        method: 'post'
    })
}

export function GetTransactions() {
    return request({
        url: '/dts/transactions',
        method: 'get'
    })
}

export function GetTransactionInfos(transactionType, status = [0,1,2], loadSize = '', skip = 0, size = 10, startTime = '', endTime = '', stage = '') {
    return request({
        url: `/dts/transactioninfos?transactiontype=${transactionType}&status=${status}&loadSize=${loadSize}&skip=${skip}&size=${size}&startTime=${startTime}&endTime=${endTime}&stage=${stage}`,
        method: 'get'
    })
}
export function RetryTransaction(transactionType, ids = []) {
    return request({
        url: `/dts/transaction/${transactionType}/retry`,
        method: 'post',
        data: ids
    })
}

