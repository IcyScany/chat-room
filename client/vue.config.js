// const Host = 'http://localhost:4000'
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 1997,
    // proxy: {
    //   'socket.io': {
    //     target: Host,
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
})
