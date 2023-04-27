<template>
  <el-container>
    <el-header style="padding: 0;">
      <common-headeru />
    </el-header>
      <el-row>
      <el-card> 
        
        <el-row slot="header" style="height: 50px;font-size: 24px; padding: 0;">
          <el-col :span="12">知识卡片</el-col>
          <el-col :span="12">
            <el-input class="input" v-model="name" id="name" name="name" placeholder="请输入病情" style="width:50%"></el-input> 
            <el-button type="primary" icon="el-icon-search" circle @click="queryLinks" ></el-button>
          </el-col>
        </el-row>    
        <el-row style="height: 300px;max-height: 300px;overflow: auto;">
          <el-col :span="6">     
          <el-row>
            <el-card class="box-card1">
              <div slot="header" >
                <p  class="header">{{ list1.title1 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list1.content1 }}
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card1">
              <div slot="header">
                <p  class="header">{{ list1.title2 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list1.content2 }}
              </div>
            </el-card>
          </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
            <el-card class="box-card2" v-for="(item,index) in detailfood1" :key="index">
              <div slot="header">
                <p  class="header">{{ item.name }}</p>
              </div>
              <div style="font-size: 13px;">
                {{ item.all }}
              </div>
            </el-card>
          </el-row>        
          <el-row>
            <el-card class="box-card2">
              <div slot="header" >
                <p  class="header">{{ list2.title1 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list2.content1 }}
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card2">
              <div slot="header">
                <p  class="header">{{ list2.title1 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list2.content1 }}
              </div>
            </el-card>
          </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
            <el-card class="box-card3" v-for="(item,index) in detaillife1" :key="index">
              <div slot="header">
                <p  class="header">{{ item.name }}</p>
              </div>
              <div style="font-size: 13px;">
                {{ item.all }}
              </div>
            </el-card>
          </el-row>        
          <el-row>
            <el-card class="box-card3">
              <div slot="header" >
                <p  class="header">{{ list3.title1 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list3.content1 }}
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card3">
              <div slot="header">
                <p  class="header">{{ list3.title2 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list3.content2 }}
              </div>
            </el-card>
          </el-row>
          </el-col>
          <el-col :span="6">     
          <el-row>
            <el-card class="box-card4">
              <div slot="header" >
                <p  class="header">{{ list4.title1 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list4.content1 }}
              </div>
            </el-card>
          </el-row>
          <el-row>
            <el-card class="box-card4">
              <div slot="header">
                <p  class="header">{{ list4.title2 }}</p>
              </div>
              <div style=" font-size: 13px;">
                {{ list4.content2 }}
              </div>
            </el-card>
          </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row >
      <el-card style="padding-bottom:5px;height: 580px;">
      <div slot="header" class="clearfix" style="padding: 0;">
        智能问答
      </div>
      <div style="padding: 0;height: 430px;max-height: 430px;overflow-y: scroll;" ref="chatContainer">
        <div v-for="(item,index) in history" v-if="index%2==0" style="float: right;width: 100%; text-align: right;" :key="index">
          <span class="chat">{{ item }}</span><img src='../assets/images/1.webp' alt="" class="user">
        </div>
        <div v-else>
          <img src='../assets/images/2.webp' alt="" class="user"><span class="chat" >{{ item }}</span>
        </div>
      </div>
      <form @submit.prevent="submitQuestion" style="text-align: center;">
    <input type="text" v-model="question" id="question" name="question" placeholder="请输入病情" style="border-radius: 5px;height: 30px;width: 380px;"/>
    <button type="submit"  class="submit">发送</button>
  </form>
    </el-card>
    </el-row>
    
  </el-container>
</template>


<script >
import CommonHeaderu from '../components/CommonHeaderu.vue'
import axios from 'axios'


export default {
  data() {
    return {
      name: '',
      data:[],
      detailfood1:[],
      detaillife1:[],
      list1: {
        title1: '膳食补充剂',
        content1: '慢性病是慢性非传染性疾未完全被确认疾病的概括性总称。引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂。慢性病在人群中发病率、致残率和死亡率力人口显得尤为重要。',
        title2: '',
        content2: '',
      },
      list2: {
        title1: '食谱',
        content1: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。',
        title2: '',
        content2: '',
  },
      list3: {
        
        title1: '生活',
        content1:'慢性病是慢性非传染性疾病的简称，主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。',
        title2: '生活',
        content2: '慢性病是慢性非传染性疾病的简称，主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂因此对慢性病的防治显得尤为重要。'
      },
  list4: {
        title1: '医疗',
        content1: ' 饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。',
        title2: '',
        content2: '',
    

  },
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
    }
  },
  mounted() {
     // 滚动到底部
     this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
  },
    updated() {
    this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
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
        this.answer = response.data.response
        this.history1 = response.data.history
        this.history.push(this.question);
        this.history.push(this.answer)
        
        // let text=[]
        // text.push(this.answer)
        
        this.question = '';
      }).catch(error => {
        console.log(error);
      });
    }
    },
  },
   // 定义向下滚动的方法
 scrollToTop() {
    const container = this.$refs.chatContainer;
    container.scrollTop -= container.clientHeight;
  },
  components: {
    CommonHeaderu
  }
}

</script>
<style scoped>
.box-card1 {
  margin: 20px;
  height: 300px;
  max-height: 300px;
  overflow: auto;
  background-color: rgb(245, 211, 170);
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
.header{
  font-size: 15px; 
  color: #000;
   height: 30px;
   margin: 0;
   padding: 0;
}
.content {
  display: flex;
  justify-content: space-between;
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

</style>
