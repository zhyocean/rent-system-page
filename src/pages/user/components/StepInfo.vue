<template>
  <el-col :span="21">
    <div class="main" v-if="content === 'change-phone'">
      <div class="title">
        <span>修改手机号</span>
      </div>
      <div class="steps">
        <el-steps :active="active" finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="验证新手机号"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <div class="form-info">
          <div v-show="formStep === 1">
            <div class="form-item">
              <span class="form-title">手机号</span>
              <span class="form-content">{{phone}}</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入短信验证码" v-model="authCode">
              <el-button id="auth-code-btn" class="get-code-button" type="warning" @click="sendAuthCode()" :disabled="authCodeBtn">获取验证码</el-button>
            </div>
            <el-button class="next-button" type="warning" @click="checkAuthCodeNext">下一步</el-button>
          </div>
          <div v-show="formStep === 2">
            <div class="form-item">
              <span class="form-title">新手机号</span>
              <input type="text" class="form-input" placeholder="输入新的手机号" v-model="newPhone">
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入短信验证码" v-model="newPhoneAuthCode">
              <el-button id="new-phone-auth-code-btn" class="get-code-button" type="warning" @click="sendNewPhoneAuthCode()" :disabled="newPhoneAuthCodeBtn">获取验证码</el-button>
            </div>
            <el-button class="next-button" type="warning" @click="changePhoneTwoNext">下一步</el-button>
          </div>
          <div v-show="formStep === 3" class="change-success">
            <i class="iconfont change-success-icon">&#xe671;</i>手机号码修改完成！请重新登录！
          </div>
        </div>
      </div>
    </div>
    <div class="main" v-if="content === 'change-password'">
      <div class="title">
        <span>修改密码</span>
      </div>
      <div class="steps">
        <el-steps :active="active" finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="重置密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <div class="form-info">
          <div v-show="formStep === 1">
            <div class="form-item">
              <span class="form-title">验证方式</span>
              <span class="form-content">手机号验证</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机号</span>
              <span class="form-content">{{phone}}</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入手机验证码" v-model="authCode">
              <el-button id="auth-code-btn" @click="sendAuthCode()" class="get-code-button" type="warning" :disabled="authCodeBtn">获取验证码</el-button>
            </div>
            <el-button id="auth-code-btn" class="next-button" type="warning" @click="checkAuthCodeNext">下一步</el-button>
          </div>
          <div v-show="formStep === 2">
            <div class="form-item">
              <span class="form-title">设置密码</span>
              <input type="password" class="form-input" placeholder="设置您的登陆密码" v-model="password">
            </div>
            <div class="form-item">
              <span class="form-title">验证密码</span>
              <input type="password" class="form-input" placeholder="再次输入您的登陆密码" v-model="surePassword">
            </div>
            <el-button class="next-button" type="warning" @click="changePasswordTwoNext">下一步</el-button>
          </div>
          <div v-show="formStep === 3" class="change-success">
            <i class="iconfont change-success-icon">&#xe671;</i>密码修改完成！3秒后自动跳转到个人中心
          </div>
        </div>
      </div>
    </div>
    <div class="main" v-if="content === 'change-id-card'">
      <div class="title">
        <span>修改证件信息</span>
      </div>
      <div class="steps">
        <el-steps :active="active" finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="验证新证件"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <div class="form-info">
          <div v-show="formStep === 1">
            <div class="form-item">
              <span class="form-title">验证方式</span>
              <span class="form-content">手机号验证</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机号</span>
              <span class="form-content">{{phone}}</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入手机验证码" v-model="authCode">
              <el-button id="auth-code-btn" @click="sendAuthCode()" class="get-code-button" type="warning" :disabled="authCodeBtn">获取验证码</el-button>
            </div>
            <el-button class="next-button" type="warning" @click="checkAuthCodeNext">下一步</el-button>
          </div>
          <div v-show="formStep === 2">
            <div class="form-item">
              <span class="form-title">真实姓名</span>
              <input type="text" class="form-input" placeholder="输入您的真实姓名" v-model="certInfo.realName">
            </div>
            <div class="form-item">
              <span class="form-title">证件号码</span>
              <input type="text" class="form-input" placeholder="输入您的证件号码" v-model="certInfo.idNumber">
            </div>
            <el-button class="next-button" type="warning" @click="changeCertTwoNext">下一步</el-button>
          </div>
          <div v-show="formStep === 3" class="change-success">
            <i class="iconfont change-success-icon">&#xe671;</i>证件信息修改完成！3秒后自动跳转到个人中心
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StepInfo',
  props: {
    content: String,
    userInfo: Object,
    phone: String,
    email: String
  },
  data () {
    return {
      active: 0,
      formStep: 1,
      authCodeBtn: false,
      newPhoneAuthCodeBtn: false,
      authCode: '',
      newPhoneAuthCode: '',
      certInfo: {
        realName: '',
        idNumber: ''
      },
      newPhone: '',
      password: '',
      surePassword: ''
    }
  },
  methods: {
    checkAuthCodeNext () {
      if (this.authCode === '') {
        this.$message({
          message: '请输入验证码',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/checkAuthCode',
        data: {
          phone: this.phone,
          authCode: this.authCode
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.next()
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    changePasswordTwoNext () {
      if (this.password === '') {
        this.$message({
          message: '请输入您的登录密码',
          type: 'warning'
        })
        return
      }
      if (this.surePassword === '') {
        this.$message({
          message: '再次输入您的登录密码',
          type: 'warning'
        })
        return
      }
      if (this.surePassword !== this.password) {
        this.$message.error('再次确认密码不正确')
        return
      }
      axios({
        url: '/api/changePassword',
        data: {
          password: this.password
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 111) {
            this.next()
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    changeCertTwoNext () {
      if (this.certInfo.realName === '') {
        this.$message({
          message: '请输入您的真实姓名',
          type: 'warning'
        })
        return
      }
      if (this.certInfo.idNumber === '') {
        this.$message({
          message: '请输入您的证件号码',
          type: 'warning'
        })
        return
      }
      if (!this.checkIdNumber(this.certInfo.idNumber)) {
        this.$message({
          message: '请输入有效的证件号码',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/registerCertInfo',
        data: {
          realName: this.certInfo.realName,
          idNumber: this.certInfo.idNumber
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 110) {
            this.next()
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    changePhoneTwoNext () {
      if (!this.newPhoneCheck()) {
        return
      }
      if (this.newPhoneAuthCode === '') {
        this.$message({
          message: '请输入验证码',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/changePhone',
        data: {
          newPhone: this.newPhone,
          authCode: this.newPhoneAuthCode
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.$message({
              message: '手机号修改成功，请重新登录！',
              type: 'success'
            })
            this.$router.push('/')
          } else {
            this.$message.error(res.data.message)
          }
        })
    },
    next () {
      this.active++
      if (this.active >= 2) {
        this.active = 3
      }
      this.formStep++
      if (this.active === 3) {
        setTimeout(() => {
          this.$router.go(0)
        }, 3000)
      }
    },
    sendAuthCode () {
      axios({
        url: '/api/getAuthCode',
        data: {
          phone: this.phone
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
            this.authCodeBtn = true
            let countTime = 60
            this.timeCount('auth-code-btn', countTime)
          } else {
            this.$message.error(res.data.message)
            this.authCodeBtn = false
          }
        })
    },
    sendNewPhoneAuthCode () {
      if (!this.newPhoneCheck()) {
        return
      }
      axios({
        url: '/api/getAuthCode',
        data: {
          phone: this.newPhone
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
            this.newPhoneAuthCodeBtn = true
            let countTime = 60
            this.timeCount('new-phone-auth-code-btn', countTime)
          } else {
            this.$message.error(res.data.message)
            this.newPhoneAuthCodeBtn = false
          }
        })
    },
    timeCount (info, countTime) {
      setTimeout(() => {
        if (countTime > 0) {
          document.getElementById(info).innerText = countTime + '秒重新发送'
          countTime -= 1
          this.timeCount(info, countTime)
        } else {
          if (info === 'auth-code-btn') {
            this.authCodeBtn = false
          } else {
            this.newPhoneAuthCodeBtn = false
          }
          document.getElementById(info).innerText = '获得验证码'
        }
      }, 1000)
    },
    checkIdNumber (idNumber) {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      return reg.test(idNumber)
    },
    phoneCheck (phone) {
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (!(telStr.test(phone))) {
        return false
      } else {
        return true
      }
    },
    newPhoneCheck () {
      if (this.newPhone === '') {
        this.$message({
          message: '请输入新的手机号',
          type: 'warning'
        })
        return false
      }
      if (!this.phoneCheck(this.newPhone)) {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        })
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .main{
      margin-left: 20px;
      border: solid 1px #eee;
      min-height: 500px;
    }
    .main .title{
      background: #fafafa;
      height: 50px;
      padding: 0 20px;
      font-size: 17px;
      border-bottom: solid 1px #eee;
      line-height: 50px;
      }
      .steps{
        width: 700px;
        margin: 50px auto;
      }
        .form-info{
          margin-top: 50px;
        }
          .form-item{
            margin-bottom: 30px;
          }
            .form-title{
              display: inline-block;
              width: 120px;
            }
            .form-content{
              display: inline-block;
              color: #999;
            }
            .form-input{
              width: 150px;
              border: solid 1px #ccc;
              padding: 0 10px;
              height: 40px;
              border-radius: 5px;
              color: #999;
            }
            .get-code-button{
                margin-left: 10px;
            }
          .next-button{
            margin-left: 120px;
          }
          .change-success{
            margin-bottom: 30px;
            font-size: 18px;
            color: #0080008f;
          }
            .change-success-icon{
              font-size: 20px;
              margin: 0 5px 0 20px;
            }
</style>
