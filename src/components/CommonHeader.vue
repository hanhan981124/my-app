<template>
  <div>
    <el-row class="header" style="padding: 0;">
      <el-col :span="12">
        <div class="logo">LOGO</div>
      </el-col>
      <el-col :span="12">
        <div class="right">
          <span>登录</span>
          <el-divider direction="vertical"></el-divider>
          <span>用户注册</span>
          <el-divider direction="vertical"></el-divider>
          <span>关于我们</span>
        </div>
      </el-col>
    </el-row>
    <el-row class="header-container">
      <el-col :span="12" class="l-content">
        <el-button icon="el-icon-menu" size="mini" @click="home"></el-button>
      </el-col>
      <el-col :span="12" class="r-content">
        <div>
            <el-input class="input" v-model="input"  placeholder="请输入病情"></el-input>
            <el-button type="primary" icon="el-icon-search" circle @click="disease" style="margin-left: 10px;"></el-button>
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
    disease() {
      if (this.input==''){
        this.$message('请输入内容')
      }else{
        this.$router.push({
          path: '/disease',
          query:{
           input:this.input
          }
      })
    }
    },
   
  },
}

</script>
<style lang="less" scoped>
.header {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  margin-left: 30px;
  color: brown;
  size: 20px;
}
.input{
  height: 30px;
  width: 150px;
}
.right {
  margin-right: 0;
  text-align: right;
}

.header-container {
  padding: 0 5px;
  background-color: #2570bf;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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