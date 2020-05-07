import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京',
    citys: ['北京', '上海', '深圳', '西安', '成都'],
    allocations: [{value: '智能锁', label: '智能锁'}, {value: '路由器', label: '路由器'}, {value: '冰箱', label: '冰箱'},
      {value: '微波炉', label: '微波炉'}, {value: '洗衣机', label: '洗衣机'}, {value: '热水器', label: '热水器'},
      {value: '浴霸', label: '浴霸'}, {value: '衣柜', label: '衣柜'}, {value: '床垫', label: '床垫'}, {value: '空调', label: '空调'},
      {value: '床', label: '床'}, {value: '桌子', label: '桌子'}, {value: '椅子', label: '椅子'}],
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
