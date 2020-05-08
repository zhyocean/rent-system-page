<template>
  <div>
    <home-header></home-header>
    <rent-search
      :area="area"
      :subway="subway"
    ></rent-search>
    <rent-result :houseResources="houseResources"></rent-result>
    <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../home/components/Header'
import RentSearch from './components/Search'
import RentResult from './components/Result'
import HomeFooter from '../home/components/Footer'

export default {
  name: 'Rent',
  components: {
    HomeHeader,
    RentSearch,
    RentResult,
    HomeFooter
  },
  data () {
    return {
      area: [],
      subway: [],
      houseResources: []
    }
  },
  methods: {
    getSearchInfo () {
      axios.get('/local/search.json')
        .then(this.handleGetSearchInfo)
    },
    handleGetSearchInfo (res) {
      res = res.data
      for (var thisCity in res) {
        if (thisCity === this.$store.state.city) {
          this.area = res[thisCity]['area']
          this.subway = res[thisCity]['subway']
        }
      }
    },
    getRoomInfoByCity () {
      axios({
        url: '/api/getRoomInfoByCity',
        data: {
          city: this.$store.state.city
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.houseResources = res.data.data
          }
        })
    }
  },
  mounted () {
    this.getSearchInfo()
    this.getRoomInfoByCity()
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
