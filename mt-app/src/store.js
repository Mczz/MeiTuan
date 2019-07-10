import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showProvince: false,
    showCity: false,
    province:'省份',
    city:'城市',
    position:''
  },
  mutations: {
    showPro(state, flag) {
      state.showProvince = flag;
      state.showCity = false;
    },
    showCi(state, flag) {
      state.showCity = flag;
      state.showProvince = false;
    },
    setPro(state,pro){
      state.province = pro;
    },
    setCity(state,city){
      state.city = city;
      state.position = city;
    },
    setPosition(state,val){
      state.position = val;
    }
  },
  actions: {
    setPosition({commit},val){
      commit('setPosition',val);
    }
  }
})