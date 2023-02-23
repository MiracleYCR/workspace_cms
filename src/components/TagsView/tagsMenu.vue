<template>
  <div class="tagsMenu-container">
    <li @click="onRefresh">刷新</li>
    <li @click="onCloseRight">关闭右边</li>
    <li @click="onCloseOther">关闭其他</li>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const store = useStore();
const router = useRouter();

const onRefresh = () => {
  router.go(0);
};
const onCloseRight = () => {
  store.commit("app/removeTagsView", {
    type: "right",
    index: props.index,
  });
};
const onCloseOther = () => {
  store.commit("app/removeTagsView", {
    type: "other",
    index: props.index,
  });
};
</script>

<style lang="scss" scoped>
.tagsMenu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    height: 35px;
    line-height: 35px;
    margin: 0;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
