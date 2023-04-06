<template>
  <div>
  <el-row class="header">
  <el-col :span="12"><div class="logo" >LOGO</div></el-col>
  <el-col :span="12" ><div class="right"> 
    <img src='../assets/images/1.webp' alt="" class="user">
    <el-divider direction="vertical"></el-divider>
    <span>个人中心</span>
    <el-divider direction="vertical"></el-divider>
    <span>关于我们</span>
</div></el-col>
</el-row>
<el-row  class="header-container">
  <el-col :span="12" class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="user"></el-button>
  </el-col>
  <el-col :span="12"  class="r-content">
    <div>
      <span class="select">
        <el-input class="input" v-model="input"  placeholder="请输入病情">
         
        </el-input>
        <el-button type="primary" icon="el-icon-search" circle @click="search" style="margin-left: 10px;"></el-button>
      </span>
    </div>
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
      search(){
        if (this.input==''){
        this.$message('请输入内容')
      }else{
        this.$router.push({
          path: '/search',
          query:{
           input:this.input
          }
      })
    }

    },
    user(){
      this.$router.push('/user')
    },

      
     
      
    
    },
    
  
}
</script>
<style lang="less" scoped>
.header{
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.logo{
  margin-left: 30px;
  color: brown;
  size: 20px;
}
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
  padding: 0 5px;
  background-color: #2570bf;
  height: 50px;
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