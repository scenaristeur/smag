import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import app from './modules/app'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    solid, app
  }
})
