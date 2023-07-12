<template>
  <div class="common-layout">
    <el-tabs class="demo-tabs">
      <el-tab-pane label="登录" name="first"></el-tab-pane>
      <el-tab-pane label="注册" name="second"></el-tab-pane>
    </el-tabs>

    <el-form
      label-position="right"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>

<style>
.common-layout {
  width: 500px;
  border: 1px solid black;
}

.demo-tabs {
  width: 100px;
  margin: 0 auto;
}
</style>