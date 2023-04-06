<template>
  <el-main >
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in list" :key="index" class="carousel">
          <img :src="item.imgurl" alt="" class="img">
          <div class="text">{{ item.title }}</div>
        </el-carousel-item>
      </el-carousel>
    </el-main>
</template>
<script>
import CommonHeader from '@/components/CommonHeader.vue';
 import CommonBottom from '@/components/CommonBottom.vue';

export default{
    data() {
        return {
           list:[
            {
              title:'生活:慢性病是慢性非传染性疾病的简称，是对一类起病隐匿、病程长且病情迁延不愈、病因复杂，有些尚未完全被确认疾病的概括性总称。主要包括以生活方式、环境危险因素为主引起的肿瘤、心脑血管疾病、糖尿病、慢性阻塞性肺疾病等为代表的一组疾病。虽然慢性病的病因复杂或尚未明确，但多数疾病却是可以预防和控制的。慢性病在人群中发病率、致残率和死亡率高，严重耗费社会资源，危害劳动力人口的健康，因此对慢性病的防治显得尤为重要。',
              imgurl:require('../assets/images/home/home4.webp')
            },
            {
              title:'食谱:        饮食方面，尽量实现食物的多样化，以谷薯类为主、粗细搭配、多吃果蔬，兼食畜禽鱼蛋、奶类、大豆坚果类等。少食油腻、高盐、烟熏及腌制食品。清淡饮食，避免饱餐，一般七分饱即可。',
              imgurl:require('../assets/images/home/home1.jpg')
            },
            {
              title:'医疗:慢性病一般很难治愈，只有靠药物控制不能中断。要知道，药物多少都存在一定的副作用，要想减少对身体的伤害，就要严格按照医生的嘱咐服用，不能随便添加或减少剂量，否则的话可能会影响慢性病的治疗，严重的还会诱发并发症的出现。',
              imgurl:require('../assets/images/home/home2.webp')
            },
            {
              title:'保健:       在慢病的健康管理中,对重点指标坚持规律监测十分有意义。疫情期间,患者居家要做好血压、血糖的自我监测。监测血压时，做到每日定时、定体位、定部位、定血压计，即固定测量时间、固定坐位或平卧位、固定左上肢或右上肢、固定使用同一个血压计。监测血糖时，应避免测量次数不够，一般血糖测量的时间包括：清晨空腹血糖、餐前血糖、餐后2小时血糖、睡前血糖，如有发生凌晨低血糖的，则加测凌晨3点血糖。血糖控制平稳的，可以每周监测1~2天，至少选择餐前、餐后两次监测。',
              imgurl:require('../assets/images/home/home3.webp')
            },
           ]
        };
    },
    components: { 
        
        // eslint-disable-next-line vue/no-unused-components
        CommonBottom,
        // eslint-disable-next-line vue/no-unused-components
        CommonHeader
     }
}
</script>
<style >
  .el-main{
    padding: 0;
    height: 100%;
  } 
  .carousel{
    display: flex;
    justify-content: space-between;
  }
  .img{
    height: 100%;
    width: 20%;
  }
  
</style>