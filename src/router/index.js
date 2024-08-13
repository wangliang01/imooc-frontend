import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  // linkExactActiveClass: 'layui-this',
  // linkActiveClass: 'layui-this',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
