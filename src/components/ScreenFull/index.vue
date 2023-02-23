<template>
  <div @click="onTriggerScreenFull">
    <i
      :class="[
        'bi',
        'fs-5',
        isFullScreen ? 'bi-fullscreen-exit' : 'bi-fullscreen',
      ]"
    ></i>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import screenfull from "screenfull";

// 是否全屏
const isFullScreen = ref(false);

const onTriggerScreenFull = () => {
  screenfull.toggle();
};

const change = () => {
  isFullScreen.value = screenfull.isFullscreen;
};

onMounted(() => {
  screenfull.on("change", change);
});

onUnmounted(() => {
  screenfull.off("change", change);
});
</script>

<style lang="scss" scoped></style>
