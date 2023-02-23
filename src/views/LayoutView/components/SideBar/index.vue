<template>
  <div class="SideBarWrapper text-light">
    <div class="SideBar d-flex align-items-center justify-content-center">
      <img src="@/assets/images/logo.png" />
      <h6 class="mb-0 badge fs-6" v-if="$store.getters.sideBarOpened">
        CMS管理中心
      </h6>
    </div>

    <el-scrollbar>
      <Menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import Menu from "./Menu.vue";
</script>

<style lang="scss" scoped>
.SideBarWrapper {
  width: 210px;
  height: 100%;
  position: fixed;
  transition: width 0.28s;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #304156;

  .SideBar {
    height: 65px;

    img {
      width: 44px;
      height: 44px;
      border-radius: 8px;
    }
  }
}
</style>
