import axios from 'axios'
const qs = require('qs')

export function login(userInf) {
  let url = 'http://localhost:8888/api/private/v1/login'

  let userInfStr = qs.stringify(userInf)
  console.log(userInfStr);
  return axios.post(url, userInfStr, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}