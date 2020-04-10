<template>
  <div>
    <home-header
      :city="city"
    ></home-header>
    <room-search
      :area="area"
      :subway="subway"
    ></room-search>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../home/components/Header'
import RoomSearch from './components/Search'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Room',
  components: {
    HomeHeader,
    RoomSearch,
    HomeFooter
  },
  data () {
    return {
      city: '北京',
      area: [],
      subway: []
    }
  },
  methods: {
    getSearchInfo () {
      axios.get('/api/search.json')
        .then(this.handleGetSearchInfo)
    },
    handleGetSearchInfo (res) {
      res = res.data
      var ret = res.ret
      var data = res.data
      if (ret && data) {
        for (var thisCity in data) {
          if (thisCity === this.city) {
            this.area = data[thisCity]['area']
            this.subway = data[thisCity]['subway']
          }
        }
      }
    }
  },
  mounted () {
    this.getSearchInfo()
  }
}
</script>

<style>
</style>
