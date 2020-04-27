<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-service></home-service>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarousel from './components/Carousel'
import HomeService from './components/Service'
import HomeFooter from './components/Footer'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarousel,
    HomeService,
    HomeFooter
  },
  methods: {
    getUserLoginInfo () {
      axios.get('/api/getUserLoginInfo')
        .then(this.handleUserLoginInfo)
    },
    handleUserLoginInfo (res) {
      if (res.data.status === 109) {
        this.$store.commit('verifiedAccount', '')
      } else if (res.data.status === 0) {
        this.$store.commit('verifiedAccount', res.data.data)
      }
    }
  },
  mounted () {
    this.getUserLoginInfo()
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
