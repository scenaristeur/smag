<template>
  <div>
    <b-row>
      <b-col sm="3">
        <label for="name"><code>Name</code>:</label>
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
      <NodeProperties :item="item" />
    </b-row>
  </div>
</template>

<script>
export default {
  name: "NodeEditor",
  props: ['item'],
  components: {
    'NodeProperties': () => import('@/views/nodes/NodeProperties'),
  },
  mounted(){
    this.$refs.name.focus()
  },
  watch:{
    editing(){
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
