<template>
  <router-view></router-view>
</template>

<script lang='ts' setup>
import createStore from '@/store'
import appActions from './store/app/actions'
// import { storeToRefs } from 'pinia'

const store = createStore()
const app = store.app

const user1: User = {
  userId: '123'
}

appActions.set_user(user1)

console.log(app.user.userId)

console.log(app.get_user)
</script>

<style>
</style>
