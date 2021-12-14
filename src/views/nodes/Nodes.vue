<template>
  <div>
    Nodes {{items.length}}
    <br>

     {{items}}
  </div>
</template>

<script>
export default {
  name: "Nodes",
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
