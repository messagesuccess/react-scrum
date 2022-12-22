import axios from 'axios'
import event from './events'
const options = {
    baseURL: '/api',
    timeout: '5000'
}
const inter = axios.create(options)
//封装的axios请求函数
function axiosApi(method = 'GET', url, data = {}) {
    const promise = inter({ method, url, data })
    return promise
}
//请求拦截器
inter.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        console.log(err)
    }
)
//响应拦截器用作错误统一全局处理
inter.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            if (response.data.code === 1) {
                event.emit('global_success', response.data.msg)
                return response.data
            }
            if (response.data.code === 0) {
                event.emit('global_error', response.data.msg)
            }
        }
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default axiosApi
