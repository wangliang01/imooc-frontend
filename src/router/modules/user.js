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
        redirect: '/user/setting/info',
        component: () => import('@/views/user/setting/index.vue'),
        children: [
          {
            path: 'info',
            name: 'info',
            component: () => import('@/views/user/setting/components/info.vue')
          },
          {
            path: 'password',
            name: 'password',
            component: () => import('@/views/user/setting/components/password.vue')
          },
          {
            path: 'avatar',
            name: 'avatar',
            component: () => import('@/views/user/setting/components/avatar.vue')
          },
          {
            path: 'accountBinding',
            name: 'accountBinding',
            component: () => import('@/views/user/setting/components/accountBinding.vue')
          }
        ]
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
