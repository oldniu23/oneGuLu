<template>
  <div>
    <div class="topnav">
      <router-link to="/" class="logo" title="首页">
        <!-- LOGO -->
        <svg class="icon" >
          <use xlink:href="#icon-lunzi"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
      <svg class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
        <use xlink:href="#icon-caidan">
        </use>
      </svg>
    </div>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
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
  $color: #01635e;

.topnav {
  color: $color;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  // 解决doc页面里aside固定定位遮挡Topnav的问题
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    //0-500px 隐藏menu
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>