import { createApp } from "vue";
import router from "./router";
import store from "./store";

import App from "./App.vue";
import installElementPlus from "@/plugins/elementPlus";

import "@/assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

installElementPlus(app);

app.use(store).use(router).mount("#app");
