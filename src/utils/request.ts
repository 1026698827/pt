import axios, { type AxiosRequestConfig, type Method } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.BASE_URL
})

// 配置请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 配置响应拦截器
service.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  (response) => {
    return response.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 定义返回的泛型
interface Data<T> {
  code: number
  message: string
  data: T
}
// 对接口的类型封装
const request = <T>(
  url: string,
  method: Method,
  submitData?: object,
  config?: AxiosRequestConfig
) => {
  return service.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    ...config
  })
}

export default request
