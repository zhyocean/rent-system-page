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
          <div v-if="formStep === 1">
            <div class="form-item">
              <span class="form-title">手机号</span>
              <span class="form-content">{{userInfo.phoneNum}}</span>
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入短信验证码">
              <el-button class="get-code-button" type="warning">获取验证码</el-button>
            </div>
            <el-button class="next-button" type="warning" @click="next">下一步</el-button>
          </div>
          <div v-if="formStep === 2">
            <div class="form-item">
              <span class="form-title">新手机号</span>
              <input type="text" class="form-input" placeholder="输入新的手机号">
            </div>
            <div class="form-item">
              <span class="form-title">手机验证码</span>
              <input type="text" class="form-input" placeholder="输入短信验证码">
              <el-button class="get-code-button" type="warning">获取验证码</el-button>
            </div>
            <el-button class="next-button" type="warning" @click="next">下一步</el-button>
          </div>
          <div v-if="formStep === 3" class="change-success">
            <i class="iconfont change-success-icon">&#xe671;</i>手机号码修改完成！3秒后自动跳转到个人中心
          </div>
        </div>
      </div>
    </div>
    <div class="main" v-if="content === 'change-email'">
      <div class="title">
        <span>修改邮箱</span>
      </div>
      <div class="steps">
        <el-steps :active="active" finish-status="success">
          <el-step title="验证身份"></el-step>
          <el-step title="验证新邮箱"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>
        <div class="form-info">
          <div class="form-item">
            <span class="form-title">邮箱</span>
            <span class="form-content">{{userInfo.emailNum}}</span>
          </div>
          <div class="form-item">
            <span class="form-title">邮箱验证码</span>
            <input type="text" class="form-input" placeholder="输入邮箱验证码">
            <el-button class="get-code-button" type="warning">获取验证码</el-button>
          </div>
        </div>
        <el-button class="next-button" type="warning" @click="next">下一步</el-button>
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
            <div class="form-item">
            <span class="form-title">验证方式</span>
            <span class="form-content">手机号验证</span>
          </div>
          <div class="form-item">
            <span class="form-title">手机号</span>
            <span class="form-content">{{userInfo.phoneNum}}</span>
          </div>
          <div class="form-item">
            <span class="form-title">手机验证码</span>
            <input type="text" class="form-input" placeholder="输入手机验证码">
            <el-button class="get-code-button" type="warning">获取验证码</el-button>
          </div>
        </div>
        <el-button class="next-button" type="warning" @click="next">下一步</el-button>
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
            <div class="form-item">
            <span class="form-title">验证方式</span>
            <span class="form-content">手机号验证</span>
          </div>
          <div class="form-item">
            <span class="form-title">手机号</span>
            <span class="form-content">{{userInfo.phoneNum}}</span>
          </div>
          <div class="form-item">
            <span class="form-title">手机验证码</span>
            <input type="text" class="form-input" placeholder="输入手机验证码">
            <el-button class="get-code-button" type="warning">获取验证码</el-button>
          </div>
        </div>
        <el-button class="next-button" type="warning" @click="next">下一步</el-button>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'StepInfo',
  props: {
    content: String,
    userInfo: Object
  },
  data () {
    return {
      active: 0,
      formStep: 1
    }
  },
  methods: {
    next () {
      this.active++
      if (this.active >= 2) {
        this.active = 3
      }
      this.formStep++
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
              width: 100px;
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
