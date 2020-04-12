<template>
  <div>
    <home-header></home-header>
    <room-search
      :area="area"
      :subway="subway"
    ></room-search>
    <room-result></room-result>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../home/components/Header'
import RoomSearch from './components/Search'
import RoomResult from './components/Result'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Room',
  components: {
    HomeHeader,
    RoomSearch,
    RoomResult,
    HomeFooter
  },
  data () {
    return {
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
          if (thisCity === this.$store.state.city) {
            this.area = data[thisCity]['area']
            this.subway = data[thisCity]['subway']
          }
        }
      }
    }
  },
  mounted () {
    this.getSearchInfo()
  },
  computed: {
    city () {
      return this.$store.state.city
    }
  },
  watch: {
    city () {
      this.getSearchInfo()
    }
  }
}
</script>

<style>
</style>
