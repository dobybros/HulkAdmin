import request from '@/plugin/axios'

export function GetAllServerConfigs() {
  return request({
    url: '/deploy/serverconfig',
    method: 'get'
  })
}
