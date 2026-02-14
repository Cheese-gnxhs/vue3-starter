/* 封装axios用于发送请求 */
import axios from 'axios'

// 创建一个新的axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 基地址
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    // 1、可以开启loading，禁止背景点击
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner',
    //   duration: 0 // 不会自动消失
    // })

    // 2、统一添加请求头
    // const token = store.getters.token
    // if (token) {
    //   config.headers['Access-Token'] = token
    //   config.headers.platform = 'H5'
    // }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么

    // 1、关闭loading
    // Toast.clear()

    // 2、统一处理响应数据错误等等（一般可以提取一个data出来，避免结构太深）
    const res = response.data
    // if (res.status !== 200) {
    //   Toast(res.message)
    //   return Promise.reject(res.message)
    // } else {
    //   Toast.clear()
    // }
    return res
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default request
