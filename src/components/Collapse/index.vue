<template>
  <div class="CollapseComp" @click="onTriggerCollapse">
    <i
      :class="[
        'bi',
        'fs-5',
        'bi-distribute-vertical',
        $store.getters.sideBarOpened ? 'CollapseClose' : 'CollapseOpen',
      ]"
    ></i>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const onTriggerCollapse = () => {
  store.commit("app/triggerSideBarOpened");
};
</script>

<style lang="scss" scoped>
.CollapseComp {
  padding: 0 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  .CollapseOpen {
    transform: rotate(-90deg);
    transition: all 0.28s;
  }
  .CollapseClose {
    transform: rotate(0deg);
    transition: all 0.28s;
  }
}
</style>
