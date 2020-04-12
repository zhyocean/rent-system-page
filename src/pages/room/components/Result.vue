<template>
  <div class="wrapper">
      <div class="result-title">
        <p>已为您找到符合条件的 <span class="roomNum">12345套</span> 房源 </p>
        <div class="showType">
            <span id="default" :class="[showItem == 'default' ? 'showItem' : '']" @click="handleSort($event)">默认排序</span>
            <span id="priceSort" :class="[showItem == 'priceSort' ? 'showItem' : '']" @click="handleSort($event)">价格
              <i v-if="showItem == 'priceSort' && priceClickSpy" class="iconfont">&#xe67f;</i>
              <i v-if="showItem == 'priceSort' && !priceClickSpy" class="iconfont">&#xe680;</i>
            </span>
            <span id="areaSort" :class="[showItem == 'areaSort' ? 'showItem' : '']" @click="handleSort($event)">面积
              <i v-if="showItem == 'areaSort' && areaClickSpy" class="iconfont">&#xe67f;</i>
              <i v-if="showItem == 'areaSort' && !areaClickSpy" class="iconfont">&#xe680;</i>
            </span>
        </div>
        <el-divider class="title-line"></el-divider>
      </div>
      <div class="pic-list">
        <!-- <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col class="middle" :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col class="middle" :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row> -->
        <div class="item">
          <div class="item-title">
            <img src="@/assets/home/service_pic1.jpg" alt="">
          </div>
        </div>
        <div class="item middle">
          <div class="item-title">
            <img src="@/assets/home/service_pic1.jpg" alt="">
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            <img src="@/assets/home/service_pic1.jpg" alt="">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      showItem: 'default',
      priceClickSpy: false,
      areaClickSpy: false
    }
  },
  methods: {
    handleSort (event) {
      if (event.target.id !== '') {
        this.showItem = event.target.id
        if (event.target.id === 'priceSort') {
          this.priceClickSpy = !this.priceClickSpy
        }
        if (event.target.id === 'areaSort') {
          this.areaClickSpy = !this.areaClickSpy
        }
      }
    }
  },
  watch: {
    showItem (newData, oldData) {
      if (oldData === 'priceSort') {
        this.priceClickSpy = false
      } else if (oldData === 'areaSort') {
        this.areaClickSpy = false
      }
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
    .result-title{
      margin-bottom: 10px;
    }
      .result-title p{
        color: rgba(0,0,0,.6);
        display: inline-block;
        margin-bottom: 10px;
      }
      .showType{
        display: block;
        float: right;
        margin-top: 15px;
        color: rgba(0,0,0,.6);
      }
        .showType span{
          margin-right: 25px;
          padding-bottom: 9px;
          cursor: pointer;
        }
        .showItem{
            border-bottom: 3px solid #ff961e;
            color: #ff961e;
        }
      .roomNum{
        color: #ff961e;
      }
      .title-line{
          margin: 0 0 20px;
      }
    .pic-list{
      margin-top: 50px;
    }
      .item{
        width: 375px;
        display: inline-block;
      }
        .item-title{
          height: 270px;
        }
          .item-title img{
            width: 100%;
            height: 100%;
          }
          .middle{
            margin: 0 21px;
          }
          .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
