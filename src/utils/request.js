import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true;
// url 是请求的服务器地址
// payload 参数
export function post (url, payload = {}) {
  return new Promise((resolve, reject) => {
    // let headers = {}

    // if (localStorage.getItem('token')) {
    //   headers = { token: localStorage.getItem('token') }
    // }

    axios({
      method: 'post',
      url,
      data: payload
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get (endpoint, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      baseURL: '/api',
      url: endpoint,
      params: { ...payload }
    })
    .then(response => {
      resolve(response)
    })
    .catch(err => {
      reject(err)
    })
  })
}
