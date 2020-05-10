<template>
  <el-col :span="21">
    <div class="main">
      <div class="title">
        <span>发布房源</span>
      </div>
      <div class="content">
        <div v-if="landlords.length === 0">
          <div class="not-certificate">您未进行房东验证，请尽快进行验证！</div>
            <el-button class="landlord-button" type="warning" @click="dialogLandlordForm = true">成为房东</el-button>
            <!-- 成为房东模态框 -->
            <el-dialog title="房东委托" :visible.sync="dialogLandlordForm" width="60%">
              <el-form class="landlord-form" :model="landlordData">
                <el-form-item label="姓名*" label-width="120px">
                  <el-input v-model="landlordData.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话*" label-width="120px">
                  <el-input v-model="landlordData.phone" autocomplete="off" :value="landlordData.phone" disabled></el-input>
                </el-form-item>
                <el-form-item label="房屋城市*" label-width="120px">
                  <el-select class="houseCity-select" v-model="landlordData.houseCity">
                    <el-option v-for="(item, index) of this.$store.state.citys" :key="index" :label="item" :value="item"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="小区*" label-width="120px">
                  <el-input v-model="landlordData.community.communityName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="建筑年代" label-width="120px">
                  <el-input type="number" v-model="landlordData.community.buildingAge" autocomplete="off">
                    <template slot="append">年建成</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="建筑类型" label-width="120px">
                  <el-input v-model="landlordData.community.buildingType" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="供暖方式" label-width="120px">
                  <el-select class="houseCity-select" v-model="landlordData.community.heatingMethod">
                    <el-option label="有" value="1"></el-option>
                    <el-option label="无" value="0"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="绿化率" label-width="120px">
                  <el-input type="number" :step="0.01" v-model="landlordData.community.greeningRate" autocomplete="off">
                    <template slot="append">%</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="容积率" label-width="120px">
                  <el-input type="number" :step="0.00001" v-model="landlordData.community.plotRatio" autocomplete="off">
                  </el-input>
                </el-form-item>
                <el-form-item label="物业公司" label-width="120px">
                  <el-input v-model="landlordData.community.propertyCompany" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="物业电话" label-width="120px">
                  <el-input v-model="landlordData.community.propertyPhone" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogLandlordForm = false">取 消</el-button>
                <el-button type="primary" @click="landlordFormHandle">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
        <div v-if="landlords.length > 0">
            <template>
              <el-table :data="houseResourceInfos" style="width: 100%">
                <el-table-column prop="houseName" label="房屋名称" width="250"></el-table-column>
                <el-table-column prop="rent" label="租金(季付)" width="180"></el-table-column>
                <el-table-column prop="toward" label="朝向"></el-table-column>
                <el-table-column prop="floor" label="楼层"></el-table-column>
                <el-table-column prop="lift" label="电梯"></el-table-column>
                <el-table-column prop="rentState" label="出租状态"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="houseResourceHandle(scope.$index, scope.row)" size="mini">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          <el-button class="landlord-button" type="warning" @click="rentalBtn">发布房源</el-button>
          <!-- 发布房源模态框 -->
          <el-dialog title="发布房源" :visible.sync="houseResourceForm" width="60%">
            <el-form class="house-resource-form" :model="houseResourceData">
              <el-form-item label="房屋名称*" label-width="120px">
                <el-select v-model="houseResourceData.houseName">
                  <el-option label="A室" value="A室"></el-option>
                  <el-option label="B室" value="B室"></el-option>
                  <el-option label="C室" value="C室"></el-option>
                  <el-option label="D室" value="D室"></el-option>
                  <el-option label="E室" value="E室"></el-option>
                  <el-option label="整租" value="整租"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="租金*" label-width="120px">
                <el-input type="number" v-model="houseResourceData.rent" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="建筑面积*" label-width="120px">
                <el-input type="number" v-model="houseResourceData.buildArea" autocomplete="off">
                  <template slot="append">㎡</template>
                </el-input>
              </el-form-item>
              <el-form-item label="朝向*" label-width="120px">
                <el-input v-model="houseResourceData.toward" autocomplete="off" placeholder="如：东南"></el-input>
              </el-form-item>
              <el-form-item label="户型*" label-width="120px">
                <el-select v-model="houseResourceData.doorModel">
                    <el-option label="1室1厅" value="1室1厅"></el-option>
                    <el-option label="2室1厅" value="2室1厅"></el-option>
                    <el-option label="3室1厅" value="3室1厅"></el-option>
                    <el-option label="4室1厅" value="4室1厅"></el-option>
                    <el-option label="5室1厅" value="5室1厅"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="位置*" label-width="120px">
                <el-input v-model="houseResourceData.location" autocomplete="off" placeholder="如：小区距xx站步行约xx米"></el-input>
              </el-form-item>
              <el-form-item label="楼层*" label-width="120px">
                <el-input v-model="houseResourceData.floor" autocomplete="off" placeholder="如：5/28"></el-input>
              </el-form-item>
              <el-form-item label="电梯*" label-width="120px">
                  <el-select v-model="houseResourceData.lift">
                    <el-option label="有" value="1"></el-option>
                    <el-option label="无" value="0"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="年代*" label-width="120px">
                <el-input type="number" v-model="houseResourceData.era " autocomplete="off">
                  <template slot="append">年建成</template>
                </el-input>
              </el-form-item>
              <el-form-item label="房屋设施*" label-width="120px">
                <el-select v-model="houseResourceData.allocations" multiple filterable allow-create default-first-option placeholder="请选择房屋设施">
                  <el-option v-for="item in this.$store.state.allocations" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="地铁*" label-width="120px">
                <el-cascader v-model="houseResourceData.subway" :options="options" :props="{ checkStrictly: true }" clearable></el-cascader>
              </el-form-item>
              <el-form-item label="房间设备" label-width="120px">
                <el-checkbox-group v-model="houseResourceData.facilities">
                  <el-checkbox label="独卫"></el-checkbox>
                  <el-checkbox label="淋浴"></el-checkbox>
                  <el-checkbox label="阳台"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item class="house-item" label="房屋简介*" label-width="120px">
                <el-input v-model="houseResourceData.houseBrief " autocomplete="off" placeholder="简单描述下您的房屋">
                </el-input>
              </el-form-item>
              <el-form-item class="area-tag" label="区域*" label-width="120px">
                <el-tag :key="tag" v-for="tag in houseResourceData.areaTags" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
                  <el-input class="input-new-tag" v-if="inputAreaVisible" v-model="inputAreaValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
                  <span>如：朝阳区 安华桥 玫瑰花城</span>
              </el-form-item>
              <el-form-item label="房间照片*" label-width="120px">
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
              <el-button type="primary" @click="saveHouseResourceBtn">确 定</el-button>
            </div>
          </el-dialog>
        </div>
    </div>
  </el-col>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Landlord',
  props: {
    phone: String
  },
  data () {
    return {
      dialogLandlordForm: false,
      houseResourceForm: false,
      landlords: [],
      landlordData: {
        name: '',
        phone: this.phone,
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
      houseResourceData: {
        houseName: '',
        rent: '',
        buildArea: '',
        toward: '',
        doorModel: '',
        location: '',
        floor: '',
        lift: '',
        era: '',
        houseBrief: '',
        allocations: [],
        areaTags: [],
        facilities: [],
        roomPics: [],
        subway: []
      },
      inputAreaVisible: false,
      inputAreaValue: '',
      options: [],
      houseResourceInfos: []
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
      this.$router.push('/room/' + row.id)
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
      this.houseResourceForm = true
      this.getSubwayInfo()
    },
    phoneCheck (phone) {
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      if (!(telStr.test(phone))) {
        return false
      } else {
        return true
      }
    },
    landlordFormHandle () {
      if (this.landlordData.name === '') {
        this.$message({
          message: '请输入姓名',
          type: 'warning'
        })
        return
      }
      if (this.landlordData.community.communityName === '') {
        this.$message({
          message: '请输入小区名称',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/saveLandlordInfo',
        data: {
          name: this.landlordData.name,
          phone: this.landlordData.phone,
          houseCity: this.landlordData.houseCity,
          communityName: this.landlordData.community.communityName,
          buildingAge: this.landlordData.community.buildingAge,
          buildingType: this.landlordData.community.buildingType,
          heatingMethod: this.landlordData.community.heatingMethod,
          greeningRate: this.landlordData.community.greeningRate,
          plotRatio: this.landlordData.community.plotRatio,
          propertyCompany: this.landlordData.community.propertyCompany,
          propertyPhone: this.landlordData.community.propertyPhone
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
          }
          if (res.data.status === 0) {
            this.landlords.push({
              name: this.landlordData.name,
              phone: this.landlordData.phone,
              houseCity: this.landlordData.houseCity,
              communityName: this.landlordData.community.communityName
            })
          }
        })
    },
    saveHouseResourceBtn () {
      console.log(this.houseResourceData.area)
      if (this.houseResourceData.houseName === '') {
        this.$message({
          message: '请选择房屋名称',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.rent === '') {
        this.$message({
          message: '请输入租金',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.buildArea === '') {
        this.$message({
          message: '请输入建筑面积',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.toward === '') {
        this.$message({
          message: '请输入房间朝向',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.doorModel === '') {
        this.$message({
          message: '请选择房间户型',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.location === '') {
        this.$message({
          message: '请输入房间地理位置',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.floor === '') {
        this.$message({
          message: '请输入房间楼层',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.lift === '') {
        this.$message({
          message: '请选择是否有电梯',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.era === '') {
        this.$message({
          message: '请输入房屋修建年代',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.allocations.length === 0) {
        this.$message({
          message: '请选择房屋设施',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.subway.length === 0) {
        this.$message({
          message: '请选择房屋靠近的地铁',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.houseBrief === '') {
        this.$message({
          message: '请输入房屋简介',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.areaTags.length === 0) {
        this.$message({
          message: '请输入房屋所在区域',
          type: 'warning'
        })
        return
      }
      if (this.houseResourceData.roomPics.length === 0) {
        this.$message({
          message: '请上传房屋照片',
          type: 'warning'
        })
        return
      }
      axios({
        url: '/api/saveHouseResource',
        data: {
          houseName: this.houseResourceData.houseName,
          rent: this.houseResourceData.rent,
          buildArea: this.houseResourceData.buildArea,
          toward: this.houseResourceData.toward,
          doorModel: this.houseResourceData.doorModel,
          location: this.houseResourceData.location,
          floor: this.houseResourceData.floor,
          lift: this.houseResourceData.lift,
          era: this.houseResourceData.era,
          allocations: this.houseResourceData.allocations,
          areaTags: this.houseResourceData.areaTags,
          facilities: this.houseResourceData.facilities,
          roomPics: this.houseResourceData.roomPics,
          houseBrief: this.houseResourceData.houseBrief,
          subway: this.houseResourceData.subway
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
            this.houseResourceForm = false
            this.houseResourceInfos.push(res.data.data)
          }
        })
    },
    getSubwayInfo () {
      this.options = []
      axios.get('/local/search.json')
        .then(res => {
          var city = this.$store.state.city
          res = res.data
          for (var thisCity in res) {
            if (thisCity === city) {
              var subway = res[thisCity]['subway']
              for (var s of subway) {
                if (s['subway'] !== '不限') {
                  var stands = s['stand']
                  console.log(stands)
                  var childrens = []
                  for (var stand of stands) {
                    childrens.push({
                      value: stand,
                      label: stand
                    })
                  }
                  this.options.push({
                    value: s['subway'],
                    label: s['subway'],
                    children: childrens
                  })
                }
              }
              break
            }
          }
        })
    },
    getLandlordInfo () {
      axios({
        url: '/api/getLandlordInfo',
        data: {
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.data.status === 0) {
            this.landlords = res.data.data
            if (this.landlords.length > 0) {
              this.getHouseResourceInfo()
            }
          }
        })
    },
    getHouseResourceInfo () {
      axios({
        url: '/api/getHouseResourceInfo',
        data: {
        },
        method: 'post',
        header: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.status === 109) {
          this.$router.push('/')
          this.$message.error('您尚未登录！')
        } else if (res.data.status === 0) {
          var data = res.data
          this.houseResourceInfos = data.data
        }
      })
    }
  },
  mounted () {
    this.getLandlordInfo()
  }
}
</script>

<style scoped>
  .not-certificate{
    padding: 30px 0;
    color: #999;
  }
  .landlord-button{
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
  .house-resource-form >>> .house-item{
    display: block;
    width: 85%;
  }
  .landlord-form >>> .el-form-item{
    width: 400px;
    display: inline-block;
  }
  .area-tag{
    width: 100%!important;
  }
  .area-tag >>> span{
    font-size: 13px;
    color: rgba(0,0,0,.2);
    margin-left: 10px;
  }
  .el-select{
    width: 100%;
  }
  .upload-room-pic{
    margin-left: 10px;
  }
</style>
