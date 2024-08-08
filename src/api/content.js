import request from '@/utils/request'

// 获取文章列表
export function getList(data) {
  return request.get('/api/public/list', data)
}

// 温馨提醒
export function getTips() {
  return request.get('/api/public/tips')
}

// 本周热议
export function getTop() {
  return request.get('/api/public/topWeek')
}

// 友情链接
export function getLinks() {
  return request.get('/api/public/links')
}
