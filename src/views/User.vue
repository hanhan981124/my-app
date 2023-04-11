<template>
  <el-container>
    <el-header style="padding: 0;">
      <common-headeru />
    </el-header>
    <el-container>
      <el-aside style="width: 370px;">
        <common-asideu />
      </el-aside>
      <el-main style=" height: auto;">
        <el-card style="margin: 10px"> 
        <el-row style="height: 60px;font-size: 24px;">
          <el-col :span="12">知识卡片</el-col>
          <el-col :span="12">
            <el-input class="input" v-model="input"  placeholder="请输入病情" style="width: 300px;"></el-input>
            <el-button type="primary" icon="el-icon-search" circle @click="search" style="margin-left: 10px;"></el-button>
          </el-col>
        </el-row> 
          
        <el-row>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in list" :key="index">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card1">
                      <div slot="header" class="clearfix1">
                        <span style="font-size: 20px;">{{ item.title1 }}</span>
                      </div>
                      <div style="height:300px;max-height: 300px;overflow: auto; font-size: 15px;">
                        {{ item.content1 }}
                      </div>
                    </el-card>
                    <el-card class="box-card1">
                      <div slot="header" class="clearfix1">
                        <span style="font-size: 20px;">{{ item.title1 }}</span>
                      </div>
                      <div style="height:300px;max-height: 300px;overflow: auto; font-size: 15px;">
                        {{ item.content1 }}
                      </div>
                      <el-divider direction="horizontal" style="color:black;"></el-divider>
                      <div style="height:300px;max-height: 300px;overflow: auto; font-size: 15px;">
                        {{ item.content1 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card2">
                      <div slot="header" class="clearfix1">
                        <span style="font-size: 20px;">{{ item.title2 }}</span>
                      </div>
                      <div style="height:400px;max-height: 400px;overflow: auto; font-size: 15px;">
                        {{ item.content2 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card3">
                      <div slot="header" class="clearfix1">
                        <span style="font-size: 20px;">{{ item.title2 }}</span>
                      </div>
                      <div style="height:400px;max-height: 400px;overflow: auto; font-size: 15px;">
                        {{ item.content2 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card4">
                      <div slot="header" class="clearfix1">
                        <span style="font-size: 20px;">{{ item.title2 }}</span>
                      </div>
                      <div style="height:400px;max-height: 400px;overflow: auto; font-size: 15px;">
                        {{ item.content2 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        
        </el-row>
      </el-card>
      <el-card style="margin: 10px">
        <el-row style="height: 60px;font-size: 24px;">
          <el-col :span="12">健康档案</el-col>
          <el-col :span="12">
              <span style="font-size: 16px;">状态评估：</span>
              <el-button type="success" circle size="middle" ></el-button>
              <el-button type="success" circle size="middle" ></el-button>
              <el-button type="danger" circle size="middle" ></el-button>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px;">
            <div ref="echarts3" style="height: 260px"></div>
            <h3>评估建议：</h3>
            <p style="color: black;font-size: 14px;">1.您今日xxx病症状良好,应注意运动与清淡饮食。</p>
            <p style="color: black;font-size: 14px;">2.您今日xxx病症状良好,应注意运动与清淡饮食。</p>
            <p style="color: black;font-size: 14px;">3.您今日xxx病症状良好,应注意运动与清淡饮食。</p>
          </el-row>
      </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>


<script >
import CommonAsideu from '../components/CommonAsideu.vue'
import CommonHeaderu from '../components/CommonHeaderu.vue'
import * as echarts from 'echarts'

export default {
  data() {
    return {
      input: '',
      list: [
        {
          title1: '生活',
          content1: '慢性病是慢性非传染性疾病的简称，是对一类起病隐匿全被确认疾病的概括性总称。主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。',
          title2: '食谱',
          content2: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。'
        },
        {
          title1: '保健',
          content1: '慢性病是慢性非传染性疾未完全被确认疾病的概括性总称。引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂或尚未明确，但多数疾病却是可以预防和控制的。慢性病在人群中发病率、致残率和死亡率力人口显得尤为重要。',
          title2: '医疗',
          content2: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。'
        }

      ],
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
  },
  components: {
    CommonAsideu,
    CommonHeaderu
  },
  mounted() {

    const echarts3 = echarts.init(this.$refs.echarts3)
    const echarts3Option = {
      title: {
        text: '我的健康数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['血压', '血糖', '心率', 'Direct']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '血压',
          type: 'line',
          stack: 'Total',
          data: [220, 132, 281, 134, 190, 230, 260]
        },
        {
          name: '血糖',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 230, 210]
        },
        {
          name: '心率',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 270, 222]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [120, 232, 101, 234, 190, 230, 180]
        }
      ]
    }
    echarts3.setOption(echarts3Option)

  }

}

</script>
<style scoped>

.box-card1 {
  height: 300px;
  overflow: auto;
  background-color: bisque;
}
.box-card2 {
  height: 380px;
  overflow: auto;
  background-color: rgb(100, 224, 231);
}
.box-card3 {
  height: 380px;
  overflow: auto;
  background-color: rgb(241, 205, 238);
}
.box-card4 {
  height: 380px;
  overflow: auto;
  background-color: rgb(244, 248, 187);
}
.content {
  display: flex;
  justify-content: space-between;
}

.clearfix1 {
  height: 20px;
  font-size: 24px;
}

</style>
