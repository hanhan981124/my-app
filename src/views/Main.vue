<template>
     <div>
          <el-container>
                <el-header style="height: 83px; padding: 0;">
                     <common-header />
                </el-header>
                <el-main>       
                     <router-view></router-view>
                </el-main>
                <el-footer>
                    <common-bottom />
                </el-footer>
                    
              </el-container>
          </div> 

</template>
<script>
import CommonHeader from '../components/CommonHeader.vue'
import CommonBottom from '../components/CommonBottom.vue'
export default{
    data(){
        return {}
    },
         components:{
             CommonHeader,
             CommonBottom
         }
}
</script>
<style>

 
</style>
