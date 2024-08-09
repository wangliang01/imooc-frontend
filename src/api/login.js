import request from '@/utils/request'

/**
 * 根据会话标识符获取验证码
 *
 * 本函数通过一个HTTP GET请求，向服务器获取指定会话标识符（sid）对应的验证码。
 * 验证码是用于验证用户身份或防止机器人攻击的一种安全机制。
 *
 * @param {string} sid 会话标识符，用于唯一标识一个验证码会话。
 * @returns {Promise} 返回一个Promise对象，该对象在解析时会提供从服务器获取的验证码数据。
 */
export function getCode(sid) {
  // 向服务器发送GET请求，请求路径为'/captcha'，并传递sid作为查询参数
  return request.get('/public/captcha', { sid })
}

/**
 * 用户登录接口
 *
 * 本函数提供用户登录的功能，通过发送POST请求到/login路径来实现。
 * 请求体中包含用户登录所需的数据。登录成功后，服务器将返回相应的登录状态和信息。
 *
 * @param {Object} data - 用户登录的数据对象，包含用户名和密码等登录凭证。
 * @returns {Promise} - 返回一个Promise对象，该对象用于处理服务器响应，包括登录成功或失败的情况。
 */
export function login(data) {
  // 发送POST请求到/login路径进行用户登录
  return request.post('/login', data)
}

/**
 * 用户注册接口
 *
 * @param {Object} data - 用户注册的数据对象，包含用户名、密码、邮箱等注册信息。
 * @returns {Promise} - 返回一个Promise对象，用于处理服务器响应，包括注册成功或失败的情况。
 */

export function register(data) {
  // 发送POST请求到/register路径进行用户注册
  return request.post('/register', data)
}
