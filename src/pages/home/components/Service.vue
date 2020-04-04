<template>
  <div class="warpper">
      <div class="rj-service">
        <div class="service-title">
          <img src="@/assets/title_bg.png"> 如家服务 <img src="@/assets/title_bg.png">
          <div class="vice-title">/为您提供最优质的服务/</div>
        </div>
        <div class="service-pics">
          <div class="pic-title">
            <el-image class="service-pic" src="https://webimg.ziroom.com/f14b0a6b-9b21-4fb8-9e4c-9da3c4f371b8.jpg" fit="contain"></el-image>
            <div class="pic-bottom">
              <h4>租房</h4>
              <p>合租/整租</p>
            </div>
          </div>
          <div class="pic-title">
            <el-image class="service-pic" src="https://webimg.ziroom.com/25e3ac3e-b416-4e8d-bd8a-44a833033d59.jpg" fit="contain"></el-image>
            <div class="pic-bottom">
              <h4>服务</h4>
              <p>保洁/搬家</p>
            </div>
          </div>
          <div class="pic-title">
            <el-image class="service-pic" src="https://webimg.ziroom.com/c005bd80-606c-422b-8880-79e203a67c34.jpg" fit="contain"></el-image>
            <div class="pic-bottom">
              <h4>生活</h4>
              <p>生活社区/智能家居</p>
            </div>
          </div>
          <div class="pic-title">
            <el-image class="service-pic" src="https://webimg.ziroom.com/d45b362a-b9f0-4a1a-9868-e38bc4035539.jpg" fit="contain"></el-image>
            <div class="pic-bottom">
              <h4>维修</h4>
              <p>24小时后勤保障</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rj-rental-housing">
        <div class="rental-title">
          <img src="@/assets/title_bg.png"> 房屋出租 <img src="@/assets/title_bg.png">
          <div class="vice-title">/为您选择最适合的租客/</div>
        </div>
        <div class="rental-main">

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
  .service-title,.rental-title{
      margin: 60px auto 50px;
      font-size: 30px;
      color: rgba(0,0,0,.85);
      text-align: center;
  }
    .service-title img{
      width: 25px;
    }
    .rental-title img{
      width: 25px;
    }
    .vice-title{
      color: rgba(0,0,0,.4);
      font-size: 17px;
      margin-top: 6px;
      margin-bottom: 32px;
    }
  .service-pics{
    text-align: center;
  }
    .pic-title{
      display: inline-block;
    }
      .service-pic{
        width: 300px;
        margin: auto 25px;
      }
    .pic-bottom{
      transform: translateY(-50px);
      width: 60%;
      text-align: center;
      margin: 0 auto;
      background-color: #fff;
      padding: 10px 0 15px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
    }
      .pic-bottom h4{
        margin: 10px 0 8px;
        font-size: 24px;
        color: rgba(0,0,0,.85);
        font-weight: 600;
      }
      .pic-bottom p{
        font-size: 15px;
        color: rgba(0,0,0,.4);
        margin: 0;
      }
</style>
