<template>
  <div class="menu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">折叠</el-radio-button>
    </el-radio-group>
    <el-menu
      :default-active="onRoute"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/home">
        <el-icon><location /></el-icon>
        <template #title>聊天室</template>
      </el-menu-item>
  
      <el-menu-item index="/login">
        <el-icon><icon-menu /></el-icon>
        <template #title>菜单二</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>菜单三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>菜单四</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Document, Menu as IconMenu, Location, Setting, } from '@element-plus/icons-vue'

const isCollapse = ref(true)

const route = useRoute()
const onRoute = computed(() => {
  return route.path
})

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
}

.menu {
  position: absolute;
}
</style>
