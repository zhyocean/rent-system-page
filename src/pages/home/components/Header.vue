<template>
  <el-row :gutter="20" class="header-row">
    <el-col :span="4" :offset="3">
      <router-link to="/">
        <img class="header_logo" src="@/assets/home/header_logo.png" alt="">
      </router-link>
      <div class="now-city">
        <el-dropdown  @command="changeCity">
          <span class="iconfont el-dropdown-link" style="color:#fff;margin-left: 7px;">&#xe638;{{this.$store.state.city}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) of this.$store.state.citys" :key="index" :command="item">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
    <el-col :span="7" :offset="3">
      <el-menu :default-active="activeIndex" class="el-menu-demo header-col" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="header-word">
          <router-link class="header-word-router" to="/">
            首页
          </router-link>
        </el-menu-item>
        <el-menu-item index="2" class="header-word">
          <router-link class="header-word-router" to="/rent">
            租房
          </router-link>
        </el-menu-item>
        <el-menu-item index="3" class="header-word">服务</el-menu-item>
        <el-menu-item index="4" class="header-word">生活</el-menu-item>
      </el-menu>
      <div class="header-log-reg">
        <a class="rj-login" @click="loginDialogVisible  = true">登录</a>
        <a class="rj-line">|</a>
        <a class="rj-register" @click="registerDialogVisible  = true">注册</a>
      </div>
    </el-col>
    <!-- 登录模态框 -->
    <el-dialog title="登录" :visible.sync="loginDialogVisible" width="30%" center>
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth" v-if="loginMethod === 'phone-login'">
          <el-input class="dialog-code-input" v-model="form.authCode" autocomplete="off" placeholder="请输入验证码"></el-input>
          <el-button class="dialog-code-button" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" v-if="loginMethod === 'account-login'">
          <el-input v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="rj-confrim">
        <span>登录即代表同意</span><a>《如家用户协议》</a><span>及</span><a>《如家隐私政策》</a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">登 录</el-button>
        <span class="swich-accont-hook" v-if="loginMethod === 'account-login'" @click="swichAccontHook">手机验证码登录</span>
        <span class="swich-accont-hook" v-if="loginMethod === 'phone-login'" @click="swichAccontHook">账号密码登录</span>
      </span>
    </el-dialog>
    <!-- 注册模态框 -->
    <el-dialog title="注册" :visible.sync="registerDialogVisible" width="30%" center>
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input class="dialog-code-input" v-model="form.authCode" autocomplete="off" placeholder="请输入验证码"></el-input>
          <el-button class="dialog-code-button" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="rj-confrim">
        <el-checkbox v-model="checked"><span>我已阅读并同意</span><a>《自如用户协议》</a><span>及</span><a>《自如隐私政策》</a></el-checkbox>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">注 册</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
      loginDialogVisible: false,
      registerDialogVisible: false,
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
      formLabelWidth: '70px',
      loginMethod: 'phone-login'
    }
  },
  methods: {
    swichAccontHook () {
      this.loginMethod = (this.loginMethod === 'account-login' ? 'phone-login' : 'account-login')
    },
    changeCity (command) {
      this.$store.commit('commitCity', command)
    }
  }
}
</script>

<style>
  .header-row{
    border-bottom: solid 1px #e6e6e6;
    position: relative;
    width: 100%;
  }
    .header_logo{
      height: 60px;
    }
    .now-city{
      display: inline-block;
      position: absolute;
      top: 30%;
      margin-left: 15px;
      font-size: 14px;
      background-color: #a6adac;
      border-radius: 13px;
      width: 68px;
      height: 26px;
      line-height: 26px;
      cursor: pointer;
    }
    .header-col{
      border-bottom: solid 0px #fff;
    }
      .header-word{
        font-size: 16px;
      }
        .el-menu.el-menu--horizontal{
          border-bottom: solid 0px #fff;
        }
          .header-word-router{
            text-decoration: none;
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
    .swich-accont-hook{
      display: block;
      font-size: 17px;
      color: #ff961e;
      line-height: 20px;
      text-align: center;
      margin-top: 20px;
      cursor: pointer;
    }
</style>
