<template>
  <div>
    sma<br>
    <b-button @click="boardTest">boardTest</b-button>
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
import * as Board from '@/agents/acteur'
// import  'evejs/dist/eve.custom-request.js';

import { HelloAgent } from '@/agents/HelloAgent.js';
import { SnifferAgent } from '@/agents/SnifferAgent.js';
import { SubscribeAgent } from '@/agents/SubscribeAgent.js';

// import { Observable } from 'object-observer/dist/object-observer.min.js';

export default {
  name: "Sma",
  data(){
    return{
      // observables: [],
      url : "https://agora.solidcommunity.net/public/blackboard/"
    }

  },
  created(){
    let debut = Date.now()
    // create two agents
    this.agent1 = new HelloAgent('agent1');
    this.agent2 = new HelloAgent('agent2');
    this.sniffer1 = new SnifferAgent('sniffer1');
    this.subscribe1 = new SubscribeAgent('subscribe1');
    console.log(this.agent1)
    console.log("sniffer",this.sniffer1)

    // send a message to agent1
    this.agent2.send('agent1', 'Hello agent1!, a basic send');

    // send a request to agent 1, await the response
    this.agent2.request('agent1', 'Hello agent1! a request')
    .then(function(reply) {
      console.log('reply: ' + reply);
    });

    //  this.agent2.send('sniffer1', 'Hello agent1!, a basic send');


    this.agent2.send('subscribe1', {url : this.url})
    // .then(function(reply) {
    //   //  let res = JSON.stringify(reply)
    //   let delay = Date.now() - debut
    //   console.log('reply FOLDER from subscribe1: ',delay , reply);
    //   //  console.log(reply.resources[0].url, reply.resources[0].file)
    //   //  alert('reply from SNIFFR: '+delay+' '+  reply.resources[0].url+ ' '+ JSON.stringify(reply, null, 2));
    // });


//let app = this
    this.agent2.request('sniffer1', {url : this.url})
    .then(function(reply) {
      //  let res = JSON.stringify(reply)
      let delay = Date.now() - debut
      console.log('reply from SNIFFR: ',delay , reply);
      console.log(reply.resources[0].url, reply.resources[0].file)

      // reply.resources.forEach((r) => {
      //   console.log("res",r)
      //   app.agent2.send('subscribe1', r)
      //   // .then(function(reply) {
      //   //   //  let res = JSON.stringify(reply)
      //   //   let delay = Date.now() - debut
      //   //   console.log('reply from subscribe1: ',delay , reply);
      //   //   //  console.log(reply.resources[0].url, reply.resources[0].file)
      //   //   //  alert('reply from SNIFFR: '+delay+' '+  reply.resources[0].url+ ' '+ JSON.stringify(reply, null, 2));
      //   // });
      //
      // });

    //  alert('reply from SNIFFR: '+delay+' '+  reply.resources[0].url+ ' '+ JSON.stringify(reply, null, 2));
    });

    // this.agent2.request('subscribe1', {url : this.url})
    // .then(function(reply) {
    //   //  let res = JSON.stringify(reply)
    //   let delay = Date.now() - debut
    //   console.log('reply from subscribe1: ',delay , reply);
    //   //  console.log(reply.resources[0].url, reply.resources[0].file)
    //   //  alert('reply from SNIFFR: '+delay+' '+  reply.resources[0].url+ ' '+ JSON.stringify(reply, null, 2));
    // });


    this.env = new Environnement({name: "env", store: this.$store, type: 'Vue2', vue: this})
    console.log(this.env)
    this.board = new Board({name: "board"})
    this.board.print()
    this.acteur = new Acteur({name: "user"})

    this.acteur.print()
    this.acteur.log("yohoho, hello i'm the principal actor!")
    let fictif = new Acteur({name: "fictif 1"})
    console.log("fictif 1", fictif)
    let agents = window.env.getAgents()
    console.log(agents)
  },
  methods:{
    boardTest(){
      this.acteur.send("board", {action: "put", content: {text: "hello", world: "world"}})
      this.acteur.send("board", {action: "read"})
    }
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
