<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的预约</span>
      </div>
      <div class="content">
        <template>
          <el-table :data="orderData" style="width: 100%">
            <el-table-column prop="appointOrder" label="约看订单" width="130"></el-table-column>
            <el-table-column prop="houseInfo" label="房源信息" width="280"></el-table-column>
            <el-table-column prop="stewardName" label="管家姓名" width="100"></el-table-column>
            <el-table-column prop="stewardPhone" label="管家联系方式" width="120"></el-table-column>
            <el-table-column prop="appointState" label="约看状态" width="90"
              :filters="[{ text: '未约看', value: '未约看' }, { text: '已约看', value: '已约看' }]"
              :filter-method="filterAppointState"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.appointState === '未约看' ? 'primary' : 'success'"
                  disable-transitions>{{scope.row.appointState}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="appointTime" label="约看时间"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button size="mini" @click="handlePayClick(scope.$index, scope.row)">支付</el-button>
                <el-button size="mini" type="danger" @click="handleDelClick(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      orderData: [{
        appointOrder: '10236579512',
        houseInfo: '刘家窑 福臻家园 次卧 朝东 A室',
        stewardName: '王小虎',
        stewardPhone: '19940790216',
        appointState: '已约看',
        appointTime: '2019-05-09'
      }, {
        appointOrder: '10236579513',
        houseInfo: '刘家窑 福臻家园 次卧 朝东 A室',
        stewardName: '王小虎',
        stewardPhone: '19940790216',
        appointState: '未约看',
        appointTime: '2019-05-09'
      }, {
        appointOrder: '10236579514',
        houseInfo: '刘家窑 福臻家园 次卧 朝东 A室',
        stewardName: '王小虎',
        stewardPhone: '19940790216',
        appointState: '已约看',
        appointTime: '2019-05-09'
      }, {
        appointOrder: '10236579515',
        houseInfo: '刘家窑 福臻家园 次卧 朝东 A室',
        stewardName: '王小虎',
        stewardPhone: '19940790216',
        appointState: '已约看',
        appointTime: '2019-05-09'
      }]
    }
  },
  methods: {
    handleDelClick (index, row) {
      for (var i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].appointOrder === row.appointOrder) {
          this.orderData.splice(i, 1)
        }
      }
    },
    filterAppointState (value, row) {
      return row.appointState === value
    }
  }
}
</script>

<style scoped>
</style>
