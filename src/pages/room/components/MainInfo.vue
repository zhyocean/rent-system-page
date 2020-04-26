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
                  <div ref="allocations" class="allocation-item" v-for="(item, index) of allocationInfo" :key="index" v-show="index < 6">
                    <div class="iconfont" v-html="item.allocationUnicode"></div>
                    <span>{{item.allocationWord}}</span>
                  </div>
                  <div class="show-more" @click="showMoreAllocation" v-if="showMore">更多</div>
                  <div class="pack-up" @click="packUpAllocation" v-if="!showMore">收起</div>
              </div>
          </div>
          <div class="chum-info">
              <h2>室友信息</h2>
              <table>
              <thead>
                <tr>
                    <td width="100px">房间</td>
                    <td width="120px">状态</td>
                    <td width="90px">室友</td>
                    <td width="100px">建筑面积</td>
                    <td width="90px">独卫</td>
                    <td width="90px">淋浴</td>
                    <td width="90px">阳台</td>
                    <td width="120px">租金</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) of chumInfo" :key="index">
                  <!-- 房间 -->
                  <td>{{item.room}}</td>
                  <!-- 状态 -->
                  <td v-if="item.state === '已出租'"><div class="rent-out">{{item.state}}</div></td>
                  <td v-else-if="item.state === '当前房间'"><div class="current-room">{{item.state}}</div></td>
                  <td v-else><div id="110" class="not-rent"
                    @mouseover="mouseoverHtml($event)"
                    @mouseout="mouseoutHtml($event)"
                    @click="viewProperty($event)">{{item.state}}</div></td>
                  <!-- 室友 -->
                  <td>{{item.chum}}</td>
                  <!-- 建筑面积 -->
                  <td>{{item.areaArch}}</td>
                  <!-- 独卫 -->
                  <td v-if="item.toilet === 'yes'"><i class="el-icon-success"></i></td>
                  <td v-else><i class="el-icon-error"></i></td>
                  <!-- 淋浴 -->
                  <td v-if="item.bathroom === 'yes'"><i class="el-icon-success"></i></td>
                  <td v-else><i class="el-icon-error"></i></td>
                  <!-- 阳台 -->
                  <td v-if="item.balcony === 'yes'"><i class="el-icon-success"></i></td>
                  <td v-else><i class="el-icon-error"></i></td>
                  <!-- 租金 -->
                  <td>{{item.rent}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="community-profile">
            <h2>小区简介</h2>
            <div>
              <div class="community-pic">
                <img src="@/assets/community.jpg">
              </div>
              <div class="community-info">
                <h2>苹果社区南区</h2>
                <div class="village-item">
                  <span class="title">建筑年代</span>
                  <span class="info">2000</span>
                </div>
                <div class="village-item">
                  <span class="title">建筑类型</span>
                  <span class="info">塔板结合</span>
                </div>
                <div class="village-item">
                  <span class="title">供暖方式</span>
                  <span class="info">集体供暖</span>
                </div>
                <div class="village-item">
                  <span class="title">绿化率</span>
                  <span class="info">35%</span>
                </div>
                <div class="village-item">
                  <span class="title">容积率</span>
                  <span class="info">0.036</span>
                </div>
                <div class="village-item property">
                  <span class="title">物业公司</span>
                  <span class="info">深圳市万泽房地产有限公司</span>
                </div>
                <div class="village-item property">
                  <span class="title">物业电话</span>
                  <span class="info">075525815427</span>
                </div>
              </div>
            </div>
            <div class="more-room">苹果社区南区小区<span>15</span>套在租房源</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainInfo',
  data () {
    return {
      showMore: true,
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
        rent: '2530 元/月'
      }, {
        room: 'C房间',
        state: '可出租',
        chum: '--',
        areaArch: '10㎡',
        toilet: 'yes',
        bathroom: 'yes',
        balcony: 'no',
        rent: '2230 元/月'
      }],
      allocationInfo: [{
        allocationUnicode: '&#xe619;',
        allocationWord: '智能锁'
      }, {
        allocationUnicode: '&#xe64f;',
        allocationWord: '路由器'
      }, {
        allocationUnicode: '&#xe63f;',
        allocationWord: '冰箱'
      }, {
        allocationUnicode: '&#xe601;',
        allocationWord: '微波炉'
      }, {
        allocationUnicode: '&#xe735;',
        allocationWord: '洗衣机'
      }, {
        allocationUnicode: '&#xe645;',
        allocationWord: '热水器'
      }, {
        allocationUnicode: '&#xe666;',
        allocationWord: '浴霸'
      }, {
        allocationUnicode: '&#xe604;',
        allocationWord: '衣柜'
      }, {
        allocationUnicode: '&#xe643;',
        allocationWord: '床垫'
      }, {
        allocationUnicode: '&#xe651;',
        allocationWord: '空调'
      }, {
        allocationUnicode: '&#xe608;',
        allocationWord: '床'
      }, {
        allocationUnicode: '&#xe611;',
        allocationWord: '桌子'
      }, {
        allocationUnicode: '&#xe616;',
        allocationWord: '椅子'
      }]
    }
  },
  methods: {
    showMoreAllocation () {
      for (var item of this.$refs.allocations) {
        item.style.display = 'inline-block'
      }
      this.showMore = false
    },
    packUpAllocation () {
      var count = 0
      for (var item of this.$refs.allocations) {
        if (count >= 6) {
          item.style.display = 'none'
        }
        count++
      }
      this.showMore = true
    },
    mouseoverHtml (e) {
      e.currentTarget.innerHTML = '查看'
    },
    mouseoutHtml (e) {
      e.currentTarget.innerHTML = '可出租'
    },
    viewProperty (e) {
      this.$router.push('/room/' + e.currentTarget.id)
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
              color: #c2c2c7;
            }
          .show-more,.pack-up{
            display: inline-block;
            background-color: rgba(0,0,0,.03);
            border-radius: 40px;
            color: rgba(0,0,0,.6);
            font-size: 12px;
            height: 40px;
            line-height: 40px;
            margin: 8px 0 0 10px;
            width: 40px;
            text-align: center;
            transform: translateY(-20px);
            cursor: pointer;
          }
        .chum-info{
          margin-bottom: 50px;
        }
          .chum-info thead{
            color: #909399;
            font-weight: 700;
            font-size: 16px;
          }
          .chum-info tr{
            background-color: #fff;
          }
          .chum-info thead td{
            border-bottom: 1px solid #ebeef5;
            padding: 12px 0;
            vertical-align: middle;
            text-align: left;
            position: relative;
          }
          .chum-info tbody td{
            border-bottom: 1px solid #ebeef5;
            padding: 12px 0;
            vertical-align: middle;
            text-align: left;
            position: relative;
            font-size: 14px;
            color: #606266;
            font-weight: 400;
          }
          .rent-out{
            background: #c2c2c7;
            border: 1px solid #f1f1f1;
            color: #fff;
            cursor: default;
            width: 70px;
            border-radius: 13px;
            text-align: center;
            padding: 5px 0;
          }
          .current-room{
            background: #0080008f;
            border: 1px solid #f1f1f1;
            color: #fff;
            cursor: default;
            width: 70px;
            border-radius: 13px;
            text-align: center;
            padding: 5px 0;
          }
          .not-rent{
            background: #ff961e;
            border: 1px solid #f1f1f1;
            color: #fff;
            cursor: default;
            width: 70px;
            border-radius: 13px;
            text-align: center;
            padding: 5px 0;
            cursor: pointer;
          }
          .not-rent:hover{
            background: #fff;
            border: 1px solid #ff961e;
            color: #ff961e;
          }
          .chum-info .el-icon-success{
            font-size: 20px;
            color: #0080008f;
          }
          .chum-info .el-icon-error{
            font-size: 20px;
            color: #c2c2c7;
          }
        .community-profile{
          margin-bottom: 50px;
        }
          .community-pic{
            display: inline-block;
            height: 305px;
            overflow: hidden;
            width: 407px;
          }
          .community-pic img{
            width: 100%;
          }
          .community-info{
            display: inline-block;
            position: absolute;
            margin-left: 25px;
            width: 600px;
          }
            .community-info h2{
              margin-bottom: 0;
            }
            .village-item{
              font-size: 18px;
              display: inline-block;
              width: 250px;
              margin-top: 15px;
            }
              .village-item .title{
                color: rgba(0,0,0,.4);
                display: inline-block;
                min-width: 90px;
              }
              .village-item .info{
                color: rgba(0,0,0,.85);
              }
            .property{
              display: block;
              width: 100%;
            }
          .more-room{
            text-align: center;
            width: 800px;
            padding: 12px;
            border: 1px solid #d4dadb;
            cursor: pointer;
            font-size: 17px;
          }
          .more-room:hover{
            background-color: rgba(0,0,0,.04);;
          }
</style>
