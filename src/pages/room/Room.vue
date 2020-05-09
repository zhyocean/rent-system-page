<template>
  <div>
    <home-header></home-header>
    <room-detail :roomInfo="roomInfo"></room-detail>
    <room-main-info :chumInfo="roomInfo.chumInfo"
                    :communityInfo="roomInfo.communityInfo"
                    :allocation="roomInfo.allocation"
                    :houseBrief="roomInfo.houseBrief"></room-main-info>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import RoomDetail from './components/Detail'
import RoomMainInfo from './components/MainInfo'
import HomeFooter from '../home/components/Footer'
import axios from 'axios'

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
      roomInfo: ''
    }
  },
  methods: {
    getRoomInfo () {
      var url = location.href
      url = url.substr(url.indexOf('#') + 7)
      axios({
        url: '/api/getRoomInfo',
        data: {
          roomId: url
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            var data = res.data.data
            this.roomInfo = data
          } else {
            this.$message.error(res.data.message)
          }
        })
    }
  },
  mounted () {
    this.getRoomInfo()
  }
}
</script>

<style>
</style>
