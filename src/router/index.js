import { createRouter, createWebHashHistory } from "vue-router";

import LayoutView from "@/views/LayoutView/index.vue";

const routes = [
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView/index.vue"),
  },
  {
    path: "/layout",
    name: "LayoutView",
    component: LayoutView,
  },
  {
    path: "/baseSetting",
    name: "BaseSetting",
    component: LayoutView,
    meta: {},
    children: [
      {
        path: "/baseSetting/station",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
