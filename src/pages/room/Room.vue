<template>
  <div>
    <home-header></home-header>
    <room-detail></room-detail>
    <room-main-info></room-main-info>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import RoomDetail from './components/Detail'
import RoomMainInfo from './components/MainInfo'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Rent',
  components: {
    HomeHeader,
    RoomDetail,
    HomeFooter,
    RoomMainInfo
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
