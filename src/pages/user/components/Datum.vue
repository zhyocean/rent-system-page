<template>
  <div class="wrapper">
    <el-col :span="3">
      <div class="head-portrait">
        <img src="https://image.ziroom.com/g2m3/M00/CD/94/ChAZVF6asm2AP4i6AAKy0xCDtGs316.jpg">
      </div>
      <el-menu default-active="1" class="el-menu-vertical-demo navigation">
        <el-menu-item index="1">
          <i class="iconfont">&#xe60a;</i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="iconfont">&#xe76d;</i>
          <span slot="title">证件信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <div class="main">
          <div class="title">
              <span>个人信息</span>
          </div>
          <div class="content">
            <div class="item">
              <div class="item-title head-portrait-title">头像</div>
              <img src="https://image.ziroom.com/g2m3/M00/CD/94/ChAZVF6asm2AP4i6AAKy0xCDtGs316.jpg">
              <div class="change-head-portrait">
                <input class="head-portrait-input" type="file"/>
                <el-button class="head-portrait-word" type="warning">更改头像</el-button>
                <p>仅支持JPG、PNG格式，文件小于3M。</p>
              </div>
            </div>
            <el-divider class="item-line"></el-divider>
            <div class="item">
              <div class="item-title">昵称</div>
              <input class="item-input" type="text">
            </div>
            <div class="item">
              <div class="item-title">手机号</div>
              <div class="item-content">19940790216</div>
              <span class="change-user-info">修改</span>
            </div>
            <div class="item">
              <div class="item-title">邮箱</div>
              <div class="item-content">19940790216@163.com</div>
              <span class="change-user-info">修改</span>
            </div>
            <div class="item">
              <div class="item-title">密码</div>
              <div class="item-content">**********</div>
              <span class="change-user-info">修改</span>
            </div>
            <el-button class="save-button" type="warning">保存</el-button>
          </div>
      </div>
    </el-col>
  </div>
</template>

<script>

export default {
  name: 'Datum',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .wrapper{
    width: 1190px;
    margin: 0 auto;
    margin-top: 50px;
  }
    .head-portrait{
      text-align: center;
      border-right: solid 1px #e6e6e6;
      padding-bottom: 15px;
    }
    .head-portrait img{
      width: 120px;
      border-radius: 50%;
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
        margin: 30px auto;
      }
      .content{
        padding-left: 40px;
      }
        .content .item{
          margin-bottom: 30px;
        }
          .item .item-title{
            display: inline-block;
            width: 120px;
          }
          .head-portrait-title{
            transform: translateY(-40px);
          }
          .item img{
            width: 120px;
          }
          .change-head-portrait{
            display: inline-block;
            margin-left: 30px;
            color: #999;
          }
            .head-portrait-input{
              z-index: 3;
              position: absolute;
              transform: translateY(-40px);
              width: 38px;
              height: 96px;
              width: 97px;
              height: 39px;
              opacity: 0;
            }
            .head-portrait-word{
              z-index: 2;
              position: absolute;
              transform: translateY(-40px);
            }
          .item-line{
              margin: 0 auto 30px;
          }
          .item-content{
            display: inline-block;
          }
          .item-input{
            width: 280px;
            border: solid 1px #ccc;
            padding: 0 10px;
            height: 40px;
            border-radius: 5px;
            color: #999;
          }
          .item .item-content{
            color: #999;
          }
          .change-user-info{
            text-decoration: none;
            color: #ffa001;
            margin-left: 15px;
            cursor: pointer;
          }
          .change-user-info:hover{
            text-decoration: underline;
          }
        .save-button{
          margin-left: 120px;
        }
</style>
