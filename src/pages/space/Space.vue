<template>
  <div>
    <user-header></user-header>
    <space-card></space-card>
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
    }
  },
  methods: {
    getCollectInfo () {
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
          }
        })
    }
  },
  mounted () {
    this.getCollectInfo()
  }
}
</script>

<style>
</style>
