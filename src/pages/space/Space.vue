<template>
  <div>
    <user-header></user-header>
    <space-card :userInfo="userInfo"></space-card>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'

import UserHeader from '../user/components/Header'
import SpaceCard from './components/Card'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Space',
  components: {
    UserHeader,
    SpaceCard,
    HomeFooter
  },
  data () {
    return {
      userInfo: {
        phone: '',
        headPortrait: ''
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
          if (res.data.status === 0) {
            var data = res.data.data
            this.userInfo.phone = data.phone
            this.userInfo.headPortrait = data.headPortrait
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
