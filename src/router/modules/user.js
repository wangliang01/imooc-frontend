export default [
  {
    path: '/user',
    redirect: '/user/center',
    linkActiveClass: 'layui-this',
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
      },
      {
        path: 'message',
        name: 'userMessage',
        component: () => import('@/views/user/message/index.vue')
      },
      {
        path: 'post',
        name: 'userPost',
        component: () => import('@/views/user/post/index.vue')
      },
      {
        path: 'otherSetting',
        name: 'otherSetting',
        component: () => import('@/views/user/other/index.vue')
      }
    ]
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/user/info/index.vue')
  }
]
