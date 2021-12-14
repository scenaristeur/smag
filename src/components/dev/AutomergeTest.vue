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
        <b-button @click="create" variant="info">Create</b-button>
      </li>
      <li>
        <b-button @click="readAll">Read All</b-button>
        <b-button @click="readOne">Read One</b-button>
      </li>
      <li>
        <b-button @click="update">update</b-button>
      </li>
      <li>
        <b-button @click="remove">remove</b-button>
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
    this.$store.dispatch('local/getItems')
  },
  methods:{
    async create(){
      await this.$store.dispatch('local/createItem', this.item)
      this.item  = Object.assign({}, this.modele)
      this.$store.dispatch('local/getItems')
    },
    readOne(){
      console.log("readOne")
    },
    async readAll(){
      console.log("readAll")
      await this.$store.dispatch('local/getItems')
    },
    update(){
      console.log("update")
    },
    remove(){
      console.log("remove")
    },
  }
}
</script>

<style>

</style>
