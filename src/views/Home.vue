<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>轮子UI</h1>
      <h2>一个不太好用的UI框架</h2>
      <p class="actions">
        <a href="#">Github</a>
        <a href="#">开始</a>
      </p>
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
</style>