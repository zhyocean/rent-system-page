<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的收藏</span>
      </div>
      <div v-if="cardItems.length > 0">
        <div class="content">
          <el-card class="card" :body-style="{ padding: '0px' }" v-for="(item, index) of cardItems" :key="index">
            <router-link to="/room/110">
              <img :src="item.roomImg" class="card-img">
            </router-link>
            <div class="card-content">
              <router-link to="/room/110" class="card-router">
                <span class="card-title">{{item.roomTitle}}</span>
              </router-link>
              <div class="bottom clearfix">
              <time class="describe">
                <span class="room-area">{{item.roomArea}}</span> | <span class="room-floor">{{item.roomFloor}}</span> | <span class="room-rent">{{item.roomRent}}</span></time>
                <el-button :id="item.roomId" type="text" class="button" @click="deleteButton($event)">删除</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <el-pagination class="paging" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <div v-if="cardItems.length === 0">
        <div class="card-empty">
            这里空空如也
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Collect',
  data () {
    return {
      cardItems: [{
        roomId: 12,
        roomImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        roomTitle: '整租·叠翠庭苑2室1厅-南北',
        roomArea: '86㎡',
        roomFloor: '1/28层',
        roomRent: '￥8600'
      }, {
        roomId: 13,
        roomImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        roomTitle: '整租·叠翠庭苑2室1厅-南北',
        roomArea: '86㎡',
        roomFloor: '1/28层',
        roomRent: '￥1600'
      }
      ]
    }
  },
  methods: {
    deleteButton (e) {
      var cardId = parseInt(e.currentTarget.id)
      for (var i = 0; i < this.cardItems.length; i++) {
        if (this.cardItems[i].roomId === cardId) {
          this.cardItems.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style scoped>
  .card{
    width: 210px;
    display: inline-block;
    margin: 0 5px 10px 5px;
  }
    .card-img {
      width: 100%;
      display: block;
      cursor: pointer;
    }
    .card-content{
      padding: 14px;
    }
    .card-router{
      text-decoration: none;
    }
      .card-title{
        font-size: 14px;
        color: #ff961e;
        cursor: pointer;
      }
    .describe {
      font-size: 13px;
      color: #999;
    }
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    .button {
      padding: 0;
      float: right;
    }
    .clearfix:before,.clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  .paging{
    text-align: center;
    margin-bottom: 10px;
  }
  .card-empty{
    text-align: center;
    color: #999;
    margin-top: 50px;
    font-size: 18px;
  }
</style>
