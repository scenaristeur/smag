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
// import { Observable } from 'object-observer/dist/object-observer.min.js';

export default {
  name: "Sma",
  data(){
    return{
      observables: []
    }

  },
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
  watch:{
//     agents(){
//       this.observables = []
//       this.agents.forEach(agent => {
//         let observableAgent = Observable.from(agent);
//         this.observables.push(observableAgent)
//         observableAgent.observe(changes => {
//           changes.forEach(change => {
//             console.log("CHANGE", change);
//           });
//         });
//       });
// console.log(this.observables)
//     }
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
