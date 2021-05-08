import axios from 'axios'

// 创建一个axios的实例,创建的时候可以传递一些东西
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000

})

// 封装一个可用的 get 方法
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {params}).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}



/* 封装一个 post 方法, 它会帮我们发送post请求 */
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}


// axios.defaults.headers.post['Content-Type'] = 'application/json'; //不用这个全局设置, 用自己封装的 post 方法
