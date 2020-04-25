<template>
  <div class="wrapper">
    <el-row>
        <el-col :span="3" class="card">
          <div class="head-portrait">
            <img src="https://image.ziroom.com/g2m3/M00/CD/94/ChAZVF6asm2AP4i6AAKy0xCDtGs316.jpg">
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
            <el-menu-item index="5" @click="equipmentRepair">
              <i class="iconfont">&#xe66f;</i>
              <span slot="title">设备报修</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <space-collect v-if="cardShow === 'my-collection'"></space-collect>
        <space-Order v-if="cardShow === 'my-order'"></space-Order>
        <space-contract v-if="cardShow === 'my-contract'"></space-contract>
        <space-home v-if="cardShow === 'my-home'"></space-home>
        <space-equipment-repair v-if="cardShow === 'equipment-repair'"></space-equipment-repair>
    </el-row>
  </div>
</template>
<script>
import SpaceCollect from './Collect'
import SpaceOrder from './Order'
import SpaceContract from './Contract'
import SpaceHome from './Home'
import SpaceEquipmentRepair from './EquipmentRepair'

export default {
  name: 'Card',
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
    SpaceEquipmentRepair
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
    equipmentRepair () {
      this.cardShow = 'equipment-repair'
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
