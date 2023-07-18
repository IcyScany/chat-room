<template>
  <div class="common-layout">
    <el-tabs class="demo-tabs">
      <el-tab-pane label="登录" name="login"></el-tab-pane>
      <el-tab-pane label="注册" name="register"></el-tab-pane>
    </el-tabs>

    <el-form
      label-position="right"
      label-width="100px"
      :model="user"
      style="max-width: 460px"
    >
      <el-form-item label="账号">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// import { register, login } from '../api'

const user: User = reactive({
  userId: '',
  username: '',
  password: '',
  createTime: 0
})

// register(user1).then((res) => {
//   console.log(res)
// })
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