<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的预约</span>
      </div>
      <div class="content">
        <template>
          <el-table :data="orderData" style="width: 100%">
            <el-table-column prop="orderSerial" label="约看订单" width="130"></el-table-column>
            <el-table-column prop="roomTitle" label="房源信息" width="280"></el-table-column>
            <el-table-column prop="stewardName" label="管家姓名" width="100"></el-table-column>
            <el-table-column prop="stewardPhone" label="管家联系方式" width="120"></el-table-column>
            <el-table-column prop="orderState" label="约看状态" width="90"
              :filters="[{ text: '未约看', value: '未约看' }, { text: '已约看', value: '已约看' }]"
              :filter-method="filterAppointState"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.orderState === '未约看' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.orderState}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="orderTime" label="约看时间"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button size="mini" @click="handlePayClick(scope.$index, scope.row)">支付</el-button>
                <el-button size="mini" type="danger" @click="handleDelClick(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 支付弹框 -->
            <el-dialog title="支付" :visible.sync="payDialog" width="30%">
              <div class="pay-way">
                <el-radio v-model="payWay" label="1">月付</el-radio>
              </div>
              <div class="pay-way">
                <el-radio v-model="payWay" label="2">季付</el-radio>
              </div>
              <div class="pay-way">
                <el-radio v-model="payWay" label="3">半年付</el-radio>
              </div>
              <div class="pay-way">
                <el-radio v-model="payWay" label="4">年付</el-radio>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="payDialog = false">取 消</el-button>
                <el-button type="primary" @click="payOrderClick">确 定</el-button>
              </span>
            </el-dialog>
        </template>
      </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Order',
  data () {
    return {
      orderData: [],
      payDialog: false,
      payWay: '',
      orderSerial: ''
    }
  },
  methods: {
    handleDelClick (index, row) {
      for (var i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].orderSerial === row.orderSerial) {
          this.orderData.splice(i, 1)
          axios.get('/api/deleteOrder?orderSerial=' + row.orderSerial)
            .then(res => {
              if (res.data.status === 109) {
                this.$router.push('/')
                this.$message.error('您尚未登录！')
              } else if (res.data.status === 0) {
                this.$message({
                  message: '删除预约成功！',
                  type: 'success'
                })
              }
            })
          break
        }
      }
    },
    filterAppointState (value, row) {
      return row.appointState === value
    },
    getOrderInfo () {
      axios({
        url: '/api/getOrderInfo',
        data: {
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 109) {
            this.$router.push('/')
            this.$message.error('您尚未登录！')
          } else {
            this.orderData = res.data.data
          }
        })
    },
    handlePayClick (index, row) {
      this.payDialog = true
      this.orderSerial = row.orderSerial
    },
    payOrderClick () {
      if (this.payWay === '') {
        this.$message({
          message: '请选择支付方式',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/payOrderClick',
        data: {
          orderSerial: this.orderSerial,
          payWay: this.payWay
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 109) {
            this.$router.push('/')
            this.$message.error('您尚未登录！')
          } else if (res.data.status === 116) {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          } else {
            this.payDialog = false
            this.$message({
              message: '支付成功！',
              type: 'success'
            })
            for (var i = 0; i < this.orderData.length; i++) {
              if (this.orderData[i].orderSerial === this.orderSerial) {
                this.orderData.splice(i, 1)
                break
              }
            }
          }
        })
    }
  },
  mounted () {
    this.getOrderInfo()
  }
}
</script>

<style scoped>
  .pay-way{
    margin: 10px auto;
  }
</style>
