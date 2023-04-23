const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint校验,
  publicPath:'./'
})

// const is_server = false
// const local_id = "127.0.0.1"
// const server_ip = "xxx.xxx.xxx.xxx"
// const shijieip = "jkjldsfjlksjflsk"