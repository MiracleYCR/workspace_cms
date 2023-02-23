<template>
  <el-menu
    router
    text-color="#A3A6AD"
    background-color="#304156"
    active-text-color="#f4f4f5"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :collapse="!$store.getters.sideBarOpened"
  >
    <MenuItem v-for="item in menus" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { filterRoutes, generateMenus } from "@/router/config/route";

import MenuItem from "./MenuItem.vue";

const route = useRoute();
const router = useRouter();

const activeMenu = computed(() => {
  return route.path;
});
const menus = computed(() => {
  console.log(router.getRoutes());
  const filterRouteList = filterRoutes(router.getRoutes());

  console.log(filterRouteList);

  return generateMenus(filterRouteList);
});
</script>

<style lang="scss" scoped></style>
