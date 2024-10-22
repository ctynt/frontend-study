import { createRouter, createWebHistory } from "vue-router";

import Counter from "../views/Counter.vue";

const routes = [
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
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;