import axios from 'axios'
import handleError from './handleError'
import local from '@/utils/local'
const CancelToken = axios.CancelToken

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.requestMap = new Map()
  }
  /**
   * 获取内部配置对象
   *
   * 该函数用于生成并返回一个配置对象，该对象包含了请求的基础URL和超时时间。
   * 这样的配置对象通常用于配置HTTP请求，以便在应用内部与其他服务进行通信。
   *
   * @returns {Object} 返回一个包含baseURL和timeout属性的配置对象。
   */
  getInsideConfig() {
    // 初始化配置对象
    const config = {
      baseURL: this.baseUrl, // 设置请求的基础URL
      timeout: 10000 // 设置请求的超时时间
    }
    return config // 返回配置对象
  }
  /**
   * 配置axios实例的拦截器
   * @param {Object} instance - Axios实例
   */
  interceptors(instance) {
    // 请求拦截器：在发送请求之前做些什么，例如设置请求头
    instance.interceptors.request.use(
      (config) => {
        const key = `${config.url}&${config.method}`
        if (this.requestMap.has(key)) {
          this.requestMap.get(key)('取消重复请求')
          this.requestMap.delete(key)
        }
        // 取消请求
        config.cancelToken = new CancelToken((cancel) => {
          // 将取消请求的函数存储到请求配置对象中
          this.requestMap.set(key, cancel)
        })

        // 添加token
        const token = local.get('token')
        console.log('🚀 ~ HttpRequest ~ interceptors ~ token:', token)

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`
        }
        console.log('config', config)
        // 返回经过处理的配置对象
        return config
      },
      (error) => {
        // 请求错误处理：对请求错误进行处理，例如显示错误提示
        return handleError(error)
      }
    )

    // 响应拦截器：在接收到响应之后做些什么，例如处理响应数据或错误
    instance.interceptors.response.use(
      (res) => {
        const key = `${res.config.url}&${res.config.method}`
        if (this.requestMap.has(key)) {
          this.requestMap.delete(key)
        }
        // 返回响应数据的主体部分
        return res.data
      },
      (error) => {
        const key = `${error.config.url}&${error.config.method}`
        if (this.requestMap.has(key)) {
          this.requestMap.delete(key) // 清理已取消的请求
        }
        // 响应错误处理：对响应错误进行处理，例如显示错误提示
        return handleError(error)
      }
    )
  }
  /**
   * 创建一个axios实例并配置请求拦截器。
   *
   * 此函数的目的是为了根据提供的选项创建一个axios实例，并应用内部配置和请求拦截器。
   * 它使得在发起HTTP请求前，可以统一配置和处理请求选项，如设置请求头、处理请求数据等。
   *
   * @param {Object} options - 请求的具体配置选项，例如URL、方法、数据等。
   * @returns {Promise} 返回一个axios实例发起的请求Promise对象。
   */
  request(options) {
    // 创建一个空的axios实例
    const instance = axios.create()
    // 合并内部配置和传入的配置选项
    options = Object.assign(this.getInsideConfig(), options)
    // 注册请求和响应拦截器
    this.interceptors(instance)
    // 使用配置选项发起请求
    return instance(options)
  }
  /**
   * 发起GET请求。
   *
   * 该函数封装了发送GET请求的逻辑。它通过调用内部的request方法来实现。
   * 主要用于在客户端和服务器之间传递参数并获取响应数据。
   *
   * @param {string} url - 请求的URL地址。
   * @param {Object} params - 查询参数对象，用于拼接在URL中。
   * @param {Object} options - 额外的请求选项，用于定制请求行为。这些选项会被合并到最终的请求配置中。
   * @returns {Promise} - 返回一个Promise对象，该对象在请求完成后解析为响应数据。
   */
  get(url, params, options = {}) {
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL')
    }
    // 构造请求配置对象，并指定请求方法为GET。
    return this.request({
      ...options, // 展开options对象，以包含所有提供的选项。
      url, // 设置请求的URL。
      params, // 将查询参数对象合并到请求配置中。
      method: 'get' // 明确指定请求方法为GET。
    })
  }
  /**
   * 发送POST请求。
   *
   * 该函数封装了发送HTTP POST请求的逻辑。通过调用内部的request方法，配置请求的URL、数据及选项，并指定请求方法为POST。
   * 主要用于在客户端与服务器之间传递数据，例如提交表单数据、上传文件等。
   *
   * @param {string} url - 请求的URL地址。
   * @param {Object} data - 请求发送的数据。
   * @param {Object} options - 请求的配置选项，例如headers、timeout等。
   * @returns {Promise} - 返回一个Promise对象，用于异步处理请求的结果。
   */
  post(url, data, options) {
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL')
    }
    // 配置请求参数，并调用request方法发送请求
    return this.request({
      ...options, // 展开options对象，合并入配置中
      url, // 设置请求的URL
      data, // 设置请求的数据
      method: 'post' // 设置请求方法为POST
    })
  }
}

export default HttpRequest
