<template>
  <el-row :gutter="20" class="header-row">
    <el-col :span="4" :offset="3">
      <img class="header_logo" src="@/assets/header_logo.png" alt="">
    </el-col>
    <el-col :span="7" :offset="3">
      <el-menu :default-active="activeIndex" class="el-menu-demo header-col" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="header-word">首页</el-menu-item>
        <el-menu-item index="2" class="header-word">租房</el-menu-item>
        <el-menu-item index="3" class="header-word">服务</el-menu-item>
        <el-menu-item index="4" class="header-word">生活</el-menu-item>
      </el-menu>
      <div class="header-log-reg">
        <a class="rj-login" @click="centerDialogVisible  = true">登录</a>
        <a class="rj-line">|</a>
        <a class="rj-register">注册</a>
      </div>
    </el-col>
    <el-dialog title="登录" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input class="dialog-code-input" v-model="form.authCode" autocomplete="off" placeholder="请输入验证码"></el-input>
          <el-button class="dialog-code-button" plain>获取验证码</el-button>
        </el-form-item>
      </el-form>
      <div class="rj-confrim">
        <span>登录即代表同意</span><a>《如家用户协议》</a><span>及</span><a>《如家隐私政策》</a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">登 录</el-button>
        <span id="swichAccontHook" @click="swichAccontHook">账号密码登录</span>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      centerDialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '70px'
    }
  },
  methods: {
    swichAccontHook () {
      alert('qr')
    }
  }
}
</script>

<style>
  .header-row{
    border-bottom: solid 1px #e6e6e6;
    position: relative;
  }
    .header_logo{
      height: 60px;
    }
    .header-col{
      border-bottom: solid 0px #fff;
    }
      .header-word{
        font-size: 16px;
      }
    .header-log-reg{
      margin-left: 330px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
      .header-log-reg a{
        color: #3dbcc6;
        cursor: pointer;
      }
      .rj-line{
        margin: 0 10px 0 10px;
      }
    .dialog-code-input{
      width: 65%;
    }
    .dialog-code-button{
      color: rgba(255,150,30,.8);
    }
    .rj-confrim{
      text-align: center;
    }
      .rj-confrim span{
        color: rgba(0,0,0,.4);
      }
      .rj-confrim a{
        color: #ff961e !important;
        text-decoration: underline;
      }
    #swichAccontHook{
      display: block;
      font-size: 17px;
      color: #ff961e;
      line-height: 20px;
      text-align: center;
      margin-top: 20px;
      cursor: pointer;
    }
</style>
