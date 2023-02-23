<template>
  <div
    class="LayoutView"
    :class="[$store.getters.sideBarOpened ? 'OpenSideBar' : 'HideSideBar']"
  >
    <SideBar class="SideBarComp" />

    <div class="LayoutViewWrapper">
      <div class="LayoutViewHeader">
        <NavBar />
        <TagsViewComp />
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
import TagsViewComp from "@/components/TagsView/index.vue";
</script>

<style lang="scss" scoped>
.LayoutView {
  position: relative;
  width: 100%;
  height: 100%;

  .LayoutViewHeader {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: calc(100% - 210px);
    transition: width 0.28s;
  }
  .HideSideBar .LayoutViewHeader {
    width: calc(100% - 60px);
  }

  .LayoutViewWrapper {
    min-height: 100%;
    margin-left: 210px;
    transition: margin-left 0.28s;
    position: relative;
  }
}
</style>
