<template>
  <div class="chat-div">
    <span 
      v-for="(item,idx) in messageList" :key="idx"
      :class="{'chat-send':item.type,'chat-receive':!item.type}"
    >
    {{ item.data }}
    </span>
  </div>
  <div class="chat-input">
    <textarea v-model="inputMessage"></textarea>
    <button @click="send">send</button>
  </div>
</template>

<script setup lang="ts">
import io from 'socket.io-client'
import {ref} from 'vue'

const client = io('http://127.0.0.1:4000').connect()

const messageList = [{
  type: 1,
  data: '123'
}]
client.on('message', (res: string) => {
  console.log(res)
  messageList.push({type: 0, data: res})
})

const inputMessage = ref('')
const send = () => {
  messageList.push({type: 1, data: inputMessage.value})
  client.emit('message', inputMessage.value)
}
</script>

<style scoped>
.chat-div {
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  overflow: auto;
}

.chat-input {
  width: 500px;
  display: flex;
}

textarea {
    flex-grow: 1;
  }

.chat-send {
  text-align: right;
}

.chat-receive {
  text-align: left;
}
</style>