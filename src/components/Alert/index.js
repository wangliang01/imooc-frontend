import Alert from './index.vue'
import create from '@/utils/create'

export function alert(msg, onClose) {
  // 如果有提示框，先移除
  if (document.querySelector('.alert')) {
    document.querySelector('.alert').remove();
  }
  create(Alert, { msg, onClose })
}


export default {
  install(app) {
    app.config.globalProperties.$alert = alert
  }
};