<template>
  <div>
    <!-- {{node}} Lite <hr>
    {{liteNode}} -->
    <b-button v-if="liteItem" size="sm" variant="info" @click="editItem">{{liteItem['ve:name']}}</b-button>
    <b-alert v-else show variant="warning">Oh oh, it seems that item with id {{item.id}} as been deleted :-(</b-alert>
  </div>
</template>

<script>
export default {
  name: "ItemLite",
  props: ['item'],
  methods:{
    editItem(){
      console.log("edit item")
      // this.$store.commit('nodes/setCurrentNode', this.liteNode)
      // this.$router.push({ name: 'edit'});
    }
  },
  computed: {
    liteItem() {
      return this.$store.state.local.items.filter(i => i.id == this.item.id)[0]
    },
  }
}
</script>

<style>

</style>
