<template>
  <div>
    <div class="topnav">
      <div class="logo" @click="toggleMenu">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  //App.vue里用了provide 这里用了inject 并声明了类型为Ref
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  // 解决doc页面里aside固定定位遮挡Topnav的问题
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    //0-500px 隐藏menu
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>