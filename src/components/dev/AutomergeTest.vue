<template>
  <div>
    AM
    CRUD
    <ol>
      <li>
        <b-row>
          <b-col sm="3">
            <label for="name">Name:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="name" v-model="item['ve:name']" autocomplete="off" autofocus />
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
        <b-button @click="create" variant="info" v-if="editing == null">Create</b-button>
      </li>
      <li v-if="editing != null">
        <b-button @click="update">Update</b-button>
        <b-button @click="cancel" variant="info">Cancel</b-button>
      </li>
      <li>
        <b-button @click="readAll" variant="info">Read All</b-button>
        <b-button @click="readOne">Read One</b-button>
      </li>
      <li>
        <b-button @click="remove">Remove</b-button>
      </li>
    </ol>

    <Nodes />


  </div>
</template>

<script>
export default {
  name: "AutomergeTest",
  components: {
    'Nodes': () => import('@/views/nodes/Nodes'),
  },
  data(){
    return {
      modele : {},
      item: {}
    }
  },
  created(){
    this.init()
  },
  methods:{
    async create(){
      await this.$store.dispatch('local/create', this.item)
      this.init()
    },
    readOne(){
      console.log("readOne")
    },
    async readAll(){
      console.log("readAll")
      await this.$store.dispatch('local/getItems')
    },
    async update(){
      console.log("update")
      console.log(this.editing, this.item)
      await this.$store.dispatch('local/update', { old: this.editing, new: this.item})
      this.init()
    },
    cancel(){
      console.log("cancel")
      this.$store.commit('local/editing', null)
    },
    remove(){
      console.log("remove")
    },
    init(){
      this.item  = Object.assign({}, this.modele)
      this.$store.dispatch('local/getItems')
    }
  },
  watch:{
    editing(){
      console.log(this.editing)
      this.item = this.editing != null ? Object.assign({}, this.editing.doc) : Object.assign({}, this.modele)
      console.log(this.item)
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
