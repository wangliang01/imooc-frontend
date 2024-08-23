import Message from './index.vue'
import create from '@/utils/create'

export function message(msg, onClose) {
  create(Message, { msg, onClose })
}

export default {
  install(app) {
    app.config.globalProperties.$alert = message
  }
}
