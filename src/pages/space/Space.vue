<template>
  <div>
    <user-header></user-header>
    <space-card></space-card>
    <home-footer></home-footer>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
</style>
