<template>
  <div class="aside" style="width: 470px;">
    <el-card style="padding:0;height: 680px;">
      <div slot="header" class="clearfix" style="padding: 0;">
        智能问答
      </div>
      <div style="padding: 0;height: 530px;max-height: 530px;overflow-y: scroll;" ref="chatContainer">
        <div v-for="(item,index) in history" v-if="index%2==0" style="float: right;width: 100%; text-align: right;" :key="index">
          <span class="chat">{{ item }}</span><img src='../assets/images/1.webp' alt="" class="user">
        </div>
        <div  v-else >
          <img src='../assets/images/2.webp' alt="" class="user">
          <span class="chat" >{{ item }}</span>
        </div>
      </div>
      <form @submit.prevent="submitQuestion">
    <input type="text" v-model="question" id="question" name="question" placeholder="请输入病情" style="border-radius: 5px;height: 30px;width: 380px;"/>
    <button type="submit"  class="submit">发送</button>
  </form>
    </el-card>
    <div class="clearfix">
      资源地图
      </div>
      <div>
        <input v-model="name"  id="name" name="name" placeholder="请输入病情"   style="border-radius: 5px;height: 30px;width: 280px;"/>
        <button @click="queryLinks">点击查询</button>
    </div>
    <div ref="echartsContainer" style="height: 340px;"></div>
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
      name:'',
      detailfood1:[],
      detaillife1:[],
      chartInstance: null, // Echarts实例
      defaultOptions: {
        // 默认的options配置
        series: [{
          type: 'graph',
          layout: 'force',
          symbolSize: 50,
            roam: true,
            label: {
              show: true,
              // position: 'top',
              fontSize: 12
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 8
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 8
              }
            },
            force: {
              repulsion: 200,
              edgeLength: 80
            },
          // 节点和关系的数据
          data: [
            { name: '慢性病',category:0,},
            { name: '食谱' ,category:1},
            { name: '生活' ,category:1},
            { name: '医疗',category:1},
            { name: '膳食补充剂' ,category:1}
          ],
          links: [
            { source: '慢性病', target: '食谱' ,label:{show:true,formatter:'推荐',}},
            { source: '慢性病', target: '生活' },
            { source: '慢性病', target: '医疗' },
            { source: '慢性病', target: '膳食补充剂' }

          ],
          categories: [
          { name: '类别1' },
          { name: '类别2' },
        ]
          
        }]
      }
  }},
  mounted() {
     // 在组件挂载时创建Echarts实例
     this.chartInstance = echarts.init(this.$refs.echartsContainer);
    this.chartInstance.setOption(this.defaultOptions);


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

    queryLinks() {
      if (this.name==''){
        this.$message('请输入病情进行查询')
      }else{
      axios.post('http://10.5.83.135:8080/graph', JSON.stringify({name: this.name}), {
       headers: {'Content-Type': 'application/json'}
      }).then(response => {
       const nodes=response.data.data.map(item => ({ 
        name: item.name ,
        category:item.labels,

      }));
       const links = response.data.links.map(item => ({
          source: nodes.findIndex(node => node.name === item.start_node),
          target: nodes.findIndex(node => node.name === item.end_node),
          label:{

          }
         }));

         
        this.chartInstance.setOption({ 
            series: [{
              type: 'graph',
          layout: 'force',
          symbolSize: 50,
            roam: true,
            label: {
              show: true,
              // position: 'top',
              fontSize: 12
            },
            edgeSymbol: ['none', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 6
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 3
              }
            },
            force: {
              repulsion: 200,
              edgeLength: 80
            },
            data:nodes,
            links: links,
            categories: [
          { name:'disease' },
          { name:'meishi' },
          { name:"器官" },
          {name:"knowledge"}
        ]
          }]
        });

         console.log(response.data)
        }).catch(error => {
        // 处理错误
        console.error(error);
        console.log("?????")
      });
    }
  },
 
 // 定义向下滚动的方法
 scrollToTop() {
    const container = this.$refs.chatContainer;
    container.scrollTop -= container.clientHeight;
  },
},
}
</script>
<sttyle lang="less" scoped>
.aside {
  margin-left: 0;
  width: 470px;
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
  font-size: 15px;
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
