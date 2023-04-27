<template>
  <div>
<el-row  class="header-container">
  <el-col :span="8" class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="user"></el-button>
      
  </el-col>
  <el-col :span="8" class="l-content">
    <span style="text-align: center;color:#fff;font-size: 25px;">慢病患者智能健康助手</span>
  </el-col>
  <el-col :span="8"  class="r-content">
    <img src='../assets/images/1.webp' alt="" class="user">
    <el-divider direction="vertical"></el-divider>
    <span @click="question">调查问卷</span>
    <el-divider direction="vertical"></el-divider>
    <span>关于我们</span>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
 data(){
  return {
        input: '',
  }
 
 },
    methods: {
    user(){
      this.$router.push('/user')
    },
    question(){
      this.$router.push('/question')
    }
      
     
      
    
    },
    
  
}
</script>
<style lang="less" scoped>
.user{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 5px;
}
.right{
  margin-right: 0;
  text-align: right;
  height: 40px;
  }

.header-container {
  background-color: #78797a;
  height: 60px;
  width:auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 .input{
  width: 150px;
  height: 30px;
 }
  .r-content{
    text-align: right;
    .select{
  width: 40px;
  height: 20px;
  border-radius: 50%;
  }
}

</style>