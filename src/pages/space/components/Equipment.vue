<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的设施</span>
      </div>
      <div class="content">
        <template>
          <el-table :data="deviceDate" style="width: 100%">
            <el-table-column prop="serialNum" label="序号" width="70"></el-table-column>
            <el-table-column prop="facilityName" label="设备名称" width="150"></el-table-column>
            <el-table-column prop="facilitySerial" label="设备编号" width="180"></el-table-column>
            <el-table-column prop="facilityState" label="设备状态" width="100"
              :filters="[{ text: '报修中', value: '报修中' }, { text: '正常', value: '正常' }]"
              :filter-method="filterDevice"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.facilityState === '报修中' ? 'danger' : 'primary'" disable-transitions>{{scope.row.facilityState}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="repairMan" label="报修人" width="180"></el-table-column>
            <el-table-column prop="orderTime" label="上门时间" width="180"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="examineRepair(scope.$index, scope.row)" class="repair-btn" size="mini" type="danger">报修</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-button type="warning" class="add-device-btn" @click="dialogAddDevice = true">添加</el-button>
        <!-- 报修模态框 -->
        <el-dialog class="repair" title="报修" :visible.sync="dialogRepair" width="30%">
          <el-form :model="deviceForm">
            <el-form-item label="设备名称：" label-width="120px">
              <el-input v-model="deviceForm.deviceName" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="上门时间" label-width="120px">
              <el-date-picker format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="deviceForm.orderTime" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="报修人" label-width="120px">
              <el-input v-model="deviceForm.repairMan" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" label-width="120px">
              <el-input v-model="deviceForm.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogRepair = false">取 消</el-button>
            <el-button type="primary" @click="repairHandle">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 添加设备模态框 -->
        <el-dialog class="addDevice" title="添加设备" :visible.sync="dialogAddDevice" width="30%">
          <el-form :model="addFacilityForm">
            <el-form-item label="设备名称：" label-width="120px">
              <el-input v-model="addFacilityForm.facilityName" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogAddDevice = false">取 消</el-button>
            <el-button type="primary" @click="addFacility">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Equipment',
  data () {
    return {
      dialogExamine: false,
      dialogRepair: false,
      dialogAddDevice: false,
      deviceDate: [],
      deviceForm: {
        deviceName: '',
        orderTime: '',
        phone: '',
        facilitySerial: '',
        repairMan: ''
      },
      addFacilityForm: {
        facilityName: ''
      }
    }
  },
  methods: {
    filterDevice (value, row) {
      return row.deviceState === value
    },
    examineHandle (index, row) {
      this.dialogExamine = true
      console.log(row.deviceNum)
    },
    examineRepair (index, row) {
      if (row.facilityState === '报修中') {
        this.$message({
          message: '该设备已处于报修中',
          type: 'warning'
        })
        return
      }
      this.dialogRepair = true
      this.deviceForm.deviceName = row.facilityName
      this.deviceForm.facilitySerial = row.facilitySerial
    },
    getFacilityInfo () {
      axios({
        url: '/api/getFacilityInfo',
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
            this.deviceDate = res.data.data
          }
        })
    },
    addFacility () {
      if (this.addFacilityForm.facilityName === '') {
        this.$message({
          message: '请输入设备名称',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/addFacility',
        data: {
          facilityName: this.addFacilityForm.facilityName
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
          } else if (res.data.status === 0) {
            this.$message({
              message: '添加设施成功',
              type: 'success'
            })
            this.deviceDate.push({
              serialNum: this.deviceDate.length + 1,
              facilitySerial: res.data.data,
              facilityName: this.addFacilityForm.facilityName,
              facilityState: '正常'
            })
            this.dialogAddDevice = false
          }
        })
    },
    repairHandle () {
      if (this.deviceForm.orderTime === '') {
        this.$message({
          message: '请选择上门时间',
          type: 'warning'
        })
        return
      }
      if (this.deviceForm.repairMan === '') {
        this.$message({
          message: '请输入报修人',
          type: 'warning'
        })
        return
      }
      if (this.deviceForm.phone === '') {
        this.$message({
          message: '请输入联系电话',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/repairFacility',
        data: {
          orderTime: this.deviceForm.orderTime,
          phone: this.deviceForm.phone,
          facilitySerial: this.deviceForm.facilitySerial,
          repairMan: this.deviceForm.repairMan
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
          } else if (res.data.status === 115) {
            this.$message({
              message: res.data.message,
              type: 'warning'
            })
          } else {
            this.$message({
              message: '报修设备成功',
              type: 'success'
            })
            for (var i = 0; i < this.deviceDate.length; i++) {
              if (this.deviceDate[i].facilitySerial === this.deviceForm.facilitySerial) {
                this.deviceDate[i].facilityState = '报修中'
                this.deviceDate[i].repairMan = this.deviceForm.repairMan
                this.deviceDate[i].orderTime = this.deviceForm.orderTime
                break
              }
            }
          }
          this.dialogRepair = false
        })
    }
  },
  mounted () {
    this.getFacilityInfo()
  }
}
</script>

<style scoped>
  .add-device-btn{
    float: right;
    margin-right: 50px;
    margin-top: 30px;
  }
  .repair >>> .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
  }
  .add-device-switch{
    margin-top: 7px;
    display: block
  }
</style>
