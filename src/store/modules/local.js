import idb from '@/api/idb';
// import am from '@/api/automerge';

const state = () => ({
  items:[],

})

const actions = {
  async create(context, item){
    item['ve:created'] == undefined ? item['ve:created'] = Date.now() : ""
    item['ve:updated'] = Date.now()
    // let node = await am.create(item)
    // console.log("node", node)
    await idb.saveItem(item);
    // node.doc = await am.load(node)
    // console.log(node)
    //  item.actorId = node.id
    context.commit('app/editing', null, { root: true })
    context.dispatch('getItems')
  },
  async delete(context, item) {
    console.log(item)
    let del =  confirm("Are you sur you want to delete "+item['ve:name']);
    if (del == true){
      console.log('store is being asked to delete '+item.id, item['ve:name']);
      await idb.deleteItem(item);
    }
  },
  async getItems(context) {
   let local_items = [];
    let items = await idb.getItems();
    items.forEach(async function(i) {
      console.log(i)
    //  let item = {}
    //  item.doc = await am.load(i)
    //  item.am = i
      //i.doc = await am.load(i)
      local_items.push(i);
    });
    console.log(local_items)
    context.state.items = local_items
  },
  async update(context, item){
    console.log("modif", item)
    item['ve:updated'] = Date.now()
  //  let node = await am.change(item)
    //console.log("node", node)
    await idb.saveItem(item);
    await context.dispatch('getItems')
    //await idb.deleteItem(item);
  },
  async clearStore(){
    let del =  confirm("Do you want to KEEP all nodes stored on this device ?");
    if (del == false){
      await idb.clearStore()
    }
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
