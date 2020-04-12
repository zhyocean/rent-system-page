<template>
  <div class="carousel-main">
    <el-carousel height="500px" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/home/home_back.jpg">
      </el-carousel-item>
    </el-carousel>
    <div class="search-box">
      <div class="box-word">
        <h1>品质租房选如家</h1>
        <p>用科技改善生活</p>
      </div>
      <div class="box-left">
        <el-dropdown @command="changeCity">
          <span class="el-dropdown-link search-title">
            {{this.$store.state.city}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) of this.$store.state.citys" :key="index" :command="item">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="search-text">
          <input type="text" class="search-input" placeholder="请输入区域、地铁站、小区名开始找房">
        </div>
      </div>
      <div class="box-right">
        <el-button class="find-house-btn" type="warning">开始找房</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCarousel',
  methods: {
    changeCity (command) {
      this.$store.commit('commitCity', command)
    }
  }
}
</script>

<style scoped>
  .carousel-main{
    position: relative;
  }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .search-box{
      position: absolute;
      top: 30%;
      left: 20%;
      z-index: 2;
    }
    .box-word{
      margin-bottom: 30px;
    }
      .box-word h1{
        font-size: 60px;
        color: #fff;
        margin: 0 0 12px -5px;
      }
      .box-word p{
        font-size: 25px;
        color: #fff;
        margin: 0;
      }
      .box-left{
        padding: 10px 0px 10px 20px;
        background-color: #fff;
        border-radius: 5px 0 0 5px;
        display: inline-block;
      }
        .el-dropdown-link {
          cursor: pointer;
          color: #409EFF;
        }
        .search-title{
          color: rgba(0,0,0,.4);
          font-size: 17px;
        }
        .el-icon-arrow-down {
          font-size: 12px;
        }
        .search-text{
          display: inline-block;
          margin-left: 10px;
        }
          .search-input{
            border: none;
            width: 500px;
            height: 30px;
            font-size: 15px;
          }
      .box-right{
        display: inline-block;
      }
        .find-house-btn{
          transform: translateX(-5px);
          height: 52px;
          width: 120px;
        }
</style>
