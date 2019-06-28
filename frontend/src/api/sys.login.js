import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/open/login',
    method: 'post',
    data
  })
}
