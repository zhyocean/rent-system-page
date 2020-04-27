import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京',
    citys: ['北京', '上海', '深圳', '西安', '成都'],
    allocation: [{value: '智能锁-&#xe619;', label: '智能锁'}, {value: '路由器-&#xe64f;', label: '路由器'}, {value: '冰箱-&#xe63f;', label: '冰箱'},
      {value: '微波炉-&#xe601;', label: '微波炉'}, {value: '洗衣机-&#xe735;', label: '洗衣机'}, {value: '热水器-&#xe645;', label: '热水器'},
      {value: '浴霸-&#xe666;', label: '浴霸'}, {value: '衣柜-&#xe604;', label: '衣柜'}, {value: '床垫-&#xe643;', label: '床垫'}, {value: '空调-&#xe651;', label: '空调'},
      {value: '床-&#xe608;', label: '床'}, {value: '桌子-&#xe611;', label: '桌子'}, {value: '椅子-&#xe616;', label: '椅子'}],
    VERIFIED_ACCOUNT: ''
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('commitCity', city)
    }
  },
  mutations: {
    commitCity (state, city) {
      state.city = city
    },
    verifiedAccount (state, verifiedAccount) {
      state.VERIFIED_ACCOUNT = verifiedAccount
    }
  }
})
