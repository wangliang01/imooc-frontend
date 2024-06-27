import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'
import router from './router'

createApp(App).use(Layui).use(router).mount('#app')
