import { getApi } from '../services/httpServices'

export function getUserList(params) {
  return getApi().get('https://60f2479f6d44f300177885e6.mockapi.io/users', {
    params: params
  })
}


export function getAdminList(params) {
  return getApi().get('https://60f2479f6d44f300177885e6.mockapi.io/users?user_type/page/limit', {
    params: params
  })
}
