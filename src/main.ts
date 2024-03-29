// main.js是入口文件
// scss文件引用顺序不能乱
import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css"

const app = createApp(App);
app.use(router);
app.mount("#app");
