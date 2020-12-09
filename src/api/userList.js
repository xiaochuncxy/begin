import request from './request.js'

export function getUserData(page, size, kw = '') {
  let url = `users?pagenum=${page}&pagesize=${size}`
  if (kw) {
    url += `&query=${kw}`
  }
  return request.get(url)
}


export function userAdd(userInf) {
  let url = `users`

  return request({
    url,
    method: 'post',
    data: userInf
  })
}