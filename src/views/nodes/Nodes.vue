<template>
  <div>
    Nodes {{items.length}}
    <br>
    <b-list-group>
      <b-list-group-item
      v-for="i in items" :key="i.id" button
      @click="edit(i)">
      <h3>{{ i.doc['ve:name']}}</h3>
      {{ i.doc}}
    </b-list-group-item>
  </b-list-group>
  {{items}}
</div>
</template>

<script>
export default {
  name: "Nodes",
  methods:{
    edit(item){
      console.log(item)
      this.$store.commit("local/editing", item)
    }
  },
  computed:{
    items:{
      get() { return this.$store.state.local.items},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
