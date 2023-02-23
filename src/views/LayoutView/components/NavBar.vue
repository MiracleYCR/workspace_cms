<template>
  <div class="NavBar">
    <CollapseComp class="CollapseCompWrapper" />
    <BreadCrumbComp class="BreadCrumbCompWrapper" />

    <div class="NavBarMenus">
      <ScreenFullComp class="NavBarMenusItem hoverEffect" />

      <el-dropdown class="AvatarWrapper" trigger="click">
        <img src="@/assets/images/logo.png" />
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item>
              <i class="bi bi-house-fill"></i>
              网站主页
            </el-dropdown-item>
            <el-dropdown-item divided>
              <i class="bi bi-credit-card-fill"></i>
              修改密码
            </el-dropdown-item>
            <el-dropdown-item divided @click="onLogout">
              <i class="bi bi-box-fill"></i>
              退出登陆
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import CollapseComp from "@/components/Collapse/index.vue";
import BreadCrumbComp from "@/components/BreadCrumb/index.vue";
import ScreenFullComp from "@/components/ScreenFull/index.vue";
</script>

<style lang="scss" scoped>
.NavBar {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .CollapseCompWrapper {
    height: 100%;
    float: left;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .BreadCrumbCompWrapper {
    float: left;
  }

  .NavBarMenus {
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
    padding-right: 20px;

    .NavBarMenusItem {
      display: inline-block;
      padding: 0 20px 0 0;
      font-size: 24px;
      color: #5a5e66;
      &.hoverEffect {
        cursor: pointer;
      }
    }

    .AvatarWrapper {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
