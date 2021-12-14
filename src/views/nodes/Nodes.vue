<template>
  <div>
    <b-row v-if="items.length > 0">
      <b-col cols="12" md="4">
        <b-input-group class="mb-3">
          <b-form-input v-model="search" placeholder="search"></b-form-input>
          <b-input-group-append>
            <!-- <b-button variant="outline-success">Button</b-button> -->
            <b-button v-if="search.length > 0" variant="outline-secondary" @click="search=''">X</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="12" md="4">
        <!-- <b-button variant="outline-primary" @click="addNode">Add</b-button> -->
        <b-button size="sm" variant="outline-info" @click="order == 'asc' ? order= 'desc' : order = 'asc'">{{order}}</b-button>
        {{items.length}} nodes
      </b-col>
    </b-row>

    <b-list-group>
      <b-list-group-item
      v-for="i in orderedItems" :key="i.id" button
      @click="edit(i)">
      <b>{{i.doc['ve:name']}}</b>
      <small>{{i.doc['ve:age']}}</small>
      {{ i.doc}}
    </b-list-group-item>
  </b-list-group>
  <!-- {{items}} -->
</div>
</template>

<script>
import lodash from 'lodash';

export default {
  name: "Nodes",
  data(){
    return{
      order : 'asc',
      search: ""
    }
  },
  methods:{
    edit(item){
      console.log(item)
      this.$store.commit("local/editing", item)
    },
    byKey(key) {
      return function (o) {
        var v = parseInt(o.doc[key], 10);
        return isNaN(v) ? o.doc[key] : v;
      };
    }
  },
  computed:{
    items:{
      get() { return this.$store.state.local.items},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
    orderedItems: function () {
      return lodash.orderBy(this.filteredItems, this.byKey('ve:age'), this.order)
    },
    filteredItems: function (){
      return this.search.length == 0 ? this.items : this.items.filter( n => {
        return n.doc['ve:name'].toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
