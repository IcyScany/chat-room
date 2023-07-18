<template>
  <appcom-login></appcom-login>
</template>

<script lang='ts' setup>
import createStore from '../store'
import AppcomLogin from '../components/AppcomLogin.vue'

const store = createStore()
const app = store.app

const user1: User = {
  userId: '',
  username: 'myname3',
  password: '1234562',
  createTime: 0
}

app.set_user(user1)

</script>

<style>
</style>
