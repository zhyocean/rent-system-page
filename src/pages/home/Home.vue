<template>
  <div>
    <home-header></home-header>
    <home-carousel></home-carousel>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeCarousel from './components/Carousel'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCarousel
  }
}
</script>

<style>

</style>
