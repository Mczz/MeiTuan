import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showProvince: false,
    showCity: false
  },
  mutations: {
    showPro(state, flag) {
      state.showProvince = flag;
      state.showCity = false;
    },
    showCi(state, flag) {
      state.showCity = flag;
      state.showProvince = false;
    }
  },
  actions: {

  }
})