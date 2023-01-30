import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Intro from "./views/Intro.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children:[
        {path: '', redirect: '/doc/Intro'},
        // {
        //   path:"",
        //   redirect:"ButtonDemo"
        // 被重定向到的路由可能需要加一个name:"ButtonDemo"
        // },
        {path: 'intro', component: () => import ("./views/Intro.vue")},
        {path: 'get-start', component: () => import("./views/GetStart.vue")},
        {path: 'install', component: () => import("./views/install.vue")},
        {path: 'switch', component: () => import ("./components/SwitchDemo.vue") },
        {path: 'button', component: () => import("./components/ButtonDemo.vue") },
        {path: 'dialog',  component: () => import("./components/DialogDemo.vue") },
        {path: 'tabs',  component: () => import("./components/TabsDemo.vue") },

      ]
    },
  ],
});

// 路由切换后执行
router.afterEach(()=>{
  console.log("切换路由了");
  
})