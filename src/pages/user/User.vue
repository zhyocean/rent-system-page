<template>
  <div>
    <user-header></user-header>
    <user-datum></user-datum>
    <home-footer></home-footer>
  </div>
</template>

<script>
import UserHeader from './components/Header'
import UserDatum from './components/Datum'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'User',
  components: {
    UserHeader,
    UserDatum,
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
