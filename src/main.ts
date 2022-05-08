//main.js是入口文件

import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Niu from "./components/Niu.vue";
import Niu2 from "./components/Niu2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Niu,
    },
    {
      path: "/xxx",
      component: Niu2,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
