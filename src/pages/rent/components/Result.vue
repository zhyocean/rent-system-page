<template>
  <div class="wrapper">
      <div class="result-title">
        <p>已为您找到符合条件的 <span class="roomNum">{{houseResources.length}}套</span> 房源 </p>
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
      <div class="pic-list" v-if="houseResources.length !== 0">
        <div class="item" v-for="(item, index) of houseResources" :key="index">
          <router-link :to="'/room/' + item.id">
            <div class="item-title">
              <img :src="item.roomPic" alt="">
            </div>
          </router-link>
          <div class="item-info">
            <h5 class="info-title">
              <el-tag class="item-tag" effect="dark" type="info">签</el-tag>
              <router-link class="room-url" :to="'/room/' + item.id"><a>{{item.houseName}}</a></router-link>
            </h5>
            <div class="room-info">
              <div>
                {{item.buildArea}}㎡ | {{item.floor}}层
              </div>
              <div class="iconfont location">&#xe638;{{item.location}}</div>
            </div>
            <div class="tags">
              <span class="tag">可预签7天</span>
              <span class="tag">深呼吸1.0</span>
              <span class="tag">拿铁4.0</span>
            </div>
            <div class="tips">
              <span class="iconfont">&#xe600;</span>空气质量已检测
            </div>
            <div class="price">
              ￥<span>{{item.rent}}</span>/月
            </div>
          </div>
        </div>
        <!-- <el-pagination class="paging" background layout="prev, pager, next" :total="1000">
        </el-pagination> -->
      </div>
      <div v-else>
        <div class="no-search">
          <img src="@/assets/no_search.png">
          <p>未搜到对应房源，换个搜索条件试试</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Result',
  props: {
    houseResources: Array,
    searchCriteria: Object,
    showItem: String
  },
  data () {
    return {
      priceClickSpy: false,
      areaClickSpy: false
    }
  },
  methods: {
    handleSort (event) {
      if (event.target.id !== '') {
        this.showItem = event.target.id
        var rank = false
        if (event.target.id === 'priceSort') {
          this.priceClickSpy = !this.priceClickSpy
          rank = this.priceClickSpy
        }
        if (event.target.id === 'areaSort') {
          this.areaClickSpy = !this.areaClickSpy
          rank = this.areaClickSpy
        }
        if (rank) {
          rank = 'asc'
        } else {
          rank = 'desc'
        }
        axios({
          url: '/api/getRoomInfoByCityAndSort',
          data: {
            city: this.$store.state.city,
            sort: event.target.id,
            rank: rank,
            area: this.searchCriteria.area,
            subway: this.searchCriteria.subway,
            areaStand: this.searchCriteria.areaStand,
            subwayStand: this.searchCriteria.subwayStand,
            rent: this.searchCriteria.price,
            doorModel: this.searchCriteria.roomNum,
            roomType: this.searchCriteria.roomType,
            feature: this.searchCriteria.feature
          },
          method: 'post',
          header: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            this.houseResources = []
            this.houseResources = res.data.data
          })
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
        margin-bottom: 30px;
        color: rgba(0,0,0,.4);
        margin-right: 21px;
      }
        .item-title{
          height: 270px;
        }
          .item-title img{
            width: 100%;
            height: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        .item-info{
          border: 1px solid rgba(0,0,0,.12);
          padding: 0 16px;
          position: relative;
        }
          .item-tag{
            padding: 1px 2px;
            height: 20px;
            line-height: 16px;
            transform: translateY(-3px);
          }
            .room-url{
              text-decoration: none;
            }
            .info-title a:hover{
              color: #ff961e;
            }
          .info-title{
            margin-bottom: 10px;
          }
            .info-title a{
              color: rgba(0,0,0,.85);
              font-size: 17px;
            }
          .room-info{
            font-size: 12px;
          }
            .location{
              font-size: 12px;
              margin-top: 5px;
            }
          .tags{
            margin-top: 10px;
          }
            .tag{
              background: rgba(0,0,0,.03);
              padding: 6px 10px;
              font-size: 12px;
              margin-right: 5px;
              margin-bottom: 5px;
              border-radius: 2px;
            }
          .tips{
            font-size: 12px;
            margin: 15px 0 10px;
          }
            .tips .iconfont{
              margin-right: 3px;
            }
          .price{
            position: absolute;
            top: 50px;
            right: 30px;
            color: #ff961e;
            font-size: 25px;
          }
      .paging{
        text-align: center;
      }
    .no-search img{
      display: block;
      margin: 0 auto;
      width: 150px;
      height: 150px;
    }
    .no-search p{
      font-size: 12px;
      color: rgba(0,0,0,.2);
      text-align: center;
      margin: 0;
    }
</style>
