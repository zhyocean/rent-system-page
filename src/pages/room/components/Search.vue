<template>
  <div class="wrapper">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><span class="rj-breadcrumb">如家公寓</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">{{this.$store.state.city}}租房</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="search-box">
      <div class="box-menu">
        <input type="text" class="box-input" placeholder="请输入区域、地铁站、小区名开始找房">
        <div class="find-house">开始找房</div>
      </div>
      <div class="result-box">
        <div class="item">
          <strong class="title">位置：</strong>
          <div class="option-list">
            <el-radio-group v-model="location">
              <el-radio-button label="区域"></el-radio-button>
              <el-radio-button label="地铁"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item area" v-if="location === '区域'">
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.area" @change="addTag">
              <el-radio-button v-for="item of area" :key="item.id" :label="item.area"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item subway" v-if="location === '地铁'">
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.subway" @change="addTag">
              <el-radio-button v-for="item of subway" :key="item.id" :label="item.subway"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <!-- 区域下的所有站 -->
        <div class="item area" v-if="location === '区域' && areaStand !==undefined && areaStand.length > 0">
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.areaStand" @change="addTag">
              <el-radio class="rj-radio" v-for="(item, index) of areaStand" :key="index" :label="item">{{item}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <!-- 地铁下的所有站 -->
        <div class="item area" v-if="location === '地铁' && subwayStand !==undefined && subwayStand.length > 0">
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.subwayStand" @change="addTag">
              <el-radio class="rj-radio" v-for="(item, index) of subwayStand" :key="index" :label="item">{{item}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">价格：</strong>
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.price" @change="addTag">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="1500元以下"></el-radio-button>
              <el-radio-button label="1500~2000元"></el-radio-button>
              <el-radio-button label="2000~2500元"></el-radio-button>
              <el-radio-button label="2500~3000元"></el-radio-button>
              <el-radio-button label="3000元以上"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">居室：</strong>
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.roomNum" @change="addTag">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="一居室"></el-radio-button>
              <el-radio-button label="两居室"></el-radio-button>
              <el-radio-button label="三居室"></el-radio-button>
              <el-radio-button label="四居室以上"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">类型：</strong>
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.roomType" @change="addTag">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="整租"></el-radio-button>
              <el-radio-button label="合租"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">特色：</strong>
          <div class="option-list">
            <el-radio-group v-model="searchCriteria.feature" @change="addTag">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="独立卫生间"></el-radio-button>
              <el-radio-button label="独立阳台"></el-radio-button>
              <el-radio-button label="智能锁"></el-radio-button>
              <el-radio-button label="有电梯"></el-radio-button>
              <el-radio-button label="离地铁近"></el-radio-button>
              <el-radio-button label="月租"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="item-choose" v-if="dynamicTags != 0">
          <span>您已选择：</span>
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="tagClose(tag)">
            {{tag}}
          </el-tag>
          <i class="el-icon-delete deleteAllTag" @click="deleteAllTag">全部删除</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  props: {
    area: Array,
    subway: Array
  },
  data () {
    return {
      location: '区域',
      searchCriteria: {
        area: '不限',
        subway: '不限',
        areaStand: '不限',
        subwayStand: '不限',
        price: '不限',
        roomNum: '不限',
        roomType: '不限',
        feature: '不限'
      },
      dynamicTags: [],
      areaStand: [],
      subwayStand: []
    }
  },
  methods: {
    addTag (label) {
      if (this.location === '区域' && this.searchCriteria.area !== '不限') {
        // 当在区域下时，判断地铁中是否有勾选，是则取消勾选并清空对应区域下的所有站
        if (this.searchCriteria.subway !== '不限') {
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.searchCriteria.subway), 1)
        }
        this.searchCriteria.subway = '不限'
        this.subwayStand = []
        // 获得当前点击区域area下的站
        for (var _area in this.area) {
          if (this.searchCriteria.area === this.area[_area]['area']) {
            this.areaStand = this.area[_area]['stand']
          }
        }
      }
      if (this.location === '地铁' && this.searchCriteria.subway !== '不限') {
        // 当在地铁下时，判断区域中是否有勾选，是则取消勾选并清空对应地铁号线下的所有站
        if (this.searchCriteria.area !== '不限') {
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.searchCriteria.area), 1)
        }
        this.searchCriteria.area = '不限'
        this.areaStand = []
        // 获得当前点击地铁subway下的站
        for (var _subway in this.subway) {
          if (this.searchCriteria.subway === this.subway[_subway]['subway']) {
            this.subwayStand = this.subway[_subway]['stand']
          }
        }
      }
      // 移除同一类别单选框
      var tagsArr = []
      for (var key in this.searchCriteria) {
        if (this.searchCriteria[key] !== '不限') {
          tagsArr.push(this.searchCriteria[key])
        }
      }
      this.dynamicTags = tagsArr
      if (this.location === '区域') {
        if (this.searchCriteria.area === '不限') {
          this.areaStand = []
        }
      } else if (this.location === '地铁') {
        if (this.searchCriteria.subway === '不限') {
          this.subwayStand = []
        }
      }
    },
    tagClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      for (var key in this.searchCriteria) {
        // 如果要删除的标签是区域或者地铁下的标签则需要同时删除相应的站
        if (key === 'area' && tag === this.searchCriteria[key]) {
          this.areaStand = []
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.searchCriteria['areaStand']), 1)
        }
        if (key === 'subway' && tag === this.searchCriteria[key]) {
          this.subwayStand = []
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.searchCriteria['subwayStand']), 1)
        }

        if (tag === this.searchCriteria[key]) {
          this.searchCriteria[key] = '不限'
        }
      }
    },
    deleteAllTag () {
      this.dynamicTags = []
      for (var key in this.searchCriteria) {
        this.searchCriteria[key] = '不限'
      }
      this.areaStand = []
      this.subwayStand = []
    }
  },
  watch: {
    'searchCriteria.area' (newData, oldData) {
      this.searchCriteria.areaStand = '不限'
      this.searchCriteria.subwayStand = '不限'
    },
    'searchCriteria.subway' (newData, oldData) {
      this.searchCriteria.subwayStand = '不限'
      this.searchCriteria.areaStand = '不限'
    }
  }
}
</script>

<style scoped>
  .wrapper{
      width: 1190px;
      margin: 0 auto;
      margin-top: 50px;
  }
    .rj-breadcrumb{
        font-size: 16px;
        color: #999;
        font-weight: 400;
    }
    .search-box{
      margin-top: 50px;
    }
      .box-input{
        border: 1px solid rgba(0,0,0,.12);
        height: 50px;
        width: 500px;
        text-indent: 12px;
        font-size: 16px;
        padding-left: 30px;
        background-color: #fff;
        border-radius: 5px 0 0 5px;
      }
      .find-house{
        display: inline-block;
        text-align: center;
        width: 132px;
        height: 100%;
        background: #ff961e;
        color: #fff;
        border-radius: 0 2px 2px 0;
        transform: translate(-5px,-2px);
        height: 53.7px;
        line-height: 52px;
        vertical-align: middle;
        cursor: pointer;
      }
      .result-box{
        margin-top: 35px;
      }
        .item{
          margin-bottom: 5px;
        }
        .area,.subway{
          margin-left: 53px;
        }
          .option-list{
            display: inline-block;
          }
            .option-list >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner{
              background: #3dbcc6;
              border-radius: 7px;
              padding: 8px 20px;
              border:0px solid #fff;
              box-shadow: 0px 0 0 0 #fff;
              color: #fff;
            }
            .option-list >>> .el-radio-button:first-child .el-radio-button__inner{
              border-left: 0px solid #fff;
            }
            .option-list >>> .el-radio-button__inner{
              border:0px solid #fff;
            }
            .option-list >>> .el-radio-button__inner:hover{
              color: #3dbcc6;
            }
            .rj-radio{
              margin: 0 10px 6px 0;
            }
              .rj-radio >>> .el-radio__label{
                padding-left: 5px;
              }
        .item-choose{
          font-size: 13px;
        }
          .el-tag + .el-tag {
            margin-left: 5px;
          }
          .deleteAllTag {
            color: #4bb4bb;
            padding: 0 0 0 5px;
            cursor: pointer;
          }
</style>
