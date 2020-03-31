<template>
  <el-row :gutter="20" class="header-row">
    <el-col :span="4" :offset="3">
      <img class="header_logo" src="@/assets/header_logo.png" alt="">
    </el-col>
    <el-col :span="7" :offset="3">
      <el-menu :default-active="activeIndex" class="el-menu-demo header-col" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">租房</el-menu-item>
        <el-menu-item index="3">服务</el-menu-item>
        <el-menu-item index="4">生活</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style>
  .header-row{
    border-bottom: solid 1px #e6e6e6;
  }
    .header_logo{
      height: 60px;
    }
    .header-col{
      border-bottom: solid 0px #fff;
    }
</style>
