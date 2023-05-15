import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/index/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
