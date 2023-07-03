<template>
  <router-view></router-view>
</template>

<script lang='ts' setup>
import createStore from './store'
import { register } from './api'
// import { storeToRefs } from 'pinia'

const store = createStore()
const app = store.app

const user1: User = {
  userId: '',
  username: 'myname3',
  password: '1234562',
  createTime: new Date().valueOf()
}

register(user1).then((res) => {
  console.log(res)
})

app.set_user(user1)
</script>

<style>
</style>
