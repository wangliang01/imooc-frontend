import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'
import router from './router'
import store from './store'
import Alert from './components/Alert/index'
import Confirm from './components/Confirm/index'
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(Layui).use(router).use(store).use(Alert).use(Confirm).use(VueLazyLoad).mount('#app')
