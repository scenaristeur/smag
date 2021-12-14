<template>
  <div>
    <b-row>
      <b-col sm="3">
        <label for="name">Name:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="name" ref="name" v-model="item['ve:name']" autocomplete="off" autofocus />
      </b-col>
      <b-col sm="3">
        <label for="age"><code>Age</code>:</label>
      </b-col>
      <b-col>
        <b-form-input
        id="age"
        v-model="item['ve:age']"
        required type="number"  />
      </b-col>
    </b-row>

    <b-row>
    props  {{item['ve:properties']}}
    </b-row>


    <b-button @click="create" variant="info" v-if="editing == null">Create</b-button>
    <b-dropdown v-if="item['ve:name'] != undefined && item['ve:name'].length > 0"
      text="Add Properties" class="m-2" variant="outline-dark">
      <!-- id="dropdown-offset" offset="25"  -->
      <b-dropdown-item href="#">Add a custom property (todo)</b-dropdown-item>
      <b-dropdown-item v-for="(modele, name) in modeles" :key="modele.id"
      @click="addModele(modele)">{{name}}</b-dropdown-item>
      <!-- <b-dropdown-item href="#">une personn else here</b-dropdown-item> -->
    </b-dropdown>
    <!-- <b-button  @click="addProps" variant="outline-dark">Add properties</b-button> -->
    <b-button v-if="editing != null" @click="update" variant="info">Update</b-button>
    <b-button v-if="editing != null" @click="cancel" variant="light">Cancel</b-button>
    <b-button v-if="editing != null" @click="remove" variant="warning">Remove</b-button>

    <!-- {{ modeles}} -->

    <Nodes />

  </div>
</template>

<script>

import * as TensionTest from '@/agents/models/tension'
import * as Tension from '@/agents/models/tension'

export default {
  name: "AutomergeTest",
  components: {
    'Nodes': () => import('@/views/nodes/Nodes'),
  },
  data(){
    return {
      default : {},
      item: {},
      modeles : {}
    }
  },
  created(){
    this.init()
    this.modeles.tension = new Tension({name: "New Tension"})
    this.modeles.person = new TensionTest({name: "Old Tension Tes"})
    this.modeles.group = new TensionTest({name: "the Group"})
    this.modeles.Action = new TensionTest({name: "OAn action"})
  },
  mounted(){
    this.$refs.name.focus()
  },
  methods:{
    async create(){
      await this.$store.dispatch('local/create', this.item)
      this.init()
    },
    async readAll(){
      await this.$store.dispatch('local/getItems')
    },
    async update(){
      await this.$store.dispatch('local/update', { old: this.editing, new: this.item})
      this.init()
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
      this.$store.commit('local/editing', null)
    },
    addModele(modele){
      console.log(modele)
      this.item  = Object.assign(this.item, modele.data)
      console.log(this.item)
    }
  },
  watch:{
    editing(){
      if(this.editing != null){
        this.item = Object.assign({}, this.editing.doc)
      }else{
        this.item = Object.assign({}, this.default)
      }
      this.$refs.name.focus()
    }
  },
  computed:{
    editing:{
      get() { return this.$store.state.local.editing},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
