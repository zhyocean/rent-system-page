<template>
  <div class="wrapper">
      <div>
          <el-divider><span class="rj-commitment-title">如家公寓承诺</span></el-divider>
          <div class="rj-commitment">
            <div class="commitment-item">
              <div class="iconfont">&#xe610;</div>
              <span>百分百真实房源</span>
            </div>
            <div class="commitment-item">
              <div class="iconfont">&#xe730;</div>
              <span>不收取中介费</span>
            </div>
            <div class="commitment-item">
              <div class="iconfont">&#xe731;</div>
              <span>优质保洁</span>
            </div>
            <div class="commitment-item">
              <div class="iconfont">&#xe669;</div>
              <span>售后维修及时上门</span>
            </div>
            <div class="commitment-item">
              <div class="iconfont">&#xe619;</div>
              <span>智能密码锁</span>
            </div>
            <div class="commitment-item">
              <div class="iconfont">&#xe652;</div>
              <span>极速WIFI</span>
            </div>
          </div>
      </div>
      <div class="main-info">
          <div class="house-profile">
              <h2>房源简介</h2>
              <p>南向卧室带阳台，自如清新装修，格局大方，采光好，房子干净整洁，小区整洁干净，给你一种家的温馨之感。欢迎您的入住~</p>
              <div class="housing-allocation">
                  <div class="allocation-item">
                    <div class="iconfont">&#xe619;</div>
                    <span>智能锁</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe64f;</div>
                    <span>路由器</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe63f;</div>
                    <span>冰箱</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe601;</div>
                    <span>微波炉</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe735;</div>
                    <span>洗衣机</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe645;</div>
                    <span>热水器</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe666;</div>
                    <span>浴霸</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe604;</div>
                    <span>衣柜</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe643;</div>
                    <span>床垫</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe651;</div>
                    <span>空调</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe608;</div>
                    <span>床</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe611;</div>
                    <span>桌子</span>
                  </div>
                  <div class="allocation-item">
                    <div class="iconfont">&#xe616;</div>
                    <span>椅子</span>
                  </div>
              </div>
          </div>
          <div class="chum-info">
              <h2>室友信息</h2>
              <el-table :data="chumInfo" style="width: 100%">
                <el-table-column prop="room" label="房间" width="100">
                </el-table-column>
                <el-table-column prop="state" label="状态" width="120">
                </el-table-column>
                <el-table-column prop="chum" label="室友" width="90">
                </el-table-column>
                <el-table-column prop="areaArch" label="建筑面积" width="100">
                </el-table-column>
                <el-table-column prop="toilet" label="独卫" width="90">
                </el-table-column>
                <el-table-column prop="bathroom" label="淋浴" width="90">
                </el-table-column>
                <el-table-column prop="balcony" label="阳台" width="90">
                </el-table-column>
                <el-table-column prop="rent" label="租金" width="120">
                </el-table-column>
              </el-table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainInfo',
  data () {
    return {
      chumInfo: [{
        room: 'A房间',
        state: '当前房间',
        chum: '--',
        areaArch: '10㎡',
        toilet: 'yes',
        bathroom: 'yes',
        balcony: 'yes',
        rent: '2830 元/月'
      }, {
        room: 'B房间',
        state: '已出租',
        chum: '女',
        areaArch: '12㎡',
        toilet: 'yes',
        bathroom: 'yes',
        balcony: 'yes',
        rent: '已出租'
      }, {
        room: 'C房间',
        state: '已出租',
        chum: '女',
        areaArch: '10㎡',
        toilet: 'yes',
        bathroom: 'yes',
        balcony: 'yes',
        rent: '已出租'
      }]
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
    .rj-commitment-title{
      font-size: 24px;
      color: #333;
    }
      .rj-commitment{
        text-align: center;
        background-color: #fff;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 0 10px 3px rgba(231,231,231,.5);
        padding: 30px 0;
        margin-top: 45px;
      }
        .commitment-item{
          display: inline-block;
          width: 16.3%;
        }
          .commitment-item .iconfont{
            font-size: 60px;
            color: rgba(0,0,0,.4);
            margin-bottom: 10px;
        }
      .main-info{
        margin-top: 40px;
      }
        .house-profile{
            margin-bottom: 50px;
        }
          .house-profile p{
            color: rgba(0,0,0,.6);
          }
          .housing-allocation{
            display: inline-block;
          }
          .allocation-item{
            width: 80px;
            text-align: center;
            display: inline-block;
          }
            .allocation-item .iconfont{
              font-size: 39px;
              color: rgba(0,0,0,.4);
            }
</style>
