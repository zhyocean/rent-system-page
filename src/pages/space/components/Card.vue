<template>
  <div class="wrapper">
    <el-row>
        <el-col :span="3" class="card">
          <div class="head-portrait">
            <img :src="userInfo.headPortrait">
          </div>
          <el-menu default-active="1" class="el-menu-vertical-demo navigation">
            <el-menu-item index="1" @click="myCollection">
              <i class="iconfont">&#xe77f;</i>
              <span slot="title">我的收藏</span>
            </el-menu-item>
            <el-menu-item index="2" @click="myOrder">
              <i class="iconfont">&#xe705;</i>
              <span slot="title">我的预约</span>
            </el-menu-item>
            <el-menu-item index="3" @click="myContract">
              <i class="iconfont">&#xe66e;</i>
              <span slot="title">我的合同</span>
            </el-menu-item>
            <el-menu-item index="4" @click="myHome">
              <i class="iconfont">&#xe66f;</i>
              <span slot="title">我的小屋</span>
            </el-menu-item>
            <el-menu-item index="5" @click="myEquipment">
              <i class="iconfont">&#xe60b;</i>
              <span slot="title">我的设施</span>
            </el-menu-item>
            <el-menu-item index="6" @click="iandlord">
              <i class="iconfont">&#xe61d;</i>
              <span slot="title">发布房源</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <space-collect v-if="cardShow === 'my-collection'"></space-collect>
        <space-Order v-if="cardShow === 'my-order'"></space-Order>
        <space-contract v-if="cardShow === 'my-contract'"></space-contract>
        <space-home v-if="cardShow === 'my-home'"></space-home>
        <space-equipment v-if="cardShow === 'my-equipment'"></space-equipment>
        <space-landlord v-if="cardShow === 'iandlord'"
        :phone="userInfo.phone"></space-landlord>
    </el-row>
  </div>
</template>
<script>
import SpaceCollect from './Collect'
import SpaceOrder from './Order'
import SpaceContract from './Contract'
import SpaceHome from './Home'
import SpaceEquipment from './Equipment'
import SpaceLandlord from './Landlord'

export default {
  name: 'Card',
  props: {
    userInfo: Object
  },
  data () {
    return {
      cardShow: 'my-collection'
    }
  },
  components: {
    SpaceCollect,
    SpaceOrder,
    SpaceContract,
    SpaceHome,
    SpaceEquipment,
    SpaceLandlord
  },
  methods: {
    myCollection () {
      this.cardShow = 'my-collection'
    },
    myOrder () {
      this.cardShow = 'my-order'
    },
    myContract () {
      this.cardShow = 'my-contract'
    },
    myHome () {
      this.cardShow = 'my-home'
    },
    myEquipment () {
      this.cardShow = 'my-equipment'
    },
    iandlord () {
      this.cardShow = 'iandlord'
    }
  }
}
</script>

<style>
  .wrapper{
    width: 1190px;
    margin: 0 auto;
    margin-top: 50px;
  }
    .card{
      border: solid 1px #eee;
      padding: 15px 10px 10px;
    }
      .head-portrait{
        text-align: center;
        padding-bottom: 15px;
      }
      .head-portrait img{
        width: 120px;
        border-radius: 50%;
      }
      .navigation{
        border: none;
      }
      .navigation i{
        font-size: 18px;
      }
      .navigation span{
        font-size: 17px;
      }
    .main{
      margin-left: 20px;
      border: solid 1px #eee;
      min-height: 550px;
    }
      .main .title{
        background: #fafafa;
        height: 50px;
        padding: 0 20px;
        font-size: 17px;
        border-bottom: solid 1px #eee;
        line-height: 50px;
      }
      .main .content{
        margin: 30px auto 10px;
      }
      .content{
        padding-left: 20px;
      }
</style>
