import request from '@/plugin/axios'

export function GetAllServerConfigs() {
  return request({
    url: '/deploy/serverconfig',
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
export function RemoveConfig(id) {
    return request({
        url: '/deploy/serverconfig/' + id,
        method: 'delete'
    })
}
export function GetAllGroovyInfo() {
    return request({
        url: '/deploy/groovyzips',
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
export function GetAllServerWebs() {
    return request({
        url: '/deploy/serverweb',
        method: 'get'
    })
}
export function ReloadNginx(data) {
    return request({
        url: '/deploy/serverweb',
        method: 'post',
        data:data
    })
}
export function GetServerVersions(data) {
    return request({
        url: '/deploy/serverweb/server/' + data,
        method: 'get'
    })
}
export function GetWebVersions(data) {
    return request({
        url: '/deploy/serverweb/web/' + data,
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
