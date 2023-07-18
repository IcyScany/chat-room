<template>
  <appcom-navigator />
  <div class="main-container">
    <router-view />
  </div>
</template>

<script lang='ts' setup>
import AppcomNavigator from '@/components/AppcomNavigator.vue'

</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.main-container {
  position: absolute;
  left: 70px;
}
</style>
