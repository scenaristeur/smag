import Vue from 'vue'
import idb from '@/api/idb';
import { v4 as uuidv4 } from 'uuid';


const state = () => ({
  items:[],
  // remoteNodes : [],
  // currentNode: null,
  // notBoth : [],
  // mustUpdate : [],
  // source: null,
  // currentWorkspace: null,
  // editorContent: ""

})

const actions = {
  async deleteItem(context, item) {
    // let exclude = node.exclude
    // delete node.exclude
    // console.log(exclude)
    let del =  confirm("Are you sur you want to delete "+item['ve:name']);
    if (del == true){
      // if (exclude != "remote"){
      //   if(context.rootState.solid.pod != null){
      //     try{
      //       await Vue.prototype.$deleteRemote(node)
      //     }
      //     catch(e){
      //       console.log(e)
      //     }
      //   }
      //   else{
      //     console.log("is not connected")
      //   }
      // }
      // if (exclude != "local"){
      console.log('store is being asked to delete '+item.id, item['ve:name']);
      await idb.deleteItem(item);
      // }
    }
  },
  async getItems(context, item) {
    context.state.items = [];
    let items = await idb.getItems(item);
    items.forEach(async function(i) {
      console.log(i)
      if(i.doc != undefined ){
        let doc = await Vue.prototype.$loadAMWithId(i)
        console.log("doc", doc)
        i = doc
      }
      console.log(i)
      context.state.items.push(i);
    });
  },
  async saveItem(context, item) {
    //let exclude = node.exclude
    //delete node.exclude
    //console.log(exclude)
    item.id == undefined ? item.id = uuidv4() : ""
    item['ve:created'] == undefined ? item['ve:created'] = Date.now() : ""
    item['ve:updated'] = Date.now()
    ///////////////////////////////
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ///if ( doc existe le recuperer, sinon le créer), géré le id en automerge ?
    ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // si existe, le modifier avec chanegAM
    let exist = false
    let newDoc = null
    if(exist != true){
      newDoc = await Vue.prototype.$createAM(item)
    }else{
      //  newDoc = await this.$changeAM(exist, {yipy: "pop", date: Date.now()})
      newDoc = await Vue.prototype.$changeAM(exist, item)
    }
    console.log("newDoc", newDoc)
    let docToSave = await Vue.prototype.$saveAM(newDoc)

    docToSave.type = "tension"
    console.log('store is being asked to save '+JSON.stringify(docToSave));
    await idb.saveItem(docToSave);

  },
  async clearStore(){
    let del =  confirm("Do you want to KEEP all nodes stored on this device ?");
    if (del == false){
      await idb.clearStore()
    }
  }
  // async sync(context, pod){
  // //  console.log('sync',context, pod.neuroneStore)
  //  Vue.prototype.$synchronise()
  //   // await context.commit("setRemotes", remotes)
  //   // console.log("remote",context.state.remoteNodes)
  //   // for await (const r of await context.state.remoteNodes){
  //   //   console.log("r",r.id, r.updated, r)
  //   // }
  //   //
  //   // for(const n of context.state.nodes){
  //   //   console.log("n",n.id,n.updated, n)
  //   //   var index = context.state.remoteNodes.findIndex(x => x.id==n.id);
  //   //   if(index === -1){
  //   //     console.log("n'existe pas en remote",n.id)
  //   //     Vue.prototype.$create(n)
  //   //
  //   //   }else{
  //   //     console.log("existe en remote",n.id)
  //   //   }
  //   // }
  //
  //
  // }
  // async rmlocalDB() {
  //   await idb.deleteDb();
  // }
}

const mutations = {
  // setRemotes (state, r){
  //   console.log("remotes", r)
  //   state.remoteNodes = r
  // },
  // setCurrentNode (state, n){
  //   state.currentNode = n
  // },
  // addNotBoth(state, n){
  //   var index = state.notBoth.findIndex(x => x.id==n.id);
  //   if(index === -1){
  //     state.notBoth.push(n)
  //   }
  // },
  // removeNotBoth(state,n){
  //   var index = state.notBoth.map(x => {
  //     return x.id;
  //   }).indexOf(n.id);
  //   state.notBoth.splice(index, 1);
  // },
  // addMustUpdate(state, n){
  //   var index = state.mustUpdate.findIndex(x => x.id==n.id);
  //   if(index === -1){
  //     state.mustUpdate.push(n)
  //   }
  // },
  // removeMustUpdate(state,n){
  //   var index = state.mustUpdate.map(x => {
  //     return x.id;
  //   }).indexOf(n.id);
  //   state.mustUpdate.splice(index, 1);
  // },
  // setSource (state, s){
  //   console.log("source", s)
  //   state.source = s
  // },
  // setCurrentWorkspace(state, w){
  //   state.currentWorkspace = w
  // },
  // setEditorContent(state, c){
  //   state.editorContent = c
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
