import axios from "axios";
import store from "@/store";
import { ElMessage } from "element-plus";
import { isCheckTimeout } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
});

service.defaults.withCredentials = true;

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch("user/logout");
        return Promise.reject(new Error("token 失效"));
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }

    config.headers["Accept-Language"] = store.getters.lang;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data;
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch("user/logout");
    }
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
