<template>
  <b-container>
    <!-- {{ choudbi}} -->
    <NodeEditor v-if="this.choudbi != null" />

    <!-- <b-button @click="create" variant="info" v-if="editing == null">Create</b-button> -->
    <b-dropdown v-if="item['ve:name'] != undefined && item['ve:name'].length > 0"
      text="Add Properties" class="m-2" variant="outline-dark">
      <!-- id="dropdown-offset" offset="25"  -->

      <b-dropdown-item v-for="(modele, name) in modeles" :key="modele.id"
      @click="addModele(modele)">{{name}}</b-dropdown-item>
      <b-dropdown-item href="#">Add a custom property (todo)</b-dropdown-item>
      <!-- <b-dropdown-item href="#">une personn else here</b-dropdown-item> -->
    </b-dropdown>
    <!-- <b-button  @click="addProps" variant="outline-dark">Add properties</b-button> -->
    <b-button v-if="choudbi != null" @click="update" variant="info">Update</b-button>
    <b-button v-if="choudbi != null || (item['ve:name'] != undefined && item['ve:name'])" @click="cancel" variant="light">Cancel</b-button>
    <b-button v-if="choudbi != null" @click="remove" variant="warning">Remove</b-button>

    <!-- {{ modeles}} -->

    <Nodes />
    <!-- [AM] Editing : {{ editing }}<br>
    [AM] ITEM : {{ item }} -->

  </b-container>
</template>

<script>

// import * as TensionTest from '@/agents/models/tension'
import * as Tension from '@/agents/models/tension'
import * as Person from '@/agents/models/person'
import * as Note from '@/agents/models/note'

export default {
  name: "AutomergeTest",
  components: {
    'Nodes': () => import('@/views/nodes/Nodes'),
    'NodeEditor': () => import('@/views/nodes/NodeEditor'),
  },
  data(){
    return {
      default : {'ve:name': '','ve:age': 0, 've:properties': []},
      //  item: {},
      modeles : {}
    }
  },
  created(){
    this.init()
    this.modeles.tension = new Tension({name: "New Tension"})
    this.modeles.person = new Person({name: "Person"})
    this.modeles.note = new Note({name: "Nothing to do with that yet ;-)"})
    // this.modeles.group = new TensionTest({name: "the Group"})
    // this.modeles.Action = new TensionTest({name: "OAn action"})
    // this.modeles.Project = new TensionTest({name: "OProject"})
    // this.modeles.Task = new TensionTest({name: "OAn Task"})
  },

  methods:{
    // async create(){
    //   if (this.item['ve:name'] != undefined && this.item['ve:name'].length > 0){
    //     await this.$store.dispatch('local/create', this.item)
    //     this.init()
    //   }else{
    //     this.emptyMessage("name")
    //   }
    // },
    async readAll(){
      await this.$store.dispatch('local/getItems')
    },
    async update(){
      this.choudbi.save()
      if (this.item['ve:name'] != undefined && this.item['ve:name'].length > 0){
        console.log(this.item)
        await this.$store.dispatch('local/update', this.item)
        this.init()
      }else{
        this.emptyMessage("name")
      }
    },
    cancel(){
      this.init()
    },
    remove(){
      this.$store.dispatch('local/delete', this.editing)
      this.init()
    },
    init(){
      this.item  = Object.assign({}, this.default)
      this.$store.dispatch('local/getItems')
      this.$store.commit('app/editing', null)
    },
    addModele(modele){
      console.log(modele)
      this.item  = Object.assign({},this.item, modele.data)
      console.log(this.item)
    },
    emptyMessage(key){
      alert('You should give it a '+key+' !')
    }
  },
  watch:{
    editing(){
      console.log("editing", this.editing)
      if(this.editing != null){
        // this.item =  this.editing.doc
        let item = Object.assign({}, this.editing)
        this.$store.commit('app/updateItem', item)
      }else{
        // this.item = this.default
        let item = Object.assign({}, this.default)
        this.$store.commit('app/updateItem', item)
      }
      // console.log(this.item)
      // this.$store.commit('app/updateItem', this.item)
    },
    // item(){
    //   console.log("Item", this.item)
    //   //  this.$store.commit('app/updateItem', this.item)
    // }
  },
  computed:{
    editing:{
      get() { return this.$store.state.app.editing},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
    item:{
      get() { return this.$store.state.app.item},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
    choudbi:{
      get() { return this.$store.state.choudbi.choudbi},
      set(choudbi) {this.$store.commit('choudbi/update', choudbi)}
    },

  }
}
</script>

<style>

</style>
