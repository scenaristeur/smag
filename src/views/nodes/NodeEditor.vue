<template>
  <div>

    <b-row v-if="choudbi != null">
        <!-- {{ choudbi}} -->
      <b-col sm="3">
        <label for="name"><code>Name</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="name" ref="name" v-model="choudbi._data['ve:name']" autocomplete="off" autofocus />
      </b-col>
      <b-col sm="3">
        <label for="age"><code>Age</code>:</label>
      </b-col>
      <b-col>
        <b-form-input
        id="age"
        v-model="choudbi._data['ve:age']"
        required type="number"  />
      </b-col>
    </b-row>

    <b-row>
      <NodeProperties v-if="choudbi != null" />
    </b-row>
  </div>
</template>

<script>
import * as Choudbi from '@/agents/choudbi'
export default {
  name: "NodeEditor",
  components: {
    'NodeProperties': () => import('@/views/nodes/NodeProperties'),
  },
  mounted(){
  //  this.$refs.name.focus()
  },
  watch:{
    choudbi(){
      //this.$refs.name != undefined ? this.$refs.name.focus(): ""
    },
    async editing(){
      console.log("EDITING", this.editing)
      this.choudbi = new Choudbi({debug: true})
      console.log(this.choudbi)
      this.choudbi.update_data(this.editing)
      this.choudbi.debug()
       await this.$store.dispatch('choudbi/update', this.choudbi)

      // let item = {'ve:name': this.words, 've:age': 0, 've:status': "creating"}
      // choudbi.update_data(item)
      // choudbi.debug()
      // await this.$store.dispatch('choudbi/update', choudbi)
    }
  },
  computed:{
    choudbi:{
      get() { return this.$store.state.choudbi.choudbi},
      set(choudbi) {this.$store.dispatch('choudbi/update', choudbi)}
    },
    editing:{
      get() { return this.$store.state.app.editing},
      set(/*note*/) {/*this.$store.commit('booklice/setCurrentNote', note)*/}
    },
  }
}
</script>

<style>

</style>
