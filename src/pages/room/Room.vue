<template>
  <div>
    <home-header></home-header>
    <room-detail></room-detail>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import RoomDetail from './components/Detail'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Rent',
  components: {
    HomeHeader,
    RoomDetail,
    HomeFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
