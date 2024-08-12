export default [
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
  }
]
