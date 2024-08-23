import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'
import router from './router'
import store from './store'
import Alert from './components/Alert/index'
import Confirm from './components/Confirm/index'
import Message from './components/Message'
import VueLazyLoad from 'vue3-lazyload'
// 加入权限
import permission from './router/permission'

createApp(App).use(store).use(Layui).use(router).use(Alert).use(Confirm).use(Message).use(VueLazyLoad).use(permission).mount('#app')
