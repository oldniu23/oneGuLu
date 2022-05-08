<template>
  <router-view />
</template>

<script lang='ts'>
import { ref, provide } from "vue";
export default {
  name: "App",
  //控制aside的隐藏和显示 provide和inject
  setup() {
    const menuVisible = ref(false);
    // 任何人使用menuVisible只需要提供xxx这个名字
    provide("xxx", menuVisible);
  },
};
</script>
