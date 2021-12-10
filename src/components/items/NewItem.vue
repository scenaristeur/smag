<template>
  <div>
    <b-iconstack font-scale="3"  @click="newItem" class="floating-action-button" type="button">
      <b-icon stacked icon="circle-fill" variant="warning"></b-icon>
      <b-icon stacked icon="pencil" scale="0.5" variant="primary"></b-icon>
      <b-icon stacked icon="circle" variant="info"></b-icon>
    </b-iconstack>
  </div>
</template>

<script>
import * as Tension from '@/agents/tension'

export default {
  name: "NewItem",
  methods:{
    newItem(){
      console.log("ADDBUTTON")
      let tension1 = new Tension({name: "Tension 1"})
      tension1.print()
      tension1.log("yohoho, hello!")

      tension1.alert()
      tension1.send('theUser', {action: "name"})
      window.env.removeAgentByName('fictif 1')
      let agents = window.env.getAgents()
      console.log(agents)
      //  this.$router.push({ name: 'edit', params: {modele: this.modele} });
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
