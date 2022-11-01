<template>
  <router-view />
</template>

<script lang='ts'>
import { ref, provide } from "vue";
import { router } from './router';

export default {
  name: "App",
  //控制aside的隐藏和显示 provide和inject
  setup() {
    // 手机端和pc端要不一样的值  pc端不需要切换aside 值也就永远是true
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    // 任何人使用menuVisible只需要提供xxx这个名字
    provide("menuVisible", menuVisible);
    router.afterEach(()=> {
      // 路由切换后手机端直接隐藏Doc的侧边栏
      if( width <= 500 ) {
        menuVisible.value = false;
      }
    })
  },
};
</script>
