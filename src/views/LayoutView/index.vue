<template>
  <div class="LayoutView">
    <SideBar />

    <div class="LayoutViewContent">
      <div class="">
        <NavBar />
      </div>

      <AppMain />

      <FooterBar />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import AppMain from "./components/AppMain.vue";
import FooterBar from "./components/FooterBar.vue";
import SideBar from "./components/SideBar/index.vue";
</script>

<style lang="scss" scoped>
.LayoutView {
  position: relative;
  width: 100%;
  height: 100%;

  .LayoutViewContent {
    min-height: 100%;
    margin-left: 210px;
    transition: margin-left 0.28s;
    position: relative;
  }
}
</style>
