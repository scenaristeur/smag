// import Vue from 'vue'
const state = () => ({
  currentItem : null,
  search: ''
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
  setCurrentItem(state,i){
    state.currentItem = i
  },
  // setContent(state,c){
  //   state.content = c
  // },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
