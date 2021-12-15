<template>
  <b-row>
    <b-col cols="12" md="4">
      <b-input-group class="mb-3" cols="12" md="4">
        <b-form-input v-model="words" placeholder="search or create"></b-form-input>
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
export default {
  name: "SearchOrCreate",
  data(){
    return {
      words: ''
    }
  },
  methods:{
    async create(){
      let item = {'ve:name': this.words, 've:age': 0}
      await this.$store.dispatch('local/create', item)
      this.words = ''
    },
  },
  watch: {
    words(){
      this.$store.commit('app/setSearch', this.words)
    }
  }
}
</script>

<style>

</style>
