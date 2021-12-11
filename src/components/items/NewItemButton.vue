<template>
  <b-iconstack font-scale="3"  @click="newItem" class="floating-action-button" type="button">
    <b-icon stacked icon="circle-fill" variant="warning"></b-icon>
    <b-icon stacked icon="pencil" scale="0.5" variant="primary"></b-icon>
    <b-icon stacked icon="circle" variant="info"></b-icon>
  </b-iconstack>
</template>

<script>
export default {
name: "NewItemButton",
methods:{
  newItem(){
    this.$store.commit('app/setCurrentItem', {})
    // this.item = {}
    // this.tension = new Tension({name: "New Tension"})
    // console.log(this.tension)
    // this.item = this.tension.data
    // this.$bvModal.show("newItemModal")
  },
}
}
</script>

<style>
.floating-action-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index:3;
}
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
