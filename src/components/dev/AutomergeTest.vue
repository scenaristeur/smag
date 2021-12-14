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
    <b-button @click="create" variant="info" v-if="editing == null">Create</b-button>
    <b-button v-if="editing != null" @click="update" variant="info">Update</b-button>
    <b-button v-if="editing != null" @click="cancel" variant="light">Cancel</b-button>
    <b-button v-if="editing != null" @click="remove" variant="warning">Remove</b-button>
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
      this.item  = Object.assign({}, this.modele)
      this.$store.dispatch('local/getItems')
      this.$store.commit('local/editing', null)
    }
  },
  watch:{
    editing(){
      if(this.editing != null){
        this.item = Object.assign({}, this.editing.doc)
      }else{
        this.item = Object.assign({}, this.modele)
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
