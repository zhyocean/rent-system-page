<template>
  <div class="wrapper">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><span class="rj-breadcrumb">如家公寓</span></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/rent' }"><span class="rj-breadcrumb">{{this.$store.state.city}}租房</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">丰台区租房</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">刘家窑租房</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">福臻家园租房</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">刘家窑 福臻家园 次卧 朝东 A室 </span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="room-info">
      <div class="room-carousel">
        <el-carousel trigger="click" indicator-position="outside">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .wrapper{
      width: 1190px;
      margin: 0 auto;
      margin-top: 50px;
  }
    .rj-breadcrumb{
        font-size: 16px;
        color: #999;
        font-weight: 400;
    }
    .room-info{
      width: 50%;
    }
</style>
