import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京',
    citys: ['北京', '上海', '深圳', '西安', '成都']
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('commitCity', city)
    }
  },
  mutations: {
    commitCity (state, city) {
      state.city = city
    }
  }
})
