<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-service></home-service>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarousel from './components/Carousel'
import HomeService from './components/Service'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarousel,
    HomeService
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
