<template>
  <div class="LoginView">
    <canvas id="LoginViewCanvas" />

    <div class="LoginForm d-flex flex-column justify-content-center">
      <div class="container d-flex justify-content-center">
        <img class="LoginFormLogo me-2" src="@/assets/images/logo.png" />
        <h2 class="title text-center text-light mb-4">CMS管理中心</h2>
      </div>

      <el-form
        class="container d-flex flex-column align-items-center"
        ref="loginFormRef"
      >
        <el-form-item class="mb-4 w-75" prop="username">
          <el-input
            size="large"
            type="text"
            name="username"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          >
            <template #prefix>
              <i class="bi bi-person-fill"></i>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item class="mb-4 w-75" prop="password">
          <el-input
            size="large"
            :type="passwordType"
            name="password"
            placeholder="请输入用户密码"
            v-model="loginForm.password"
          >
            <template #prefix>
              <i class="bi bi-lock-fill"></i>
            </template>

            <template #suffix>
              <i
                :class="[
                  'bi',
                  passwordType === 'password'
                    ? 'bi-eye-slash-fill'
                    : 'bi-eye-fill',
                ]"
                style="cursor: pointer"
                @click="
                  passwordType =
                    passwordType === 'password' ? 'text' : 'password'
                "
              ></i>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item class="mb-4 w-75">
          <el-button
            class="w-100"
            size="large"
            type="primary"
            :loading="false"
            @click="handleLogin"
          >
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AnimationBg from "./config/animation";

const router = useRouter();

const loginForm = ref({
  username: "admin",
  password: "admin123",
});

const passwordType = ref("password");

const handleLogin = async () => {
  console.log("handleLogin");
  router.push({
    name: "LayoutView",
  });
};

onMounted(() => {
  AnimationBg();
  window.onresize = () => {
    AnimationBg();
  };
});
</script>

<style lang="scss" scoped>
.LoginView {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  #LoginViewCanvas {
    display: block;
  }

  .LoginFormLogo {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  .LoginForm {
    position: absolute;
    width: 500px;
    height: 400px;
    left: 50%;
    top: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);

    :deep(.el-form-item) {
      color: #ffffff;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    :deep(.el-input__wrapper) {
      background: none;
      box-shadow: none;
      --el-select-input-focus-border-color: none !important;

      input {
        color: #cccccc;
        caret-color: #ffffff;
      }
    }
  }
}
</style>
