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

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarousel,
    HomeService,
    HomeFooter
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
