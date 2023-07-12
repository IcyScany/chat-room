<template>
  <menu-com />
  <div class="content">
    <router-view></router-view>

  </div>
</template>

<script lang='ts' setup>
import menuCom from '@/components/menuCom.vue'
</script>

<style>
.content {
  position: absolute;
  left: 200px;
  top: 100px;
}
</style>
