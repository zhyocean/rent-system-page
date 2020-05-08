<template>
  <div>
    <user-header></user-header>
    <user-datum :userInfo='userInfo' :certInfo="certInfo"></user-datum>
    <home-footer></home-footer>
  </div>
</template>

<script>
import UserHeader from './components/Header'
import UserDatum from './components/Datum'
import HomeFooter from '../home/components/Footer'
import axios from 'axios'

export default {
  name: 'User',
  components: {
    UserHeader,
    UserDatum,
    HomeFooter
  },
  data () {
    return {
      userInfo: {
        phone: '',
        username: '',
        email: '',
        headPortrait: '',
        gender: ''
      },
      certInfo: {
        realName: '',
        idNumber: ''
      }
    }
  },
  methods: {
    getUserInfo () {
      axios({
        url: '/api/getUserInfo',
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
            var data = res.data.data
            this.userInfo.phone = data.phone
            this.userInfo.username = data.username
            this.userInfo.email = data.email
            if (data.gender === 1) {
              this.userInfo.gender = '1'
            } else {
              this.userInfo.gender = '2'
            }
            this.userInfo.headPortrait = data.headPortrait
            this.certInfo.realName = data.realName
            this.certInfo.idNumber = data.idNumber
          }
        })
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style>
</style>
