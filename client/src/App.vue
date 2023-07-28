<template>
  <appcom-navigator />
  <div class="main">
    <router-view />
  </div>
</template>

<script lang='ts' setup>
import '@/style/index.scss'
import AppcomNavigator from '@/components/AppcomNavigator.vue'
import createStore from '@/store'

const app = createStore().app
app.getUser

</script>

<style>
</style>
