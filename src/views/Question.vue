<template>
  
    <el-container>
      <el-header style="padding: 0;text-align: center;">
        <common-headeru />
      </el-header>
      <div style="margin: 10px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" style="width: 30%;"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="gender">
    <el-select v-model="ruleForm.gender" placeholder="请选择性别" style="width: 20%;">
      <el-option label="男" value="m"></el-option>
      <el-option label="女" value="w"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model="ruleForm.age" style="width: 20%;"></el-input>
  </el-form-item>
  <el-form-item label="生活方式" prop="style">
    <el-input type="textarea" v-model="ruleForm.style" placeholder="例如：素食者、加班熬夜不规律"></el-input>
  </el-form-item>
  <el-form-item label="当前症状" prop="symptom">
    <el-input type="textarea" v-model="ruleForm.symptom" placeholder="例如：失眠，焦虑"></el-input>
  </el-form-item>
  <el-form-item label="慢性病" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="痛风" name="type"></el-checkbox>
      <el-checkbox label="高血压" name="type"></el-checkbox>
      <el-checkbox label="高血脂" name="type"></el-checkbox>
      <el-checkbox label="高血糖" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item> 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>   
</div> 
    </el-container>
  </template> 
  <script >
  import CommonHeaderu from '../components/CommonHeaderu.vue'
  import axios from 'axios'  
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          gender: '',
          age:'',
          style:'',
          symptom:'',
          type: []
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
          ],
          type: [
            { type: 'array', required: true, message: '请选择慢性病', trigger: 'change' }
          ],
          style: [
            { required: true, message: '请选择活动资源', trigger: 'blur' }
          ],
          symptom: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
        };  
        
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
  