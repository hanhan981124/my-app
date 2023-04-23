<template>
    <el-container>
      <el-header style="padding: 0;">
        <common-headeru />
      </el-header>
      <el-form :model="form" :rules="rules" ref="form">
        <el-card style="background-color:gainsboro; margin: 10px;;">
            <p slot="header" style="font-size: 15px;color:black;" >基础信息</p>
            <label>您的姓名：</label>
                <input type="text" v-model="form.name" required><br><br>
                <label>您的年龄：</label>
                <input type="number" v-model.number="form.age" min="1" max="150" required><br><br>
                <label>您的性别：</label>
                <select v-model="form.gender" required>
                    <option value="">请选择</option>
                    <option value="男">男</option>
                    <option value="女">女</option>
                    <option value="其他">其他</option>
                </select><br><br>
        </el-card>
        <el-card style="background-color: gainsboro; margin: 10px;">
            <p slot="header" style="font-size: 15px;color:black;">生活方式</p>
            <el-input type="textarea" v-model="form.style" placeholder="例如:素食者、加班熬夜不规律..."></el-input>
        </el-card> 
        <el-card style="background-color: gainsboro; margin: 10px;">
            <p slot="header" style="font-size: 15px;color:black;">当前症状</p>
            <el-input type="textarea" v-model="form.sympotem" placeholder="例如:焦虑、失眠..."></el-input>
        </el-card>        
        <el-card style="background-color: gainsboro; margin: 10px;">
            <p slot="header" style="font-size: 15px;color:black;">慢性病</p>
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="痛风" name="type"></el-checkbox>
                <el-checkbox label="焦虑" name="type"></el-checkbox>
                <el-checkbox label="抑郁症" name="type"></el-checkbox>              
                <el-checkbox label="青光眼" name="type"></el-checkbox>
                <el-checkbox label="白内障" name="type"></el-checkbox>
                <el-checkbox label="高血压" name="type"></el-checkbox>
                <el-checkbox label="高血脂" name="type"></el-checkbox>
                <el-checkbox label="高血糖" name="type"></el-checkbox>
                <el-checkbox label="冠心病" name="type"></el-checkbox>
                <el-checkbox label="关节炎" name="type"></el-checkbox>
                <el-checkbox label="肝硬化" name="type"></el-checkbox>
                <el-checkbox label="脑出血" name="type"></el-checkbox>
                <el-checkbox label="恶性肿瘤" name="type"></el-checkbox>
                <el-checkbox label="骨质疏松症" name="type"></el-checkbox>              
                <el-checkbox label="老年性痴呆" name="type"></el-checkbox>
                <el-checkbox label="2型糖尿病" name="type"></el-checkbox>
                <el-checkbox label="骨质疏松症" name="type"></el-checkbox>  
                <el-checkbox label="支气管哮喘" name="type"></el-checkbox>
                <el-checkbox label="慢性支气管炎" name="type"></el-checkbox>    
                <el-checkbox label="类风湿性关节炎" name="type"></el-checkbox>   
                </el-checkbox-group>
        </el-card>        
     <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
    </el-form>
    </el-container>
  </template>
  
  
  <script >
  import CommonHeaderu from '../components/CommonHeaderu.vue'
  import axios from 'axios'
  
  
  export default {
    data() {
      return {
        form: {
            name:'',
            age:'',
            gender:'',
            style:'',
            sympotem:'',
            type:[],
        },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                style:[
                    { required: true, message: '请输入生活方式', trigger: 'blur' }
                ],
                sympotem:[
                    { required: true, message: '请选择症状', trigger: 'blur' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                }
        }  
        
      },
   
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
     // 定义向下滚动的方法
   
    components: {
      CommonHeaderu
    }
  }
  
  </script>
  <style scoped>

  
  </style>
  