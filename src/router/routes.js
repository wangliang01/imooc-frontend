const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
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
