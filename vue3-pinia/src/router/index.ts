import { createRouter, createWebHistory } from "vue-router";

import Counter from "../views/Counter.vue";

const routes = [
    {

        path: "/",
        name: "Home",
        redirect: "/login",
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/todo",
        name: "Todo",
        component: () => import("../views/Todo.vue"),
    },
    {
        path: "/finance",
        name: "Finance",
        component: () => import("../views/Finance.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {

  // 检查用户访问的是不是个人中心，并且是否已登录
  if (to.path.startsWith('/profile') && !localStorage.getItem('token')) {
      alert("请先登录")
      // 如果未登录，重定向到登录页面
      next('/')
  } else {
      // 允许进入目标路由
      next()
  }
})

export default router;