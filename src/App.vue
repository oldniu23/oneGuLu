<template>
  <div>
    导航栏
    <br />
    <router-link to="/"> 牛1 </router-link>
    <router-link to="/xxx"> 牛2 </router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
