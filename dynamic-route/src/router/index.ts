import { createRouter, createWebHistory } from "vue-router";

// 静态路由列表
let routes: any[] = [
  {
    path: "/",
    name: "Home",
    redirect: "/home/dashboard",
    children: [
      {
        path: "/home/dashboard",
        name: "Dashboard",
        component: () => import("../views/DashboardView.vue"),
      },
      {
        path: "/home/settings",
        name: "Settings",
        component: () => import("../views/SettingsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 动态添加路由的函数
function addRoute(route: any) {
  routes.push(route);
  router.addRoute(route);
}

export { router, addRoute };
