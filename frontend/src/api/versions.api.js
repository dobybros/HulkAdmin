import request from '@/plugin/axios'

export function GetAllApp() {
  return request({
    url: '/version/app/all',
    method: 'get'
  })
}

export function PutApp(app) {
  return request({
    url: '/version/app',
    method: 'put',
    data: app
  })
}
