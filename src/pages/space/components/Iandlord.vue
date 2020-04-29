<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>发布房源</span>
      </div>
      <div class="content">
        <div v-if="show === 0">
            <template>
              <el-table :data="houseResourceInfos" style="width: 100%">
                <el-table-column prop="houseName" label="房屋名称" width="250"></el-table-column>
                <el-table-column prop="rent" label="租金(季付)" width="180"></el-table-column>
                <el-table-column prop="toward" label="朝向"></el-table-column>
                <el-table-column prop="floor" label="楼层"></el-table-column>
                <el-table-column prop="lift" label="电梯"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="houseResourceHandle(scope.$index, scope.row)" size="mini">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          <el-button class="iandlord-button" type="warning" @click="rentalBtn">发布房源</el-button>
          <!-- 发布房源模态框 -->
          <el-dialog title="发布房源" :visible.sync="houseResourceForm" width="60%">
            <el-form class="house-resource-form" :model="houseResourceData">
              <el-form-item label="房屋名称" label-width="120px">
                <el-select v-model="houseResourceData.houseName">
                  <el-option label="A室" value="A室"></el-option>
                  <el-option label="B室" value="B室"></el-option>
                  <el-option label="C室" value="C室"></el-option>
                  <el-option label="D室" value="D室"></el-option>
                  <el-option label="E室" value="E室"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="租金" label-width="120px">
                <el-input type="number" v-model="houseResourceData.rent" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="建筑面积" label-width="120px">
                <el-input type="number" v-model="houseResourceData.buildArea" autocomplete="off">
                  <template slot="append">㎡</template>
                </el-input>
              </el-form-item>
              <el-form-item label="朝向" label-width="120px">
                <el-input v-model="houseResourceData.toward" autocomplete="off" placeholder="如：东南"></el-input>
              </el-form-item>
              <el-form-item label="户型" label-width="120px">
                <el-input v-model="houseResourceData.dooModel" autocomplete="off" placeholder="如：2室1厅"></el-input>
              </el-form-item>
              <el-form-item label="位置" label-width="120px">
                <el-input v-model="houseResourceData.location" autocomplete="off" placeholder="如：小区距xx站步行约xx米"></el-input>
              </el-form-item>
              <el-form-item label="楼层" label-width="120px">
                <el-input v-model="houseResourceData.floor" autocomplete="off" placeholder="如：5/28"></el-input>
              </el-form-item>
              <el-form-item label="电梯" label-width="120px">
                  <el-select v-model="houseResourceData.lift">
                    <el-option label="有" value="有"></el-option>
                    <el-option label="无" value="无"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="年代" label-width="120px">
                <el-input type="number" v-model="houseResourceData.era " autocomplete="off">
                  <template slot="append">年建成</template>
                </el-input>
              </el-form-item>
              <el-form-item label="房屋设施" label-width="120px">
                <el-select v-model="houseResourceData.allocation" multiple filterable allow-create default-first-option placeholder="请选择房屋设施">
                  <el-option v-for="item in this.$store.state.allocation" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="area-tag" label="区域" label-width="120px">
                <el-tag :key="tag" v-for="tag in houseResourceData.areaTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                  <el-input class="input-new-tag" v-if="inputAreaVisible" v-model="inputAreaValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
              </el-form-item>
              <el-form-item class="area-tag" label="房间设备" label-width="120px">
                <el-checkbox-group v-model="houseResourceData.facility">
                  <el-checkbox label="独卫"></el-checkbox>
                  <el-checkbox label="淋浴"></el-checkbox>
                  <el-checkbox label="阳台"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="房间照片" label-width="120px">
                <el-checkbox-group>
                  <el-upload
                  class="upload-demo"
                  action="/api/updateRoomPic"
                  :on-remove="handleRemove"
                  :on-success="updateSuccess"
                  :before-upload="handleBeforeUpload"
                  :file-list="houseResourceData.roomPics"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <span slot="tip" class="el-upload__tip upload-room-pic">上传图片大小不能超过1MB</span>
                </el-upload>
                </el-checkbox-group>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="houseResourceForm = false">取 消</el-button>
              <el-button type="primary" @click="houseResourceForm = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div v-if="show === 1">
          <div class="not-certificate">您未进行房东验证，请尽快进行验证！</div>
            <el-button class="iandlord-button" type="warning" @click="dialogIandlordForm = true">成为房东</el-button>
            <!-- 成为房东模态框 -->
            <el-dialog title="房东委托" :visible.sync="dialogIandlordForm" width="60%">
              <el-form class="iandlord-form" :model="iandlordData">
                <el-form-item label="姓名*" label-width="120px">
                  <el-input v-model="iandlordData.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话*" label-width="120px">
                  <el-input v-model="iandlordData.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="房屋城市*" label-width="120px">
                  <el-select class="houseCity-select" v-model="iandlordData.houseCity">
                    <el-option v-for="(item, index) of this.$store.state.citys" :key="index" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="小区*" label-width="120px">
                  <el-input v-model="iandlordData.community.communityName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="建筑年代" label-width="120px">
                  <el-input type="number" v-model="iandlordData.community.buildingAge" autocomplete="off">
                    <template slot="append">年建成</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="建筑类型" label-width="120px">
                  <el-input v-model="iandlordData.community.buildingType" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="供暖方式" label-width="120px">
                  <el-select class="houseCity-select" v-model="iandlordData.community.heatingMethod">
                    <el-option label="有" value="有"></el-option>
                    <el-option label="无" value="无"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="绿化率" label-width="120px">
                  <el-input type="number" :step="0.01" v-model="iandlordData.community.greeningRate" autocomplete="off">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="容积率" label-width="120px">
                  <el-input type="number" :step="0.00001" v-model="iandlordData.community.plotRatio" autocomplete="off">
                  </el-input>
                </el-form-item>
                <el-form-item label="物业公司" label-width="120px">
                  <el-input v-model="iandlordData.community.propertyCompany" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="物业电话" label-width="120px">
                  <el-input v-model="iandlordData.community.propertyPhone" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogIandlordForm = false">取 消</el-button>
                <el-button type="primary" @click="dialogIandlordForm = false">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
    </div>
  </el-col>
</template>

<script>

export default {
  name: 'Iandlord',
  data () {
    return {
      dialogIandlordForm: false,
      houseResourceForm: false,
      iandlordData: {
        name: '',
        phone: '',
        houseCity: this.$store.state.city,
        community: {
          communityName: '',
          buildingAge: '',
          buildingType: '',
          heatingMethod: '',
          greeningRate: '',
          plotRatio: '',
          propertyCompany: '',
          propertyPhone: ''
        }
      },
      show: 0,
      houseResourceInfos: [{
        houseName: ' 刘家窑 福臻家园 次卧 朝东 A室',
        rent: '8600',
        toward: '朝南北',
        floor: '1/28',
        lift: '有',
        houseUrl: '/room/110'
      }],
      houseResourceData: {
        houseName: '',
        rent: '',
        buildArea: '',
        toward: '',
        dooModel: '',
        location: '',
        floor: '',
        lift: '',
        era: '',
        allocation: '',
        areaTags: [],
        facility: [],
        roomPics: []
      },
      inputAreaVisible: false,
      inputAreaValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.houseResourceData.areaTags.splice(this.houseResourceData.areaTags.indexOf(tag), 1)
    },
    showInput () {
      this.inputAreaVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputAreaValue = this.inputAreaValue
      if (inputAreaValue) {
        this.houseResourceData.areaTags.push(inputAreaValue)
      }
      this.inputAreaVisible = false
      this.inputAreaValue = ''
    },
    houseResourceHandle (index, row) {
      this.$router.push(row.houseUrl)
    },
    handleRemove (file, fileList) {
      for (var i = 0; i <= this.houseResourceData.roomPics.length; i++) {
        if (file.url === this.houseResourceData.roomPics[i].url) {
          this.houseResourceData.roomPics.splice(i, 1)
          return
        }
      }
    },
    updateSuccess (response, file, fileList) {
      if (response.status === 109) {
        this.$router.push('/')
        this.$message.error('您尚未登录！')
      }
      var roomPic = {
        name: file.name,
        url: response.data
      }
      this.houseResourceData.roomPics.push(roomPic)
    },
    handleBeforeUpload (file) {
      if (file.size > 1048576) {
        this.$message.error('图片大小超出限制！')
        return false
      }
      return true
    },
    rentalBtn () {
      this.houseResourceData.roomPics = []
      this.houseResourceForm = true
    },
    phoneCheck (phone) {
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (!(telStr.test(phone))) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
  .not-certificate{
    padding: 30px 0;
    color: #999;
  }
  .iandlord-button{
    float: right;
    margin: 30px 50px 0 0;
  }
  .houseCity-select{
    width: 100%;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .house-resource-form >>> .el-form-item{
    width: 400px;
    display: inline-block;
  }
  .iandlord-form >>> .el-form-item{
    width: 400px;
    display: inline-block;
  }
  .area-tag{
      width: 100%!important;
  }
  .el-select{
    width: 100%;
  }
  .upload-room-pic{
    margin-left: 10px;
  }
</style>
