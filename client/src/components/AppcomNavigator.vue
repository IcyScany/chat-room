<template>
  <div class="nav-component">
    <!-- 1. 头像 -->
    <div class="avatar"></div>

    <!-- 2. 导航栏 -->
    <div class="nav-group">
      <el-icon 
        v-for="(item, index) in pages"
        @click="toPage(item.path)"
        :style="{ color: route.path === item.path ? 'rgb(0, 174, 0)': '' }"
        :key="index"
        :size="24"
      >
        <component :is="item.icon"></component>
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ChatRound, User, SwitchButton } from '@element-plus/icons-vue'
import router from '@/router'

const route = useRoute()

const pages = [
  { path: '/chat', icon: ChatRound },
  { path: '/friend', icon: User },
  { path: '/login', icon: SwitchButton },
]

const toPage = (path: string) => {
  router.push(path)
}

</script>

<style scoped lang="scss">
.nav-component {
  position: absolute;
  width: 70px;
  height: 100%;
  background-color: rgb(41, 41, 41);

  .avatar {
    width: 50px;
    height: 50px;
    margin: 30px auto;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
  }

  .nav-group {
    width: 24px;
    margin: 0 auto;

    .el-icon {
      margin: 20px 0;
      color: rgb(190, 190, 190);

      &:last-child {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 12px);
      }
    }
  }

}
</style>
