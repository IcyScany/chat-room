<template>
  <div class="friendList-component">
    <div class="friend-list">friend-list</div>
    <div class="friend-info">friend-info</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.friendList-component {
  flex: 1;
  display: flex;
  height: 100%;
  padding-left: 16px;
  background-color: rgba(198, 198, 198, 0.466);

  .friend-list {
    width: 320px;
  }

  .friend-info {
    flex: 1;
    background-color: white;
  }
}
</style>
