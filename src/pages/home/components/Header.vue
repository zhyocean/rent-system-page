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
    <el-col :span="8" :offset="3">
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
      <div class="header-log-reg" v-if="this.$store.state.VERIFIED_ACCOUNT === ''">
        <a class="rj-login" @click="loginDialogVisible  = true">登录</a>
        <a class="rj-line">|</a>
        <a class="rj-register" @click="registerDialogVisible  = true">注册</a>
      </div>
      <div class="header-log-reg" v-else>
        <a class="user-name" @click="userBtnHandle">{{this.$store.state.VERIFIED_ACCOUNT}}</a>
        <a class="logout" @click="logoutBtnHandle">退出</a>
      </div>
    </el-col>
    <!-- 登录模态框 -->
    <el-dialog title="登录" :visible.sync="loginDialogVisible" width="30%" center>
      <el-form :model="loginData">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="loginData.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth" v-show="loginMethod === 'phone-login'">
          <el-input class="dialog-code-input" v-model="loginData.authCode" autocomplete="off" placeholder="请输入验证码"></el-input>
          <el-button id="login-auth-code-btn" @click="sendLogAuthCode()" :disabled="logAuthCodeBtn" class="dialog-code-button">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" v-show="loginMethod === 'account-login'">
          <el-input type="password" v-model="loginData.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="rj-confrim">
        <span>登录即代表同意</span><a>《如家用户协议》</a><span>及</span><a>《如家隐私政策》</a>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="loginBtn">登 录</el-button>
        <span class="swich-accont-hook" v-if="loginMethod === 'account-login'" @click="swichAccontHook">手机验证码登录</span>
        <span class="swich-accont-hook" v-if="loginMethod === 'phone-login'" @click="swichAccontHook">账号密码登录</span>
      </span>
    </el-dialog>
    <!-- 注册模态框 -->
    <el-dialog title="注册" :visible.sync="registerDialogVisible" width="30%" center>
      <el-form :model="registerData">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="registerData.phone" autocomplete="off" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input class="dialog-code-input" v-model="registerData.authCode" autocomplete="off" placeholder="请输入验证码"></el-input>
          <el-button id="register-auth-code-btn" @click="sendRegAuthCode()" class="dialog-code-button" plain :disabled="regAuthCodeBtn">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input type="password" v-model="registerData.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="rj-confrim">
        <el-checkbox v-model="registerConfrim"><span>我已阅读并同意</span><a>《如家用户协议》</a><span>及</span><a>《如家隐私政策》</a></el-checkbox>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="registerBtn">注 册</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
      loginDialogVisible: false,
      registerDialogVisible: false,
      loginData: {
        phone: '',
        authCode: '',
        password: ''
      },
      registerData: {
        phone: '',
        authCode: '',
        password: ''
      },
      formLabelWidth: '70px',
      loginMethod: 'phone-login',
      logAuthCodeBtn: false,
      regAuthCodeBtn: false,
      registerConfrim: false
    }
  },
  methods: {
    getUserLoginInfo () {
      axios.get('/api/getUserLoginInfo')
        .then(res => {
          if (res.data.status === 109) {
            this.$store.commit('verifiedAccount', '')
          } else if (res.data.status === 0) {
            this.$store.commit('verifiedAccount', res.data.data)
          }
        })
    },
    swichAccontHook () {
      this.loginMethod = (this.loginMethod === 'account-login' ? 'phone-login' : 'account-login')
      if (this.loginMethod === 'phone-login') {
        this.loginData.password = ''
      } else {
        this.loginData.authCode = ''
      }
    },
    changeCity (command) {
      this.$store.commit('commitCity', command)
    },
    loginBtn () {
      if (this.loginData.phone === '') {
        this.$message.error('请输入手机号')
        return
      }
      if (!this.phoneCheck(this.loginData.phone)) {
        this.$message.error('请输入正确的手机号')
        return
      }
      if (this.loginMethod === 'phone-login') {
        if (this.loginData.authCode === '') {
          this.$message.error('请输入短信验证码')
          return
        }
      } else if (this.loginMethod === 'account-login') {
        if (this.loginData.password === '') {
          this.$message.error('请输入密码')
          return
        }
      }
      axios.post('/api/login?username=' + this.loginData.phone + '&password=' + this.loginData.password + '&authCode=' + this.loginData.authCode)
        .then(this.getLoginInfo)
    },
    getLoginInfo (res) {
      if (res.data.status === 101) {
        this.$message({
          message: res.data.message,
          type: 'success'
        })
        this.$store.commit('verifiedAccount', res.data.data)
        this.loginDialogVisible = false
      } else {
        this.$message.error(res.data.message)
      }
    },
    registerBtn () {
      if (this.registerData.phone === '') {
        this.$message.error('请输入手机号')
        return
      }
      if (!this.phoneCheck(this.registerData.phone)) {
        this.$message.error('请输入正确的手机号')
        return
      }
      if (this.registerData.authCode === '') {
        this.$message.error('请输入短信验证码')
        return
      }
      if (this.registerData.password === '') {
        this.$message.error('请输入密码')
        return
      }
      if (!this.registerConfrim) {
        this.$message.error('请阅读协议并确认')
        return
      }
      axios({
        url: '/api/registerUser',
        data: {
          phone: this.registerData.phone,
          password: this.registerData.password,
          authCode: this.registerData.authCode
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 104) {
            this.registerDialogVisible = false
            this.$message({
              message: res.data.message + ',快去登录吧',
              type: 'success'
            })
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    userBtnHandle () {
      this.$router.push('/user')
    },
    logoutBtnHandle () {
      axios.get('/api/logout')
        .then(this.getLogoutInfo)
    },
    getLogoutInfo (res) {
      if (res.data.status === 103) {
        this.$store.commit('verifiedAccount', '')
        this.$message({
          message: res.data.message,
          type: 'success'
        })
      } else {
        this.$message.error(res.data.message)
      }
    },
    sendLogAuthCode () {
      if (!this.phoneCheck(this.loginData.phone)) {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/getAuthCode',
        data: {
          phone: this.loginData.phone
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.$message({
              message: '验证码发送成功',
              type: 'success'
            })
            this.logAuthCodeBtn = true
            let countTime = 60
            this.timeCount('login-auth-code-btn', countTime)
          } else {
            this.$message.error(res.data.message)
            this.logAuthCodeBtn = false
          }
        })
    },
    sendRegAuthCode () {
      if (!this.phoneCheck(this.registerData.phone)) {
        this.$message({
          message: '手机号不正确',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/getAuthCode',
        data: {
          phone: this.registerData.phone
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.$message({
              message: '验证码发送成功',
              type: 'success'
            })
            this.regAuthCodeBtn = true
            let countTime = 60
            this.timeCount('register-auth-code-btn', countTime)
          } else {
            this.$message.error(res.data.message)
            this.regAuthCodeBtn = false
          }
        })
    },
    phoneCheck (phone) {
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (!(telStr.test(phone))) {
        return false
      } else {
        return true
      }
    },
    timeCount (idInfo, countTime) {
      setTimeout(() => {
        if (countTime > 0) {
          document.getElementById(idInfo).innerText = countTime + '秒重新发送'
          countTime -= 1
          this.timeCount(idInfo, countTime)
        } else {
          if (idInfo === 'login-auth-code-btn') {
            this.logAuthCodeBtn = false
          } else {
            this.regAuthCodeBtn = false
          }
          document.getElementById(idInfo).innerText = '获得验证码'
        }
      }, 1000)
    }
  },
  mounted () {
    this.getUserLoginInfo()
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
      min-width: 200px;
    }
      .header-log-reg a{
        color: #3dbcc6;
        cursor: pointer;
      }
      .rj-line{
        margin: 0 10px 0 10px;
      }
      .user-name{
        display: inline-block;
        width: 110px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-decoration: underline;
        text-align: right;
      }
      .logout{
        margin-left: 7px;
        position: absolute;
      }
    .dialog-code-input{
      width: 61%;
    }
    .dialog-code-button{
      color: rgba(255,150,30,.8);
      margin-left: 10px;
      padding: 12px 12px;
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
