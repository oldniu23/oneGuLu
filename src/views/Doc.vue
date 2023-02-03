<template>
  <div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始使用</router-link>
          </li>

        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  //App.vue里用了provide 这里用了inject 并声明了类型为Ref
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
  components: {
    Topnav,
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 21;
    }
  > .content {
    flex-grow: 1;
    padding-top: 10px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
      padding-top: 50px;
    }
  }
}

::v-deep .nav { 
  @media (min-width: 500px) {
    > .topnav {
      ul {
        display: none
      }
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #f5f5f5;
  width: 150px;
  padding: 70px 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  > h2 {
    margin-bottom: 4px;
    padding: 0 20px;
  }
  > ol {
    > li {
      position: relative;
      > a {
        display: block;
        padding: 7px 20px;
        text-decoration: none;
      }
      .router-link-active {
        // 路由高亮
        background: white;
      }
      @media (min-width: 501px) {
        // 高亮路由右侧黑线
        .router-link-active::after {
          content: '';
          display: block;
          clear: both;
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          border-right: 2px solid black;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>