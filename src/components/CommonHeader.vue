<template>
  <div>
    <el-row class="header-container">
      <el-col :span="8" class="l-content">
        <el-button icon="el-icon-menu" size="mini" @click="home"></el-button></el-col>
        <el-col :span="8">
        <span style="text-align: center; color:#fff;font-size: 24px;">慢病患者智能健康助手 -- 欢迎使用</span>
      </el-col>
      <el-col :span="8" class="r-content">
        <div>
          <span>登录</span>
          <el-divider direction="vertical"></el-divider>
          <span>用户注册</span>
          <el-divider direction="vertical"></el-divider>
          <span>关于我们</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:''
    }
  },
  methods: {
    home() {
      this.$router.push('/home')
    },
   
   
  },
}

</script>
<style lang="less" scoped>
.input{
  height: 30px;
  width: 150px;
}
.right {
  margin-right: 0;
  text-align: right;
}

.header-container {
  background-color: #2570bf;
  height: 60px;
  width:auto;
  display: flex;
  align-items: center;
}

.r-content {
  text-align: right;

  .select {
    width: 40px;
    height: 20px;
    border-radius: 50%;
  }
}</style>