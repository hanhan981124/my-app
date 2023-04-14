<template>
  <div class="aside" style="width: 369px;">
    <el-card style="padding:0;height: 580px;">
      <div slot="header" class="clearfix" style="padding: 0;">
        智能问答
      </div>
      <div style="padding: 0;height: 430px;max-height: 430px;overflow-y: scroll;" ref="chatContainer">
        <div v-for="(item,index) in history" v-if="index%2==0" style="float: right;width: 100%; text-align: right;" :key="index">
          <span class="chat">{{ item }}</span><img src='../assets/images/1.webp' alt="" class="user">
        </div>
        <div  v-else >
          <img src='../assets/images/2.webp' alt="" class="user">
          <span class="chat" >{{ item }}</span>
        </div>
      </div>
      <form @submit.prevent="submitQuestion">
    <input type="text" v-model="question" id="question" name="question" placeholder="请输入病情" style="border-radius: 5px;height: 30px;width: 260px;">
    <button type="submit"  class="submit">发送</button>
  </form>
    </el-card>
    <div class="clearfix">
      <el-col :span="12">资源地图</el-col>
      <el-col :span="12">
        <el-input class="input" v-model="input"  placeholder="请输入.." style="width: 100px;"></el-input>
        <el-button type="primary" icon="el-icon-search" circle  style="margin-left: 5px;"></el-button>
      </el-col>
    </div>
    <div ref="chart" style="height: 340px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'

export default {
  data() {
    return {
  question: '',
  // history:[
  //   {
  //     "send":"user",
  //     "jieshou":"server",
  //     "date": "当前时间",
  //     "content":"你好"
  //   }
  // ],
  history:[],
  history1:[],
  answer:'',
  input:'',
  inputgraph:'',
  name: 'RelationChart',
  }},
  mounted() {
    this.initChart();
     // 滚动到底部
     this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
  },
    updated() {
    this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
  },
  methods: {
   
    submitQuestion: function() {
      if (this.question==''){
        this.$message('请输入内容再发送')
      }else{
      axios.post('http://10.5.83.162:8000', {
        prompt: this.question,
        history: this.history1
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        // console.log(response.data)
        this.answer = response.data.response
        this.history1 = response.data.history
        // console.log(this.answer)
        this.history.push(this.question);
        this.history.push(this.answer)
        // console.log(this.history)
        this.question = '';
      }).catch(error => {
        console.log(error);
      });
    }
    },
 // 定义向下滚动的方法
 scrollToTop() {
  const container = this.$refs.chatContainer;
  container.scrollTop -= container.clientHeight;
},
    initChart() {
      const chartDom = this.$refs.chart
      const myChart = echarts.init(chartDom)
      const option = {
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            roam: true,
            label: {
              show: true,
              position: 'top',
              fontSize: 12
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 6
            },
            data: [
              {
                name: '慢性病',
                category: 0,
                symbolSize: 70,
                draggable: true,
                itemStyle: {
                  color: '#FF9E9D'
                }
              },
              {
                name: '生活',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#FFDCA2'
                }
              },
              {
                name: '食谱',
                target: 'recipe',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#B5EAD7'
                }
              },
              {
                name: '医疗',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#C7CEEA'
                }
              },
              {
                name: '保健',
                category: 1,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  color: '#F4A261'
                }
              }
            ],
            links: [
              {
                source: '慢性病',
                target: '生活',
                label: {
                  show: true,
                  formatter: '影响'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '食谱',
                label: {
                  show: true,
                  formatter: '影响'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '医疗',
                label: {
                  show: true,
                  formatter: '治疗'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              },
              {
                source: '慢性病',
                target: '保健',
                label: {
                  show: true,
                  formatter: '预防'
                },
                lineStyle: {
                  width: 2,
                  color: '#FF9E9D'
                }
              }
            ],
            categories: [
              {
                name: '慢性病'
              },
              {
                name: '关联'
              }
            ],
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 3
              }
            },
            force: {
              repulsion: 200,
              edgeLength: 80
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    
},

}
</script>
<sttyle lang="less" scoped>
.aside {
  margin-left: 0;
  width: 370px;
  height: 100%;
  // border-right: 1px solid #7e7979;
}

.clearfix {
  align-items: center;
  color: #131313;
  font-size: 24px;
  padding-top: 30px;
}
.chat{
  display: inline-block; 
  color: #fff;
  background-color: #2570bf;
  opacity:0.9; 
  border: 0.5px solid white; 
  border-radius: 5px;
  font-size: 5px;
  margin-bottom: 10px;
  padding: 5px;
}
  .user{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.submit{
  border-radius: 50%;
  height: 40px; 
  background-color: #4397f0;
   color: #fff; 
   border: #fff;
}
.box-card {
  padding: none;
}

.el-card {
  padding: 0;
}
</sttyle>
