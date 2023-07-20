<template>
  <div class="friend-container">
    <appcom-friend-add></appcom-friend-add>
    <appcom-friend-list></appcom-friend-list>
  </div>
</template>

<script lang="ts" setup>
import AppcomFriendAdd from '@/components/AppcomFriendAdd.vue'
import AppcomFriendList from '@/components/AppcomFriendList.vue'
</script>

<style lang="scss" scoped>
.friend-container {
  display: flex;
  height: 100%;
}
</style>
