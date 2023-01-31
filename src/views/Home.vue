<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>①个轮子</h1>
        <h2>简单实用的UI框架</h2>
        <p class="actions">
          <a href="#">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <div class="descText">
            <h3><strong>基于 Vue 3</strong></h3>
              <p>使用了 Vue 3 Composition API</p>
          </div>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <div class="descText">
            <h3><strong>基于 TypeScript</strong></h3>
            <p>源代码采用 TypeScript 书写</p>
          </div>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <div class="descText">
            <h3><strong>代码易读</strong></h3>
            <p>每个组件的源代码都极其简洁</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};

</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #01635e;
.topnavAndBanner {
  // 使用cssgradient.io生成渐变色
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(183,233,230,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding: 0 16px ;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      > li{
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
      >ul {
        > li{
          width: 33.333%;
        }

    }
  }
    
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      margin: 16px 0;
      
      > svg {
        height: 64px;
        width: 64px;
      }
      > .descText {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:  flex-start;
        flex-wrap: nowrap;
        white-space: nowrap;
        padding-left: 12px;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>