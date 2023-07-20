<template>
  <div class="friendAdd-component" :class="{'wrap-component': isWrap}">
    <div class="search-box">
      <input class="search-input" placeholder="搜索用户">
      <el-icon :size="22"><Search /></el-icon>
    </div>

    <!-- 展开 -->
    <button class="wrap-button" :class="{'wrap-button': isWrap}" @click="isWrap = !isWrap">
      <el-icon :size="15"><DArrowLeft /></el-icon>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Search, DArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isWrap = ref(false)
</script>

<style scoped lang="scss">
.friendAdd-component {
  position: relative;
  width: 260px;
  height: 100%;
  text-align: center;
  transition: all ease 0.5s;

  .search-box {
    display: flex;
    align-items: center;
    .search-input {
      width: 80%;
    }
    .el-icon {
      line-height: 30px;
    }
  }
  .wrap-button {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 50%;
    width: 16px;
    height: 40px;
    border-radius: 4px 0 0 4px;
  }
}

.wrap-component {
  width: 0;

  .search-box {
    display: none;
  }

  .wrap-button {
    right: -16px;
    transform: scaleX(-1);
  }
}
</style>
