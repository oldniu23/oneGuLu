import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Intro from "./views/Intro.vue"
import GetStart from "./views/GetStart.vue"
import Install from "./views/Install.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"

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
        {path: '', redirect: '/doc/intro'},
        // {path: 'intro', component: () => import ("./views/Intro.vue")},
        {path: 'intro', component: Intro},
        {path: 'get-start', component: GetStart},
        {path: 'install', component: Install},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog',  component: DialogDemo},
        {path: 'tabs',  component: TabsDemo},

      ]
    },
  ],
});

// 路由切换后执行
router.afterEach(()=>{
  // console.log("切换路由了");
  
})