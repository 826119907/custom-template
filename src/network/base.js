import Axios from 'axios'
import { Message } from 'element-ui'

const host = process.env.VUE_APP_HOST
const axios = Axios.create({
  timeout: 10000,
  responseType: 'json',
  withCredentials: false
})
axios.interceptors.request.use(config => {
  return config
})
axios.interceptors.response.use(
  data => {
    return data
  },
  error => {
    Message.error({
      message: error.response.data.message || '返回数据错误'
    })
    return Promise.reject(error)
  }
)
export { host, axios }
