import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
// import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import DocDemo from "./components/DocDemo.vue"
// 这里的demo可以试试路由懒加载

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
        {path: '', component: DocDemo},
        // {
        //   path:"",
        //   redirect:"ButtonDemo"
        // 被重定向到的路由可能需要加一个name:"ButtonDemo"
        // },
        {path: 'switch', component: () => import ("./components/SwitchDemo.vue") },
        {path: 'button', component: () => import("./components/ButtonDemo.vue") },
        {path: 'dialog', component: DialogDemo },
        {path: 'tabs', component: TabsDemo}
      ]
    },
  ],
});

// 路由切换后执行
router.afterEach(()=>{
  console.log("切换路由了");
  
})