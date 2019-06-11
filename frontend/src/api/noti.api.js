import request from '@/plugin/axios'

export function GetAllApps() {
  return request({
    url: '/noti/apps',
    method: 'get'
  })
}
export function UploadFiles(files) {
  const formData = new FormData()

}