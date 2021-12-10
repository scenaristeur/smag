// import Vue from 'vue'
const state = () => ({
  files: [],
  folders: [],
  mustExplore: null,
  tensions: []
  // bureau: null,
  // resource: null,
  // content: null
  //pod: null,
})

const actions = {
  async addTension(context, t) {
    context.state.tensions.push(t)
    // context.state.pod.workspaces.push(w)
    //Vue.prototype.$addWorkspaceToPod(w)
  },
}

const mutations = {

  addFile(state,f){
    state.files.push(f)
  },
  addFolder(state,f){
    state.folders.push(f)
  },
  mustExplore(state, u){
    state.mustExplore = u
  }
  // setResource(state,r){
  //   state.resource = r
  // },
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
