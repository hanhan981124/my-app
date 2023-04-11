<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="8">
        <p>北方工业大学</p>
        <p>地址：北京市石景山区北方工业大学</p>
        <p>电话:0000-1234567</p>
        <p>邮箱:support@ncut.edu</p>
      </el-col>
      <el-col :span="8">
        <p>企业介绍</p>
        <p>品牌介绍</p>
        <p>团队介绍</p>
        <p>关于我们</p>
      </el-col>
      <el-col :span="8">
        <p>产品介绍</p>
        <p>已采集xxxx数据</p>
        <p>已生成xxxx数据</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<sttyle lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  width: auth;
  background-color: #666;
  border-top: 1px solid #ccc;
}

p {
  color: #fff;
  font-size: x-small;

}
</sttyle>
