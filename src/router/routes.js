const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('@/views/login/forget.vue')
  },
  // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/index.vue') }
]

// 使用 import.meta.glob 动态导入模块
const modules = import.meta.glob(`./modules/*.js`, { eager: true })

for (const path in modules) {
  const currentModule = modules[path].default
  routes.push(...currentModule)
}

export default routes
