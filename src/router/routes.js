const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/home/layout/tpl1.vue')
      },
      {
        path: '/index/:category',
        name: 'category',
        component: () => import('@/views/home/layout/tpl2.vue')
      }
    ]
  },
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
  }
]

export default routes
