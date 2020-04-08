<template>
  <div>
    <home-header></home-header>
    <room-search></room-search>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import RoomSearch from './components/Search'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Room',
  components: {
    HomeHeader,
    RoomSearch,
    HomeFooter
  }
}
</script>

<style>
</style>
