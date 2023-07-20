<template>
  <div class="login-container">
    <div class="mask"></div>
    <appcom-login></appcom-login>
  </div>
</template>

<script lang='ts' setup>
import AppcomLogin from '../components/AppcomLogin.vue'

</script>

<style>

.login-container {
  position: relative;
  width: 100%;
  height: 100%;

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(218, 218, 218, 0.877);
    z-index: 0;
  }
}

</style>
