<template>
  <el-container>
    <el-header style="padding: 0;">
      <common-headeru />
    </el-header>
    <el-container>
      <el-aside style="width: 471px;">
        <common-asideu />
      </el-aside>
      <el-main>
        <el-card> 
        <el-row style="height: 60px;font-size: 24px;">
          <el-col :span="12">知识卡片</el-col>
          <el-col :span="12">
            <el-input class="input" v-model="name" id="name" name="name" placeholder="请输入病情" style="width:50%"></el-input> 
            <el-button type="primary" icon="el-icon-search" circle @click="queryLinks" ></el-button>
          </el-col>
        </el-row>    
        <el-row style="height: 300px;max-height: 300px;overflow: auto;">
          <el-col :span="6" >
          <el-row v-for="(item,index) in detaillife1" :key="index">
            <el-card class="box-card1" >
              <div slot="header" class="clearfix1">
                <p style="font-size: 15px; color: black;">{{ item.name }}</p>
              </div>
              <div style="font-size: 13px;">
                {{ item.all }}
              </div>
            </el-card>
          </el-row>
         
          
          <el-row>
            <el-card class="box-card1">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list1.title4 }}</span>
              </div>
              <div style=" font-size: 13px;">
                {{ list1.content4 }}
              </div>
            </el-card>
          </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
            <el-card class="box-card2" v-for="(item,index) in detailfood1" :key="index">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ item.name }}</span>
              </div>
              <div style="font-size: 13px;">
                {{ item.all }}
              </div>
            </el-card>
          </el-row>
          
         
          <el-row>
            <el-card class="box-card2">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list4.title1 }}</span>
              </div>
              <div style=" font-size: 13px;">
                {{ list4.content1 }}
              </div>
            </el-card>
          </el-row>
          </el-col>

          <el-col :span="6">
            <el-row>
            <el-card class="box-card3">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list2.title1 }}</span>
              </div>
              <div style="font-size: 13px;">
                {{ list2.content1 }}
              </div>
            </el-card>
          </el-row>
        
         
          <el-row>
            <el-card class="box-card3">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list2.title4 }}</span>
              </div>
              <div style=" font-size: 13px;">
                {{ list2.content4 }}
              </div>
            </el-card>
          </el-row>
          </el-col>

          <el-col :span="6">
            <el-row>
            <el-card class="box-card4">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list3.title1 }}</span>
              </div>
              <div style="font-size: 13px;">
                {{ list3.content1 }}
              </div>
            </el-card>
          </el-row>
          
          
           
          
          <el-row>
            <el-card class="box-card4">
              <div slot="header" class="clearfix1">
                <span style="font-size: 15px;">{{ list3.title4 }}</span>
              </div>
              <div style=" font-size: 13px;">
                {{ list3.content4 }}
              </div>
            </el-card>
          </el-row>

          </el-col>
        </el-row>
      </el-card>
      <el-card>
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
          <div id="button-container">
   
   <button class="blood-pressure" @click="showBloodPressure">血压</button>
   <button class="heart-rate" @click="showHeartRate">心率</button>
   <button class="blood-sugar" @click="showBloodSugar">血糖</button>
   <button class="ECG" @click="showECG">心电图</button>
 </div>
          <div class="container">
    <div id="chartDom" style="width:750px;height: 400px; margin-left: 50px; margin-top:20px;" class="column">
      <!-- 左侧内容 -->
    </div>
    <div class="column">
          <!-- 右侧内容 -->
          <div id="text-container">
            <!-- 绘制长方形 -->
            <div style="width: 320px; height: 280px; margin-top:120px;border: 1px solid black; display: flex; justify-content: auto; align-items: center;">
            <div style="font-size: 18px; width: 380px; height: 270px; margin-top:10px;overflow: hidden; text-align: left;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{text1}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{text2}}
            </div>
            </div>
      </div>
  </div>

  </div>
   

  
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
import axios from 'axios'

export default {
  data() {
    return {
      text1:'',// 初始文本内容为'Hello World!'
      text2:'',
      name: '',
      data:[],
      detailfood1:[],
      detaillife1:[],
      list1: {
        
          title1: '生活',
          content1:'',
          title2: '生活',
          content2: '慢性病是慢性非传染性疾病的简称，主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。',
          title3: '生活',
          content3: '慢性病是慢性非传染性疾病的简称，。主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。',
          title4: '生活',
          content4: '慢性病是慢性非传染性疾病的简称，主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。',
        },
    list2: {
          title1: '食谱',
          content1: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。',
          title2: '',
          content2: '',
          title3: '',
          content3: '',
          title4: '',
          content4: '',
    },
    list3: {
          title1: '膳食补充剂',
          content1: '慢性病是慢性非传染性疾未完全被确认疾病的概括性总称。引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂。慢性病在人群中发病率、致残率和死亡率力人口显得尤为重要。',
          title2: '',
          content2: '',
          title3: '',
          content3: '',
          title4: '',
          content4: '',
        },
    list4: {
          title1: '医疗',
          content1: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。',
          title2: '',
          content2: '',
          title3: '',
          content3: '',
          title4: '',
          content4: '',
      

    }
    }
  },
  methods: {
    queryLinks() {
      if (this.name==''){
        this.$message('请输入病情进行查询')
      }else{
      axios.post('http://10.5.83.135:8080/graph', JSON.stringify({name: this.name}), {
       headers: {'Content-Type': 'application/json'}
      }).then(response => {
        const foods = [];
        // 使用 Array.prototype.filter() 方法过滤出标签为“美食”的数据
        const filteredData1 = response.data.data.filter(item => item.labels === "meishi");
        // 将符合条件的数据存储到前端数组中
        filteredData1.forEach(item => {
          foods.push(item);
        });
         const detailfood=foods.map(item => ({ 
            name: item.name ,
            all:item.food_ingre,
         }));
         const life = [];
        // 使用 Array.prototype.filter() 方法过滤出标签为“美食”的数据
        const filteredData2 = response.data.data.filter(item => item.labels === "knowledge");
        // 将符合条件的数据存储到前端数组中
        filteredData2.forEach(item => {
          life.push(item);
        });
         const detaillife=life.map(item => ({ 
            name: item.name ,
            all:item.content,
         }));
         this.detailfood1=detailfood,
         this.detaillife1=detaillife,
        console.log(this.detailfood1)
        console.log(this.detaillife1)
        console.log(response.data)
}).catch(error => {
// 处理错误
console.error(error);
console.log("?????")
});
}
    },

    // 点击按钮，跳转血压
    showBloodPressure() {
          // axios.post('http://127.0.0.1:5000/bloodpre',{'name':this.page})
          // .then(res=>{
          //       this.text = res.data;  //返回数据显示到text
          //       console.log(res.data);// 返回的数据
          //       alert(this.text);  
          //   })
          //   .catch(err=>{
          //     this.text = 'error' + err;
          //   })

          this.text1='本周血压正常',
          this.text2='成年人的正常血压值范围收缩压 90~140  mmHg，舒张压 60~80 mmHg。对于严重的高血压患者，常常需要使用药物进行治疗，以控制血压并预防并发症的发生。可以通过适当的饮食、减轻体重、戒烟限酒、增加运动等方式改善生活方式，从而降低血压并防止高血压'
          this.option = {
          title: {text: '一周血压指标'},
          tooltip: {trigger: 'axis'},
          legend: {
              right:40,
              data: ['高血压','低血压']},
              grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
            formatter: '{value}mmHg '
            }
          },
          series: [
            {
              name: '高血压',
              type: 'line',
              data: [120, 121, 118, 140, 125, 110, 123],
              markPoint: {
                    data: [
                          { type: 'max', name: 'Max' },
                        ]
                 },
                 label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {fontSize: 10},
                },
              
            },
            {
             name: '低血压',
             type: 'line',
            data: [75,69, 89, 80, 90, 82, 99],
            markPoint: {
                    data: [
                          // { type: 'max', name: 'Max' },
                          { type: 'min', name: 'Min' }
                        ]
                 },
                 label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {fontSize: 10},
                },
          
           }
           
      ]
    };
         // 获取图表实例
        var chartInstance = echarts.getInstanceByDom(document.getElementById('chartDom'));
        
        chartInstance.clear();
        // 绘制图表
        chartInstance.setOption(this.option);
        // document.getElementById('chartDom').innerHTML = '';// 清空图表区域内的 HTML 内容
  },
       // 点击按钮，跳转心率
      showHeartRate() {
        this.text1='今日12:00心率值异常，心率值偏高',
        this.text2='成年人正常心率值范围是每分钟 60~100 次,对于一些患有心脏疾病或其他相关疾病的患者，需要调整其药物治疗以控制心率。'
          this.option ={
            title: {text: '心率：每60分钟测一次'},
            tooltip: {trigger: 'axis'},
            color:'rgb(127, 224, 182)',
            legend: {
              right:20,
              data: ['心率']},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              
              data: ['8:00 ', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00','19:00','20:00']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
            formatter: '{value}min/次'
            }
            },
            series: [
              {
                name: '心率',
                type: 'line',
                stack: 'Total',
                data: [74, 83, 91, 77,140 , 79, 66, 88, 75, 93, 78, 89,60],
                markPoint: {
                    data: [
                          { type: 'max', name: 'Max' },
                          { type: 'min', name: 'Min' }
                        ]
                 },
                 label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {fontSize: 10},
                },
                }
              ]
            
          }; 
          // 获取图表实例
          var chartInstance = echarts.getInstanceByDom(document.getElementById('chartDom'));
          // document.getElementById('chartDom').innerHTML = '';// 清空图表区域内的 HTML 内容
          chartInstance.clear();
          // 绘制图表
          chartInstance.setOption(this.option);
      },
   
      // 点击按钮，跳转血糖&nbsp
      showBloodSugar() {
        this.text1='本周末血糖值为12，血糖值略高。',
        this.text2='建议再次核实测量方法和数据的准确性。调整饮食习惯：高血糖往往与不合理的饮食习惯有关。因此，建议患者逐步减少高糖、高脂、高盐、高热量等食物的摄入，增加水果、蔬菜、全谷类食物等低糖、低脂、低盐、低热量的食物，并根据自身情况选择适当的餐后运动方式。'  
        this.option = {
            title: {text: '一周血糖值'},
            tooltip: {trigger: 'axis',
          },
            color:'rgb(237, 93, 110)',
            legend: {
              right:20,
              data: ['血糖']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
            formatter: '{value}mmol/L '
            }
            },
            series: [
              {
                name: '血糖',
                type: 'line',
                stack: 'Total',
                data: [5.2, 4.6, 6.0, 5.8, 4.1, 5.7,12],
                label: {
                  show: true,
                  position: 'bottom',
                  textStyle: {fontSize: 10},
                },
                markPoint: {
                    data: [
                          { type: 'max', name: 'Max' },
                          { type: 'min', name: 'Min' }
                        ]
                 },
              }
            ]
          };

        // 获取图表实例
        var chartInstance = echarts.getInstanceByDom(document.getElementById('chartDom'));
        chartInstance.clear();
        // document.getElementById('chartDom').innerHTML = '';// 清空图表区域内的 HTML 内容

        // 绘制图表
        chartInstance.setOption(this.option);
  },
     // 点击按钮，跳转电图
     showECG() {
      this.text1='心电图正常',

      this.text2='建议保持健康饮食：饮食应该以新鲜、多样化和有营养的食物为主。每日摄入的热量应适中，避免过多的饱和脂肪和胆固醇的食物。进行适度的体力活动：适度的体力活动可以促进血液循环和心血管系统的健康，并有助于控制体重。定期去医院做身体检查，包括测量血压、心率和血脂等指标'
      this.option = {

        title: {text: '心电图'},

        // tooltip: {trigger: 'axis'},
        legend: {
        right:20,
        data: ['心电图']
        },
        color:'orange',
        grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
        },
        xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0,0.1,0.20,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9]

        },
        yAxis: {
        type: 'value'
        },
        series: [
        {
        name: '心电图',
        type: 'line',
        stack: 'Total',
        data: [0,-0.1,-0.15,-0.566,0.8,-0.38,-0.35,-0.4,-0.38,-0.36,-0.35,-0.4,-0.2,-0.22,-0.2,-0.3,-0.55,0.7,-0.4,-0.23,-0.26,-0.24,-0.27,-0.2,-0.2,-0.23,-0.2,0,-0.2,-0.3,-0.3,-0.56,0.8,-0.4,-0.35,-0.3,-0.35,-0.2,-0.25,0.1,0]
        }
        ]
        };

       // 获取图表实例
       
       var chartInstance = echarts.getInstanceByDom(document.getElementById('chartDom'));
       chartInstance.clear();
        // var imgSrc = 'E:/myplot.png';
        // document.getElementById('chartDom').innerHTML = `<img src="${imgSrc}"/>`;
        

      // 绘制图表
      chartInstance.setOption(this.option);
      // 将图像添加到图表div中
  },
  },
  components: {
    CommonAsideu,
    CommonHeaderu
  },
  mounted() {
    var chartDom = document.getElementById('chartDom');
      echarts.init(chartDom);
      // 默认显示血压折线图
      this.showBloodPressure();


  }

}

</script>
<style scoped>

.box-card1 {
  margin: 20px;
  height: 300px;
  max-height: 300px;
  overflow: auto;
  background-color: bisque;
}
.box-card2 {
  margin: 20px;
  height: 300px;
  max-height: 300px;
  overflow: auto;
  background-color: rgb(100, 224, 231);
}
.box-card3 {
  margin: 20px;
  height: 300px;
  max-height: 300px;
  overflow: auto;
  background-color: rgb(241, 205, 238);
}
.box-card4 {
  margin: 20px;
  height: 300px;
  max-height: 300px;
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
.blood-pressure {
  display: inline-block;
  margin-left: 10px;
  padding: 3px 8px;
  background-color: rgb(55, 162, 255);
  border-radius: 10px; /* 修改为红色 */
  /* 调整字体大小、颜色、边框等其他样式 */
}

.heart-rate {
  display: inline-block;
  margin-left: 10px;
  padding: 3px 8px;
  background-color: rgb(127, 224, 182);
  border-radius: 10px; /* 修改为蓝色 */
  /* 调整字体大小、颜色、边框等其他样式 */
}

.blood-sugar {
  display: inline-block;
  margin-left: 10px;
  padding: 3px 8px;
  background-color: rgb(237, 93, 110);
  border-radius: 10px; /* 修改为绿色 */
  /* 调整字体大小、颜色、边框等其他样式 */
}

.ECG {
  display: inline-block;
  margin-left: 10px;
  padding: 3px 8px;
  background-color: orange;
  border-radius: 10px; /* 修改为橙色 */
  /* 调整字体大小、颜色、边框等其他样式 */
}
.container {
  display: flex;
  justify-content: center;
}
.column {
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
