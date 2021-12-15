// import Vue from 'vue'
const state = () => ({
  item : {},
  search: '',
  currentProp: {}
  // files: [],
  // folders: [],
  // mustExplore: null,
  //tensions: []
  // bureau: null,
  // resource: null,
  // content: null
  //pod: null,
})

const actions = {
  // async addTension(context, t) {
  //   context.state.tensions.push(t)
  //   // context.state.pod.workspaces.push(w)
  //   //Vue.prototype.$addWorkspaceToPod(w)
  // },
}

const mutations = {

  setSearch(state,s){
    state.search = s
  },
  // addFolder(state,f){
  //   state.folders.push(f)
  // },
  // mustExplore(state, u){
  //   state.mustExplore = u
  // }
  updateItem(state,i){
    state.item = i
  },
  setCurrentProp(state,p){
    state.currentProp = p
  },
  addProp(state, p){
    console.log(state.item, p)
    state.item['ve:properties'] == undefined ? state.item['ve:properties'] = [] : ""
    state.item['ve:properties'] = Object.assign(state.item['ve:properties'], p)
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
