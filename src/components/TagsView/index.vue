<template>
  <div class="tags-view-container">
    <router-link
      v-for="(item, index) in $store.getters.tagsViewList"
      :key="item.fullPath"
      class="tags-view-item"
      :class="isActive(item) ? 'active' : ''"
      :to="{ path: item.fullPath }"
      :style="{
        backgroundColor: isActive(item) ? '#304156' : '',
        borderColor: isActive(item) ? '#304156' : '',
      }"
      @contextmenu.prevent="onOpenMenu($event, index)"
      >{{ item.title }}
      <SvgIcon
        class="el-icon-close"
        icon="close"
        v-show="!isActive(item)"
        @click.prevent.stop="onClose(index)"
      />
    </router-link>

    <TagsMenu
      v-show="menuVisible"
      :style="menuStyle"
      :index="selectMenuIndex"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TagsMenu from "./tagsMenu.vue";

const store = useStore();
const route = useRoute();

const isActive = (tag) => {
  return tag.path === route.path;
};

const menuVisible = ref(false);
const menuStyle = ref({
  left: 0,
  top: 0,
});
const selectMenuIndex = ref(0);
const onOpenMenu = (e, index) => {
  const { x, y } = e;
  menuStyle.value.left = `${x}px`;
  menuStyle.value.top = `${y}px`;
  selectMenuIndex.value = index;
  menuVisible.value = true;
};

const onClose = (index) => {
  store.commit("app/removeTagsView", {
    type: "index",
    index,
  });
};

const closeMenu = () => {
  menuVisible.value = false;
};

watch(menuVisible, (val) => {
  if (val) {
    document.body.addEventListener("click", closeMenu);
  } else {
    document.body.removeEventListener("click", closeMenu);
  }
});
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 45px;
  line-height: 45px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    border-radius: 5px;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .el-icon-close {
      width: 1em;
      height: 1em;
      margin-left: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
