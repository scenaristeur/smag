<template>
  <b-row>
    <b-col cols="12" md="4">
      <b-input-group class="mb-3" cols="12" md="4">
        <b-form-input v-model="words" placeholder="search or create"
        v-on:keydown.enter="create"></b-form-input>
        <b-input-group-append>
          <!-- <b-button variant="outline-success">Button</b-button> -->
          <b-button v-if="words.length > 0" variant="info" @click="create">Create</b-button>
          <b-button v-if="words.length > 0" variant="outline-secondary" @click="words=''">X</b-button>

        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import * as Choudbi from '@/agents/choudbi'
export default {
  name: "SearchOrCreate",
  data(){
    return {
      words: ''
    }
  },
  methods:{
    async create(){
      let choudbi = new Choudbi({debug: true})
      console.log(choudbi)
      let item = {'ve:name': this.words, 've:age': 0, 've:status': "creating"}
      choudbi.update_data(item)
      choudbi.debug()
      await this.$store.dispatch('choudbi/update', choudbi)
      await this.$store.commit('app/editing', choudbi._data)
      this.words = ''
    },
  },
  watch: {
    words(){
      this.$store.commit('app/setSearch', this.words)
    }
  },
  computed:{
    choudbi:{
      get() { return this.$store.state.choudbi.choudbi},
      set(choudbi) {this.$store.dispatch('choudbi/update', choudbi)}
    },
  }
}
</script>

<style>

</style>
