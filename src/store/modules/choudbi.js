// import Vue from 'vue'
const state = () => ({
  choudbi : null,
  // properties: [],
  // search: '',
  // currentProp: {},
  //   editing: null
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
  async update(context, c) {
    console.log(c)
    context.state.choudbi = c
     // context.state.pod.workspaces.push(w)
    //Vue.prototype.$addWorkspaceToPod(w)
  },
  // updateProp(context, p){
  //   console.log("update",p)
  //   let item = Object.assign({},context.state.item)
  //   var index = context.state.properties.findIndex(x => x.name==p.name);
  //   index === -1 ? context.state.properties.push(p) : context.state.properties[index] = p
  //   console.log("props", context.state.properties)
  //   item['ve:properties'] = Object.assign([], context.state.properties)
  //   context.commit('updateItem',item)
  //   console.log(context.state.item)
  // }
}

const mutations = {
  // editing (state, item){
  //   state.editing = item
  // },
  // setSearch(state,s){
  //   state.search = s
  // },
  // addFolder(state,f){
  //   state.folders.push(f)
  // },
  // mustExplore(state, u){
  //   state.mustExplore = u
  // }
  // updateItem(state,i){
  //   console.log(i)
  //   state.item = i
  //   state.properties = i['ve:properties'] || []
  // },
  // setCurrentProp(state,p){
  //   state.currentProp = p
  // },
  // addProp(state, p){
  //   console.log(state.item, p)
  //   // state.properties == undefined ? state.item['ve:properties'] = [] : ""
  //   // state.item['ve:properties'] = Object.assign(state.item['ve:properties'], p)
  //   var index = state.properties.findIndex(x => x.name==p.name);
  //   index === -1 ? state.properties.push(p) : alert(p.name+" already exist")
  //   console.log(state.properties)
  // },


}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
