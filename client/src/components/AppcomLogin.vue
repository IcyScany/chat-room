<template>
  <div class="login-component" visable.sync="false">
    <div class="title">ChatRoom 聊天室</div>

    <!-- 表单 -->
    <div class="user-form">
      <input class="form-item" placeholder="账号" v-model="user.username"/>
      <input class="form-item" placeholder="密码" type="password"  v-model="user.password"/>
    </div>

    <button class="login-button" @click="handleRequest">
      {{apiType[0].label}}&nbsp;
      <CircleCheck style="width: 20px;"/>
    </button>

    <div class="login-footer">
      <div @click="exchangeType">{{ apiType[1].label}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { CircleCheck } from '@element-plus/icons-vue'
import { register, login } from '../api'
import { requestReturn } from '@/utils/common'
import createStore from '@/store'
import router from '@/router'
import { ElMessage } from 'element-plus'

// 1. 定义数据
const app = createStore().app

const apiType = reactive([
  { label: '登录', fun: login },
  { label: '注册', fun: register }
])

const user: User = reactive({
  userId: '',
  username: '',
  password: '',
  createTime: 0
})

// 2. 函数定义
const exchangeType = () => {
  [apiType[0], apiType[1]] = [apiType[1], apiType[0]]
}

const handleRequest = async () => {
  if (!user.username || !user.password) return ElMessage.error('账号及密码不能为空！')

  const res = await apiType[0].fun(user)
  const data = requestReturn(res)
  if (data) {
    app.set_user(data.user)
    app.set_token(data.token)
    router.push('/chat')
  }
}
</script>

<style>
.login-component {
  position: relative;
  top: 30%;
  left: -70px;
  width: 420px;
  height: 240px;
  padding: 20px 0;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: var(--el-box-shadow);

  .title {
    width: fit-content;
    margin: 8px auto;
    color: rgb(46, 46, 46);
    font-size: 22px;
    font-weight: 600;
  }

  .form-item {
    margin: 10px 0;
    color: rgb(47, 47, 47);
  }

  .login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: calc(50% - 150px);
    width:300px;
    margin-top: 20px;
    color: white;
    background-color: rgb(28, 150, 136);

    &:hover {
      opacity: 0.85;
    }
  }

  .login-footer {
    position: absolute;
    bottom: 15px;
    right: 35px;
    font-size: 14px;
    color: rgb(80, 80, 80);
    cursor: pointer;
  }
}

</style>