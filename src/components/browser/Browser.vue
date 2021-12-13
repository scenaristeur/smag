<template>
  <b-container v-if="path != null">
    <b-button-toolbar>
     <b-button-group class="mr-1">
       <b-button title="Check" @click="check">check
         <!-- <b-icon icon="cloud-upload" aria-hidden="true"></b-icon> -->
       </b-button>
       <b-button title="Home" @click="path={url:pod.storage}">
         <b-icon icon="house-fill" aria-hidden="true"></b-icon>
       </b-button>
       <b-button title="New document">
         <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
       </b-button>
     </b-button-group>

   </b-button-toolbar>

    path : {{path.url}} <span v-if="loading==true">Loading...</span>
    <!-- resources : {{resources}} -->

      <b-list-group class="scroll">
      <b-list-group-item button v-for="r in resources" :key="r.url" @click="path=r">
        {{r.icon}} {{r.name}}
      </b-list-group-item>

    </b-list-group>
  </b-container>
</template>

<script>
export default {
  name: "Browser",
  data(){
    return{
      path: null,
      resources: [],
      loading: false
    }
  },
  methods: {
    check(){
      this.$checkSession()
    },
    async explore(path){
      this.loading = true
      this.resources = await this.$getResources(path.url)
      this.loading = false
    }
  },
  watch:{
    path(){
      this.explore(this.path)
    },
    pod(){
      if(this.pod != null){
        this.path = {url: this.pod.storage}
      }else{
        this.path = null
        this.resources = []
      }
    }
  },
  computed:{
    pod() {
      return this.$store.state.solid.pod
    }
  }
}
</script>

<style>
.scroll{
  max-height: 80vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
