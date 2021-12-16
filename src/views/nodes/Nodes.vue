<template>
  <div>
    <b-row v-if="items.length > 0">
      <!-- <b-col cols="12" md="4">
        <b-input-group class="mb-3">
          <b-form-input v-model="search" placeholder="search or create"></b-form-input>
          <b-input-group-append>
            <b-button v-if="search.length > 0" variant="outline-secondary" @click="search=''">X</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col> -->
      <b-col cols="12" md="4" v-if="items.length > 0">
        <!-- <b-button variant="outline-primary" @click="addNode">Add</b-button> -->
        <b-button size="sm" variant="outline-info" @click="order == 'asc' ? order= 'desc' : order = 'asc'">{{order}}</b-button>
        {{items.length}} nodes
      </b-col>
    </b-row>

    <b-list-group>
      <b-list-group-item
      v-for="i in orderedItems" :key="i.id" button
      @click="edit(i)">
      <b>{{i['ve:name']}}</b>
      <small>{{i['ve:age']}}</small>
      {{ i['ve:properties']}}
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
      // search: ""
    }
  },
  methods:{
    edit(item){
      console.log(item)
      this.$store.commit("app/editing", item)
    },
    byKey(key) {
      return function (o) {
        var v = parseInt(o[key], 10);
        return isNaN(v) ? o[key] : v;
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
      return this.search.length == 0 ? this.items : this.items.filter( i => {
        return i['ve:name'].toLowerCase().includes(this.search.toLowerCase())
      })
    },
    search:{
      get() { return this.$store.state.app.search},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
