import request from '@/utils/request'

// 获取文章列表
export function getList(data) {
  return request.get('/public/list', data)
}

// 温馨提醒
export function getTips() {
  return request.get('/public/tips')
}

// 本周热议
export function getTop() {
  return request.get('/public/topWeek')
}

// 友情链接
export function getLinks() {
  return request.get('/public/links')
}

// 本周热门
export function getTopWeek() {
  return request.get('/public/topWeek')
}
