import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import app from './modules/app'
import local from './modules/local'
import choudbi from './modules/choudbi'
//import sma from './modules/sma'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    solid, app, local, choudbi// sma
  }
})
