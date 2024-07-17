import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Layui from '@layui/layui-vue'
// import '@layui/layui-vue/lib/index.css'
import router from './router'

const pinia = createPinia()

createApp(App).use(Layui).use(router).use(pinia).mount('#app')
