// import axios from 'axios'
// import handleError from './handleError'

// const request = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   timeout: 10000,
// })

// // 请求拦截
// request.interceptors.request.use(
//   (config) => {
//     return config
//   },
//   (error) => {
//     return handleError(error)
//   }
// )

// // 响应拦截
// request.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (error) => {
//     return handleError(error)
//   }
// )

import HttpRequest from "./http"

const request = new HttpRequest(import.meta.env.VITE_BASE_URL)


export default request