<template>
  <div>
    sma
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
  }
}
</script>

<style>

</style>
