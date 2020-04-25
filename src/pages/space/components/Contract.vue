<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的合同</span>
      </div>
      <div class="content">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item,index) of contractData" :key="index" :title="item.title" :name="index">
            <div class="contract-item">
              <span>合同编号：</span><span>{{item.contractNum}}</span>
            </div>
            <div class="contract-item">
              <span>租金：</span><span class="item-span rent">{{item.rent}}元/月</span>
              <span>付款方式：</span><span class="item-span rent">{{item.paymentMethod}}</span>
              <el-tag type="info" effect="dark" v-if="item.contractState === 0">已过期</el-tag>
              <el-tag type="warning" effect="dark" v-else>签约中</el-tag>
              <span></span>
            </div>
            <template>
              <el-table class="contract-order" :data="item.orderData" style="width: 80%">
                <el-table-column prop="serialNumber" label="序号" width="180"></el-table-column>
                <el-table-column prop="consumeDate" label="消费日期" width="180"></el-table-column>
                <el-table-column prop="consumeProject" label="消费项目"></el-table-column>
                <el-table-column prop="consumeMoney" label="消费金额"></el-table-column>
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
                  <el-button size="mini" type="warning" @click="handlePayClick(scope.$index, scope.row)">支付订单</el-button>
                </el-table-column>
              </el-table>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Contract',
  data () {
    return {
      activeName: 0,
      contractData: [
        {
          title: '合同1(深圳) -- 刘家窑 福臻家园 次卧 朝东 A室',
          contractNum: 86943159751,
          rent: '8600',
          paymentMethod: '季付',
          contractState: 0,
          orderData: [{
            serialNumber: '19863514896',
            consumeDate: '2019-06-08',
            consumeProject: '水费',
            consumeMoney: '201元',
            paymentState: '未支付'
          }]
        }, {
          title: '合同1(深圳) -- 刘家窑 福臻家园 次卧 朝东 A室',
          contractNum: 86943159751,
          rent: '8600',
          paymentMethod: '季付',
          contractState: 1,
          orderData: [{
            serialNumber: '19863514896',
            consumeDate: '2019-06-08',
            consumeProject: '水费',
            consumeMoney: '201元',
            paymentState: '已支付'
          },
          {
            serialNumber: '19863514896',
            consumeDate: '2019-06-08',
            consumeProject: '水费',
            consumeMoney: '201元',
            paymentState: '已支付'
          }]
        }
      ]
    }
  },
  methods: {
    filterTag (value, row) {
      return row.paymentState === value
    }
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
