<template>
  <div class="wrapper">
      <!-- 如家服务 -->
      <div class="rj-service">
        <div class="service-title">
          <img class="title-pic" src="@/assets/home/title_bg.png"> 如家服务 <img class="title-pic" src="@/assets/home/title_bg.png">
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
      <!-- 房屋出租 -->
      <div class="rj-rental-housing">
        <div class="rental-title">
          <img class="title-pic" src="@/assets/home/title_bg.png"> 房屋出租 <img class="title-pic" src="@/assets/home/title_bg.png">
          <div class="vice-title">/为您选择最适合的租客/</div>
        </div>
        <div class="rental-main">
          <div class="rental-steps">
            <div class="step">
              <div class="rental-step-pic">
                <img src="@/assets/home/step1.png">
              </div>
              <div>
                <h3>提交委托信息</h3>
                <p>提交基本信息在线委托，或直接拨打委托热线</p>
              </div>
            </div>
            <div class="step-icon">
              <span class="iconfont">&#xe62d;</span>
            </div>
            <div class="step">
              <div class="rental-step-pic">
                <img src="@/assets/home/step2.png">
              </div>
              <div>
                <h3>与管家沟通</h3>
                <p>业主服务中心30分钟内给您回电，指派专属管家</p>
              </div>
            </div>
            <div class="step-icon">
              <span class="iconfont">&#xe62d;</span>
            </div>
            <div class="step">
              <div class="rental-step-pic">
                <img src="@/assets/home/step3.png">
              </div>
              <div>
                <h3>制定出租方案</h3>
                <p>管家上门实勘报价，制定出租委托方案</p>
              </div>
            </div>
            <div class="step-icon">
              <span class="iconfont">&#xe62d;</span>
            </div>
            <div class="step">
              <div class="rental-step-pic">
                <img src="@/assets/home/step4.png">
              </div>
              <div>
                <h3>成为如家业主</h3>
                <p>签署出租委托协议，尊享自如资产管理服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 精选房源 -->
      <div class="rj-select-properties">
        <div class="properties-title">
          <img class="title-pic" src="@/assets/home/title_bg.png"> 精选房源 <img class="title-pic" src="@/assets/home/title_bg.png">
          <div class="vice-title">/为您选择最优质的房源/</div>
        </div>
        <div class="properties-main">
          <div>
            <div class="properties-left">
            <div class="properties-top">
              <img src="@/assets/home/p.jpg">
            </div>
            <div class="properties-bottom">
              <div>
                <div class="more-word">精选优质房源，为你消除一切租房难题</div>
                <div class="more-btn"><el-button type="danger" plain>更多房源</el-button></div>
              </div>
            </div>
          </div>
          <div class="properties-right">
            <div class="sm-property">
              <img src="@/assets/home/service_pic1.jpg">
            </div>
            <div class="sm-property">
              <img src="@/assets/home/service_pic1.jpg">
            </div>
            <div class="sm-property">
              <img src="@/assets/home/service_pic1.jpg">
            </div>
          </div>
          </div>
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
  .service-title,.rental-title,.properties-title{
      margin: 60px auto 50px;
      font-size: 30px;
      color: rgba(0,0,0,.85);
      text-align: center;
  }
    .title-pic{
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
  .rental-main{
    text-align: center;
  }
    .step{
      display: inline-block;
      width: 220px;
      margin-left: 50px;
      margin-right: 50px;
    }
    .step-icon{
      position: absolute;
      transform: translateY(100px);
      display: inline-block;
    }
  .properties-main{
    position: relative;
    text-align: center;
  }
    .properties-left{
      width: 1000px;
      margin: 0 auto;
      display: inline-block;
      transform: translateX(-200px);
    }
      .properties-bottom{
        transform: translateY(-60px);
        height: 60px;
        background-color: #26020266;
      }
        .more-word{
          font-style: oblique;
          color: #67C23A;
          position: absolute;
          top: 30%;
          left: 30px;
        }
        .more-btn{
          position: absolute;
          top: 20%;
          right: 3%;
        }
        .properties-top img{
          width: 100%;
          height: 100%;
        }
    .properties-right{
      display: inline-block;
      top: 0;
      position: absolute;
      margin-left: 30px;
      transform: translateX(-200px);
    }
      .sm-property{
        width: 250px;
        margin-bottom: 25px;
        height: 150px;
        overflow: hidden;
      }
        .sm-property img{
          width: 100%;
        }
  </style>
