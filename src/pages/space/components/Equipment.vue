<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>我的设施</span>
      </div>
      <div class="content">
        <template>
          <el-table :data="deviceDate" style="width: 100%">
            <el-table-column prop="serialNum" label="序号" width="50"></el-table-column>
            <el-table-column prop="deviceName" label="设备名称" width="180"></el-table-column>
            <el-table-column prop="deviceNum" label="设备编号" width="180"></el-table-column>
            <el-table-column prop="deviceState" label="设备状态" width="100"
              :filters="[{ text: '报修中', value: '报修中' }, { text: '正常', value: '正常' }]"
              :filter-method="filterDevice"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.deviceState === '报修中' ? 'danger' : 'primary'" disable-transitions>{{scope.row.deviceState}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="300"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="examineHandle(scope.$index, scope.row)" size="mini">查看</el-button>
                <el-button @click="examineRepair(scope.$index, scope.row)" class="repair-btn" size="mini" type="danger">报修</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-button type="warning" class="add-device-btn" @click="dialogAddDevice = true">添加</el-button>
        <!-- 查看设备信息模态框 -->
        <el-dialog title="设备信息" :visible.sync="dialogExamine" width="30%">
          <div class="device-info">
            <p>设备名称：{{deviceInfo.deviceName}}</p><p>设备编号：{{deviceInfo.deviceNum}}</p>
            <p>设备状态：{{deviceInfo.deviceState}}</p><p>报修人：{{deviceInfo.operator}}</p>
            <p>报修时间：{{deviceInfo.operatorDate}}</p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogExamine = false">取 消</el-button>
            <el-button type="primary" @click="dialogExamine = false">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 报修模态框 -->
        <el-dialog class="repair" title="报修" :visible.sync="dialogRepair" width="30%">
          <el-form :model="deviceForm">
            <el-form-item label="设备名称：" label-width="120px">
              <el-input v-model="deviceForm.deviceName" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="上门时间" label-width="120px">
              <el-date-picker v-model="deviceForm.visitTime" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="联系电话" label-width="120px">
              <el-input v-model="deviceForm.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogRepair = false">取 消</el-button>
            <el-button type="primary" @click="dialogRepair = false">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 添加设备模态框 -->
        <el-dialog class="addDevice" title="添加设备" :visible.sync="dialogAddDevice" width="30%">
          <el-form :model="deviceForm">
            <el-form-item label="设备名称：" label-width="120px">
              <el-input v-model="addDeviceForm.deviceName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="设备名称：" label-width="120px">
              <el-switch class="add-device-switch" v-model="addDeviceForm.deviceState" active-color="#ff4949" inactive-color="#13ce66"
              active-text="报修中"
              inactive-text="正常">
            </el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogAddDevice = false">取 消</el-button>
            <el-button type="primary" @click="dialogAddDevice = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </el-col>
</template>

<script>

export default {
  name: 'Equipment',
  data () {
    return {
      dialogExamine: false,
      dialogRepair: false,
      dialogAddDevice: false,
      deviceInfo: {
        deviceName: '客厅桌子',
        deviceNum: '51965135785',
        deviceState: '正常',
        operator: '',
        operatorDate: ''
      },
      deviceDate: [{
        serialNum: 1,
        deviceName: '客厅桌子',
        deviceNum: '51965135785',
        deviceState: '正常'
      }, {
        serialNum: 2,
        deviceName: '客厅椅子',
        deviceNum: '51965135786',
        deviceState: '报修中'
      }, {
        serialNum: 3,
        deviceName: '卫生间淋浴',
        deviceNum: '51965135784',
        deviceState: '正常'
      }, {
        serialNum: 4,
        deviceName: '卫生间马桶',
        deviceNum: '51965135787',
        deviceState: '正常'
      }],
      deviceForm: {
        deviceName: '',
        visitTime: '',
        phone: ''
      },
      addDeviceForm: {
        deviceName: '',
        deviceState: false
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
      this.dialogRepair = true
      this.deviceForm.deviceName = row.deviceName
    }
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
