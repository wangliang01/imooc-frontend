export default [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/home/index.vue'),
    meta: { noAuth: true },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/layout/tpl1.vue')
      },
      {
        path: '/index/:category',
        name: 'category',
        component: () => import('@/views/home/layout/tpl2.vue')
      }
    ]
  }
]
