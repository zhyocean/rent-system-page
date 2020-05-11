<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的合同</span>
      </div>
      <div class="content" v-if="contractData.length > 0">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item,index) of contractData" :key="index" :title="item.contractName" :name="index">
            <div class="contract-item">
              <span>合同编号：</span><span>{{item.contractSerial}}</span>
            </div>
            <div class="contract-item">
              <span>租金：</span><span class="item-span rent">{{item.rent}}元/月</span>
              <span>付款方式：</span><span class="item-span rent">{{item.payWay}}</span>
              <el-tag type="warning" effect="dark" v-if="item.contractState === 0">签约中</el-tag>
              <el-tag type="info" effect="dark" v-else>已过期</el-tag>
              <span></span>
            </div>
            <template>
              <el-table class="contract-order" :data="item.billRecords" style="width: 80%">
                <el-table-column prop="serialNumber" label="序号"></el-table-column>
                <el-table-column prop="billSerial" label="账单编号" width="150"></el-table-column>
                <el-table-column prop="consumeProject" label="消费项目" width="180"></el-table-column>
                <el-table-column prop="consumeMoney" label="消费金额"></el-table-column>
                <el-table-column prop="billDate" label="账单日期" width="100"></el-table-column>
                <el-table-column prop="paymentState" label="支付状态" width="100"
                  :filters="[{ text: '未支付', value: '未支付' }, { text: '已支付', value: '已支付' }]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.paymentState === '未支付' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.paymentState}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="支付操作" width="100">
                  <template slot-scope="scope">
                    <el-button size="mini" type="warning" @click="handlePayClick(scope.$index, scope.row)">支付订单</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div v-if="contractData.length === 0">
        <div class="card-empty">
            这里空空如也
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contract',
  data () {
    return {
      activeName: 0,
      contractData: []
    }
  },
  methods: {
    filterTag (value, row) {
      return row.paymentState === value
    },
    getContractInfo () {
      axios({
        url: '/api/getContractInfo',
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
            this.contractData = res.data.data
          }
        })
    },
    handlePayClick (index, row) {
      axios({
        url: '/api/payBill',
        data: {
          billSerial: row.billSerial
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
          } else if (res.data.status === 118) {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          } else {
            this.$message({
              message: '支付成功！',
              type: 'success'
            })
            row.paymentState = '已支付'
          }
        })
    }
  },
  mounted () {
    this.getContractInfo()
  }
}
</script>

<style scoped>
  .content >>> .el-collapse-item__header{
    font-size: 19px;
  }
    .contract-item{
      margin: 5px 0 5px;
    }
      .item-span{
        color: #FD8145;
      }
      .rent{
        margin-right: 50px;
      }
      .contract-order{
        margin-top: 25px;
      }
</style>
