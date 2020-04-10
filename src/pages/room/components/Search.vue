<template>
  <div class="wrapper">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"><span class="rj-breadcrumb">如家公寓</span></el-breadcrumb-item>
            <el-breadcrumb-item><span class="rj-breadcrumb">北京租房</span></el-breadcrumb-item>
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
              <el-radio-button class="list-item" label="区域"></el-radio-button>
              <el-radio-button class="list-item" label="地铁"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item area" v-if="location === '区域'">
          <div class="option-list">
            <el-radio-group v-model="radio.radio1" @change="addTag">
              <el-radio-button class="list-item" v-for="item of area" :key="item.id" :label="item.area"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item subway" v-if="location === '地铁'">
          <div class="option-list">
            <el-radio-group v-model="radio.radio2" @change="addTag">
              <el-radio-button class="list-item" v-for="item of subway" :key="item.id" :label="item.subway"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item area" v-if="stand !==undefined && stand.length > 0">
          <div class="option-list">
            <el-checkbox-group v-model="checkedArea" :min="0" :max="1">
              <el-checkbox v-for="(item, index) of stand" :key="index" :label="item" >{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">价格：</strong>
          <div class="option-list">
            <el-radio-group v-model="radio.radio3" @change="addTag">
              <el-radio-button class="list-item" label="不限"></el-radio-button>
              <el-radio-button class="list-item" label="1500元以下"></el-radio-button>
              <el-radio-button class="list-item" label="1500~2000元"></el-radio-button>
              <el-radio-button class="list-item" label="2000~2500元"></el-radio-button>
              <el-radio-button class="list-item" label="2500~3000元"></el-radio-button>
              <el-radio-button class="list-item" label="3000元以上"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">居室：</strong>
          <div class="option-list">
            <el-radio-group v-model="radio.radio4" @change="addTag">
              <el-radio-button class="list-item" label="不限"></el-radio-button>
              <el-radio-button class="list-item" label="一居室"></el-radio-button>
              <el-radio-button class="list-item" label="两居室"></el-radio-button>
              <el-radio-button class="list-item" label="三居室"></el-radio-button>
              <el-radio-button class="list-item" label="四居室以上"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">类型：</strong>
          <div class="option-list">
            <el-radio-group v-model="radio.radio5" @change="addTag">
              <el-radio-button class="list-item" label="不限"></el-radio-button>
              <el-radio-button class="list-item" label="整租"></el-radio-button>
              <el-radio-button class="list-item" label="合租"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="item">
          <strong class="title">特色：</strong>
          <div class="option-list">
            <el-radio-group v-model="radio.radio6" @change="addTag">
              <el-radio-button class="list-item" label="不限"></el-radio-button>
              <el-radio-button class="list-item" label="独立卫生间"></el-radio-button>
              <el-radio-button class="list-item" label="独立阳台"></el-radio-button>
              <el-radio-button class="list-item" label="智能锁"></el-radio-button>
              <el-radio-button class="list-item" label="有电梯"></el-radio-button>
              <el-radio-button class="list-item" label="离地铁近"></el-radio-button>
              <el-radio-button class="list-item" label="月租"></el-radio-button>
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
      radio: {
        radio1: '不限',
        radio2: '不限',
        radio3: '不限',
        radio4: '不限',
        radio5: '不限',
        radio6: '不限'
      },
      dynamicTags: [],
      checkedArea: [],
      stand: []
    }
  },
  methods: {
    addTag (label) {
      if (this.location === '区域' && this.radio.radio1 !== '不限') {
        if (this.radio.radio2 !== '不限') {
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.radio.radio2), 1)
        }
        this.radio.radio2 = '不限'
        // 获得当前点击区域area下的stand
        for (var _area in this.area) {
          if (this.radio.radio1 === this.area[_area]['area']) {
            this.stand = this.area[_area]['stand']
          }
        }
      }
      if (this.location === '地铁' && this.radio.radio2 !== '不限') {
        if (this.radio.radio1 !== '不限') {
          this.dynamicTags.splice(this.dynamicTags.indexOf(this.radio.radio1), 1)
        }
        this.radio.radio1 = '不限'
        // 获得当前点击地铁subway下的stand
        for (var _subway in this.subway) {
          if (this.radio.radio2 === this.subway[_subway]['subway']) {
            this.stand = this.subway[_subway]['stand']
          }
        }
      }
      // 移除同一类别单选框
      var tagsArr = []
      for (var key in this.radio) {
        if (this.radio[key] !== '不限') {
          tagsArr.push(this.radio[key])
        }
      }
      this.dynamicTags = tagsArr
      if (this.location === '区域') {
        if (this.radio.radio1 === '不限') {
          this.stand = []
        }
      } else if (this.location === '地铁') {
        if (this.radio.radio2 === '不限') {
          this.stand = []
        }
      }
    },
    tagClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      for (var key in this.radio) {
        if (tag === this.radio[key]) {
          this.radio[key] = '不限'
        }
      }
    },
    deleteAllTag () {
      this.dynamicTags = []
      for (var key in this.radio) {
        this.radio[key] = '不限'
      }
    }
  }
}
</script>

<style>
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
            .el-radio-button__orig-radio:checked + .el-radio-button__inner{
              background: #3dbcc6;
              border-radius: 7px;
              padding: 8px 20px;
              border:0px solid #fff;
              box-shadow: 0px 0 0 0 #fff;
            }
            .el-radio-button:first-child .el-radio-button__inner{
              border-left: 0px solid #fff;
            }
            .el-radio-button__inner{
              border:0px solid #fff;
            }
            .el-radio-button__inner:hover{
              color: #999;
            }
        .item-choose{
          font-size: 13px;
        }
          .el-tag + .el-tag {
            margin-left: 10px;
          }
          .deleteAllTag {
            color: #4bb4bb;
            padding: 0 0 0 5px;
            cursor: pointer;
          }
</style>
