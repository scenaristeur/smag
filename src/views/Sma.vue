<template>
  <div>
    sma<br>
    Agents :
    <ul>
      <li v-for="a in agents" :key="a.id">
        {{JSON.stringify(a, null, 2)}}
      </li>
    </ul>
  </div>
</template>

<script>
import * as Environnement from '@/agents/environnement'
import * as Acteur from '@/agents/acteur'


export default {
  name: "Sma",
  created(){
    let env = new Environnement({name: "env", store: this.$store, type: 'Vue2', vue: this})
    console.log(env)
    let acteur = new Acteur({name: "user"})

    acteur.print()
    acteur.log("yohoho, hello i'm the principal actor!")
    let fictif = new Acteur({name: "fictif 1"})
    console.log("fictif 1", fictif)
    let agents = window.env.getAgents()
    console.log(agents)
  },
  computed:{
    agents(){
      return this.$store.state.sma.agents
    },
  }
}
</script>

<style>

</style>
