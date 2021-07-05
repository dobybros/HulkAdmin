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
export function DeleteApp(appNumber) {
  return request({
    url: `/version/app/delete?appnum=${appNumber}`,
    method: 'delete'
  })
}
