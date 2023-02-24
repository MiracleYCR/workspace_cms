import { createRouter, createWebHashHistory } from "vue-router";

import LayoutView from "@/views/LayoutView/index.vue";

const routes = [
  {
    path: "/login",
    name: "LoginView",
    component: () => import("@/views/LoginView/index.vue"),
  },
  {
    path: "/",
    name: "LayoutView",
    component: LayoutView,
    redirect: "/baseSetting",
  },
  {
    path: "/baseSetting",
    name: "BaseSetting",
    redirect: "/baseSetting/station",
    component: LayoutView,
    meta: {
      title: "基础内容",
      icon: "bi-sliders",
    },
    children: [
      {
        path: "/baseSetting/station",
        name: "BaseSetting-Station",
        component: () =>
          import(
            /* webpackChunkName: "baseSetting-station" */ "@/views/BaseSettingView/station/index.vue"
          ),
        meta: {
          title: "站点信息",
          icon: "bi-gear",
        },
      },
      {
        path: "/baseSetting/company",
        name: "BaseSetting-Company",
        component: () =>
          import(
            /* webpackChunkName: "baseSetting-company" */ "@/views/BaseSettingView/company/index.vue"
          ),
        meta: {
          title: "公司信息",
          icon: "bi-buildings",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
