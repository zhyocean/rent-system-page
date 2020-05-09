<template>
  <div>
    <home-header></home-header>
    <rent-search
      :area="area"
      :subway="subway"
      @startLookingHouse="getSearchRoomInfo"
      @witchSearchCriteria="witchSearchCriteria"
    ></rent-search>
    <rent-result :houseResources="houseResources"
                 :searchCriteria="searchCriteria"
                 :showItem="showItem"></rent-result>
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
      houseResources: [],
      searchCriteria: {
        area: '不限',
        subway: '不限',
        areaStand: '不限',
        subwayStand: '不限',
        price: '不限',
        roomNum: '不限',
        roomType: '不限',
        feature: '不限'
      },
      showItem: 'default'
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
          break
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
    },
    getSearchRoomInfo (data) {
      this.houseResources = data
    },
    witchSearchCriteria (data) {
      this.searchCriteria = data
      this.showItem = 'default'
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
