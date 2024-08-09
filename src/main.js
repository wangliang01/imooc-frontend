import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'
import router from './router'
import Alert from './components/Alert/index'
import Confirm from './components/Confirm/index'
import VueLazyLoad from 'vue3-lazyload'

console.log('测试pipeline')

const pinia = createPinia()

createApp(App).use(Layui).use(router).use(pinia).use(Alert).use(Confirm).use(VueLazyLoad).mount('#app')
