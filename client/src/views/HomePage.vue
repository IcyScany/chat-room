<template>
  <div class="chat-div">
    <span >
    {{ receiveMessage }}
    </span>
  </div>
  <div class="chat-input">
    <textarea v-model="inputMessage"></textarea>
    <button @click="send">send</button>
  </div>
</template>

<script setup lang="ts">
import io from 'socket.io-client'
import { ref } from 'vue'

const client = io('http://127.0.0.1:4000?userId=1', { reconnection: true }).connect()

const inputMessage = ref('')
const receiveMessage = ref('')

client.on('message', (res) => {
  console.log(res._value)
  receiveMessage.value = res._value
})

const send = () => {
  client.emit('message', inputMessage)
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