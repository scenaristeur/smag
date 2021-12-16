import idb from '@/api/idb';
import am from '@/api/automerge';

const state = () => ({
  items:[],
  editing: null
})

const actions = {
  async create(context, item){
    item['ve:created'] == undefined ? item['ve:created'] = Date.now() : ""
    item['ve:updated'] = Date.now()
    let node = await am.create(item)
    console.log("node", node)
    await idb.saveItem(node);
    node.doc = await am.load(node)
    console.log(node)
    context.state.editing = node
  },
  async delete(context, item) {
    let del =  confirm("Are you sur you want to delete "+item.doc['ve:name']);
    if (del == true){
      console.log('store is being asked to delete '+item.id, item.doc['ve:name']);
      await idb.deleteItem(item);
    }
  },
  async getItems(context) {
    let local_items = [];
    let items = await idb.getItems();
    items.forEach(async function(i) {
      i.doc = await am.load(i)
      local_items.push(i);
    });
    console.log(local_items)
    context.state.items = local_items
  },
  async update(context, modif){
    // console.log("modif", modif.old, modif.new)
    modif.new['ve:updated'] = Date.now()
    let node = await am.change(modif.old, modif.new)
    // console.log("node", node)
    await idb.saveItem(node);
    await idb.deleteItem(modif.old);
  },
  async clearStore(){
    let del =  confirm("Do you want to KEEP all nodes stored on this device ?");
    if (del == false){
      await idb.clearStore()
    }
  }
}

const mutations = {
  editing (state, item){
    state.editing = item
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
