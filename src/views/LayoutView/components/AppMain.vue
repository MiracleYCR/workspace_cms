<template>
  <div class="AppMain">
    <div class="AppMainContent">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.AppMain {
  width: 100%;
  height: calc(100vh - 40px);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 112px 20px 15px 20px;

  .AppMainContent {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-right: 10px;
    box-sizing: border-box;
  }
}
</style>
