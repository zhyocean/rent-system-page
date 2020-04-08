<template>
  <div class="wrapper">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><span class="rj-breadcrumb">如家公寓</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">北京租房</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="search-box">
      <div class="box-menu">
        <input type="text" class="box-input" placeholder="请输入区域、地铁站、小区名开始找房">
        <div class="find-house">开始找房</div>
      </div>
      <div class="result-box">
        <div class="item">
          <strong class="title">位置：</strong>
          <div class="option-list">
            <span>区域</span>
            <span>地铁</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room'
}
</script>

<style>
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
      .search-box{
        margin-top: 50px;
      }
        .box-input{
          border: 1px solid rgba(0,0,0,.12);
          height: 50px;
          width: 500px;
          text-indent: 12px;
          font-size: 16px;
          padding-left: 30px;
          background-color: #fff;
          border-radius: 5px 0 0 5px;
        }
        .find-house{
          display: inline-block;
          text-align: center;
          width: 132px;
          height: 100%;
          background: #ff961e;
          color: #fff;
          border-radius: 0 2px 2px 0;
          transform: translate(-5px,-2px);
          height: 53.7px;
          line-height: 52px;
          vertical-align: middle;
          cursor: pointer;
        }
      .result-box{
        margin-top: 35px;
      }
        .option-list{
          display: inline-block;
        }
</style>
