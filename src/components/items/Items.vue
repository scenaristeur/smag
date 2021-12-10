<template>
  <div>


    <b-row v-if="items.length > 0">

      <b-col cols="12" md="4">

        <b-input-group class="mb-3">

          <b-form-input v-model="search" placeholder="search"></b-form-input>
          <b-input-group-append>
            <!-- <b-button variant="outline-success">Button</b-button> -->
            <b-button variant="outline-secondary" @click="search=''">X</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col cols="12" md="4">
        <!-- <b-button variant="outline-primary" @click="addNode">Add</b-button> -->
        <b-button size="sm" variant="outline-info" @click="order == 'asc' ? order= 'desc' : order = 'asc'">{{order}}</b-button>

      </b-col>
    </b-row>
    <div v-else>
      Use the bottom right pen button to add a item.
    </div>


    <b-row>

      <b-col v-for="(item, i) in orderedItems" :key="i">
        <Item :item="item" @delete="deleteItem" @edit="editItem" />
      </b-col>

    </b-row>

  </div>
</template>

<script>
import lodash from 'lodash';
export default {
  name: "Items",
  props: ['items'],
  components: {
    'Item': () => import('@/components/items/Item'),
  },
  data(){
    return{
      order : 'asc',
      search: ""
    }
  },
  created(){
    this.$store.dispatch('local/getItems', {type: "tension"})
  },
  methods:{
    async deleteItem(item) {
      console.log('delete', item.id, item);
      await this.$store.dispatch('local/deleteItem', item);
      await this.$store.dispatch('local/getItems', item);
    },
    editItem(item) {
      console.log('edit', item.id);
      // this.$store.commit('nodes/setCurrentNode', node)
      // this.$router.push({ name: 'edit'});
    },
    byKey(key) {
      return function (o) {
        var v = parseInt(o[key], 10);
        return isNaN(v) ? o[key] : v;
      };
    }
  },
  computed:{

    orderedItems: function () {
      return lodash.orderBy(this.filteredItems, this.byKey('ve:age'), this.order)
    },
    filteredItems: function (){
      return this.search.length == 0 ? this.items : this.items.filter( n => {
        return n['ve:name'].toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
