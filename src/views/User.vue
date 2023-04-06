<template>
  <el-container>
    <el-header style="height: 100px;">
      <common-headeru />
    </el-header>
    <el-container>
      <el-aside style="width: 300px;">
        <common-asideu />
      </el-aside>
      <el-main style="margin-left: 20px; margin-bottom: 0;height: auto;">
        <el-row>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item, index) in list" :key="index">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>{{ item.title1 }}</span>
                      </div>
                      <div style="height:150px;max-height: 150px;overflow: auto;">
                        {{ item.content1 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>{{ item.title2 }}</span>
                      </div>
                      <div style="height:150px;max-height: 150px;overflow: auto;">
                        {{ item.content2 }}
                      </div>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </el-row>
        <el-row style="margin: 10px;">
          <div class="content">
            <span class="clearfix">健康档案</span>
            <span style="padding-right: 50px;">
              <el-button type="success" circle size="mini"></el-button>
              <el-button type="success" circle size="mini"></el-button>
              <el-button type="danger" circle size="mini"></el-button>
            </span>
          </div>
        </el-row>
        <el-row>
          <el-card style="margin: 0 auto;text-align: center;">
            <img src="../assets/images/graph1.jpg" alt="" style="width: 90%;">
          </el-card>
        </el-row>
        <el-row :gutter="20" class="chart" style="height:300px; margin-right: 0px;padding: 0px;margin: 10px 0; ">
          <el-col :span="12" style="padding: 0;">
            <el-card style="height:290px">
              <img src="../assets/images/graph2.jpg" alt="" style="height:290px;width: 100%;">
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card style="height:290px;">
              <div ref="echarts3" style="height: 290px"></div>
            </el-card>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </el-container>
</template>


<script >
import CommonAsideu from '../components/CommonAsideu.vue'
import CommonHeaderu from '../components/CommonHeaderu.vue'
import * as echarts from 'echarts'

export default {
  methods: {


  },
  data() {
    return {
      state1: '',
      list: [
        {
          title1: '生活',
          content1: '慢性病是慢性非传染性疾病的简称，是对一类起病隐匿、病程长且病情迁延不愈、病因复杂，有些尚未完全被确认疾病的概括性总称。主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂或尚未明确，但多数疾病却是可以预防和控制的。慢性病在人群中发病率、致残率和死亡率高，严重耗费社会资源，危害劳动力人口的健康，因此对慢性病的防治显得尤为重要。',
          title2: '食谱',
          content2: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。'
        },
        {
          title1: '保健',
          content1: '慢性病是慢性非传染性疾病的简称，是对一类起病隐匿、病程长且病情迁延不愈、病因复杂，有些尚未完全被确认疾病的概括性总称。主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂或尚未明确，但多数疾病却是可以预防和控制的。慢性病在人群中发病率、致残率和死亡率高，严重耗费社会资源，危害劳动力人口的健康，因此对慢性病的防治显得尤为重要。',
          title2: '医疗',
          content2: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。'
        }

      ],
    }
  },
  components: {
    CommonAsideu,
    CommonHeaderu
  },
  mounted() {

    const echarts3 = echarts.init(this.$refs.echarts3)
    const echarts3Option = {
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 300, 150, 260, 320],
          type: 'line'
        }
      ]
    }
    echarts3.setOption(echarts3Option)



  }

}

</script>
<style scoped>
.el-header {
  padding: 0;
}

.el-aside {
  border-right: 1px solid #c6bebe;
}

.row1 {
  padding-left: 20px;
}

.box-card {
  height: 280px;
  width: 460px;
  overflow: auto;
}

.content {
  display: flex;
  justify-content: space-between;
}

.clearfix {
  height: 20px;
  font-size: 24px;
}

.chart {
  padding-left: 20px;

}</style>
