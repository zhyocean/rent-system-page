<template>
  <div class="warpper">
      <div class="rj-service">
        <div class="service-title">
          <img src="@/assets/title_bg.png"> 如家服务 <img src="@/assets/title_bg.png">
          <div class="vice-title">/为您提供最优质的服务/</div>
        </div>
        <div class="service-pic">
          <el-row :gutter="20">
            <el-col :span="6">123</el-col>
            <el-col :span="6">123</el-col>
            <el-col :span="6">123</el-col>
            <el-col :span="6">123</el-col>
          </el-row>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeService'
}
</script>

<style>
  .service-title{
      margin: 60px auto 50px;
      font-size: 30px;
      color: rgba(0,0,0,.85);
      text-align: center;
  }
    .service-title img{
      width: 25px;
    }
    .vice-title{
      color: rgba(0,0,0,.4);
      font-size: 17px;
      margin-top: 6px;
      margin-bottom: 32px;
    }
  .service-pic{
    text-align: center;
  }
</style>
