import Confirm from './index.vue'
import create from '@/utils/create'

export function confirm(msg, success, cancel) {
  // 如果有提示框，先移除
  if (document.querySelector('.confirm')) {
    document.querySelector('.confirm').remove()
  }
  create(Confirm, { msg, success, cancel })
}

export default {
  install(app) {
    app.config.globalProperties.$confirm = confirm
  }
}
