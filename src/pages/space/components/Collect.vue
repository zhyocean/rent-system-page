<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的收藏</span>
      </div>
      <div v-if="collectRooms.length > 0">
        <div class="content">
          <el-card class="card" :body-style="{ padding: '0px' }" v-for="(item, index) of collectRooms" :key="index">
            <router-link :to="'/room/'+item.id">
              <img :src="item.roomPic" class="card-img">
            </router-link>
            <div class="card-content">
              <router-link :to="'/room/'+item.id" class="card-router">
                <span class="card-title">{{item.houseName}}</span>
              </router-link>
              <div class="bottom clearfix">
              <time class="describe">
                <span class="room-area">{{item.buildArea}}㎡</span> | <span class="room-floor">{{item.floor}}层</span> | <span class="room-rent">￥{{item.rent}}</span></time>
                <el-button :id="item.id" type="text" class="button" @click="deleteButton($event)">删除</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <!-- <el-pagination class="paging" background layout="prev, pager, next" :total="1000"></el-pagination> -->
      </div>
      <div v-if="collectRooms.length === 0">
        <div class="card-empty">
            这里空空如也
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Collect',
  data () {
    return {
      collectRooms: []
    }
  },
  methods: {
    getCollectInfo () {
      axios({
        url: '/api/getCollectInfo',
        data: {
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 109) {
            this.$router.push('/')
            this.$message.error('您尚未登录！')
          } else if (res.data.status === 0) {
            this.collectRooms = res.data.data
          }
        })
    },
    deleteButton (e) {
      var cardId = parseInt(e.currentTarget.id)
      for (var i = 0; i < this.collectRooms.length; i++) {
        if (this.collectRooms[i].id === cardId) {
          this.collectRooms.splice(i, 1)
          axios.get('/api/deleteCollectRoom?roomId=' + cardId)
            .then(res => {
              if (res.data.status === 109) {
                this.$router.push('/')
                this.$message.error('您尚未登录！')
              } else if (res.data.status === 0) {
                this.$message({
                  message: '删除收藏成功！',
                  type: 'success'
                })
              }
            })
          break
        }
      }
    }
  },
  mounted () {
    this.getCollectInfo()
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
      height: 200px;
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
