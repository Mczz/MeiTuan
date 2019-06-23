<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      北京
      <router-link class="change-city" to="{name:'changeCity'}">切换城市</router-link>
      [
        <a href="#" class="city">大广回族自治县</a>&nbsp;
        <a href="#" class="city">廊坊</a>&nbsp;
        <a href="#" class="city">固安</a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" to="{name:'login'}">立即登录</router-link>
      <router-link class="register" to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>