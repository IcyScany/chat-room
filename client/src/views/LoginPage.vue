<template>
    <login-tab></login-tab>
</template>

<script lang='ts' setup>
import createStore from '../store'
import loginTab from '@/components/loginTab.vue'
import { register } from '../api'

const store = createStore()
const app = store.app

const user1: User = {
  userId: '',
  username: 'myname3',
  password: '1234562',
  createTime: new Date().valueOf()
}

// register(user1).then((res) => {
//   console.log(res)
// })

app.set_user(user1)
</script>

<style>
</style>
