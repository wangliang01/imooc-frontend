const routes = [
  {
    path: "/",
    redirect: "/index/ask",
  },
  {
    path: "/index",
    name: "home",
    redirect: '/index/ask',
    component: () => import("@/views/home/index.vue"),
    children: [
      {
        path: "ask",
        name: "ask",
        component: () => import("@/views/home/ask.vue"),
      },
      {
        path: 'share',
        name: 'share',
        component: () => import('@/views/home/share.vue')
      },
      {
        path: 'discuss',
        name: 'discuss',
        component: () => import('@/views/home/discuss.vue')
      },
      {
        path: 'advise',
        name: 'advise',
        component: () => import('@/views/home/advise.vue')
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/home/notice.vue')
      },
      {
        path: "logs",
        name: "logs",
        component: () => import("@/views/home/logs.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/login/register.vue"),
  },
  {
    path: "/forget",
    name: "forget",
    component: () => import("@/views/login/forget.vue"),
  },
];

export default routes;
