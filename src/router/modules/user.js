export default [
  {
    path: '/user',
    redirect: '/user/center',
    component: () => import('@/views/user/index.vue'),
    children: [
      {
        path: 'center',
        name: 'userCenter',
        component: () => import('@/views/user/center/index.vue')
      },
      {
        path: 'setting',
        name: 'userSetting',
        component: () => import('@/views/user/setting/index.vue')
      }
    ]
  }
]
