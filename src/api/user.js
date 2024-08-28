import request from '@/utils/request'

// 用户签到
export function userSign() {
  return request.get('/user/fav')
}

// 更新用户基本资料
export function updateUserInfo(data) {
  return request.post('/user/update', data)
}
