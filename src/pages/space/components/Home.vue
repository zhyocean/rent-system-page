<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的小屋</span>
      </div>
      <div class="content">
        <div class="monitoring-title">房屋温湿度实时监控</div>
        <div class="temperature">
          <div id="temperature" :style="{width: '300px', height: '300px'}"></div>
          <div>
            <p>1、适宜居住的室内温度是20℃左右</p>
            <p>2、如果室温超过25℃，人体就开始从外界吸收热量，建议打开空调</p>
          </div>
        </div>
        <div class="humidity">
          <div id="humidity" :style="{width: '300px', height: '300px'}"></div>
          <div>
            <p>1、湿度夏季以40%~80%为宜，冬季以30%~60%为宜</p>
            <p>2、空气湿度低于40％，易造成灰尘、细菌吸附</p>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      temperature: 17,
      humidity: 29
    }
  },
  methods: {
    getTemperature () {
      let columnar = this.$echarts.init(document.getElementById('temperature'))
      columnar.setOption({
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '室内温度',
          type: 'gauge',
          min: -30,
          max: 50,
          detail: {formatter: '{value}°'},
          data: [{value: this.temperature, name: '温度'}]
        }]
      })
    },
    getHumidity () {
      let columnar = this.$echarts.init(document.getElementById('humidity'))
      columnar.setOption({
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '室内湿度',
          type: 'gauge',
          min: 20,
          max: 100,
          detail: {formatter: '{value}%'},
          data: [{value: this.humidity, name: '湿度'}]
        }]
      })
    }
  },
  mounted () {
    this.getTemperature()
    this.getHumidity()
  }
}
</script>

<style scoped>
  .monitoring-title{
    text-align: center;
    font-size: 30px;
    margin: 10px auto 20px;
    font-weight: 500;
  }
  .temperature{
    display: inline-block;
    margin-left: 50px;
    width: 40%;
  }
    .temperature p{
      margin: 0;
      color: #999;
    }
  .humidity{
    display: inline-block;
    width: 40%;
    margin-left: 50px;
  }
    .humidity p{
      margin: 0;
      color: #999;
    }
</style>
