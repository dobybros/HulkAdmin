import request from '@/plugin/axios'

export function GetAllApps() {
  return request({
    url: '/noti/apps',
    method: 'get'
  })
}
export function UpdateAllApps() {
  return request({
    url: "/noti/apps/update",
    method: 'post'
  })
}
export function SaveApp(app) {
  return request({
    url: '/noti/app',
    method: 'post',
    data: app
  })
}