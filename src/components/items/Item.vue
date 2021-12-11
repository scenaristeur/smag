<template>
  <b-card>
    <b-card-title>{{item['ve:name']}}</b-card-title>
    <b-button size="sm" variant="danger" @click="$emit('delete',item)">Delete</b-button>
    <b-button size="sm" @click="$emit('edit',item)">Edit</b-button>
    <!-- <a :href="'https://scenaristeur.github.io/verse?source='+item['ve:url']" target="_blank">
    <b-button size="sm" variant="outline-primary">
    <b-icon icon="share-fill" aria-label="Share"></b-icon>
  </b-button>
</a> -->
{{item['ve:age']}}
<b-card-header>
  <b>What is :       </b> {{item['ve:wi']}}
  <hr>
  <b>What should be: </b>{{item['ve:wsb']}}
</b-card-header>


<b-card-text>
  <div v-html="item['ve:proposition']">
  </div>
</b-card-text>

<b-card-footer>
  <span v-if="item['ve:url'] != undefined">remote</span><span v-else><b-button @click="putOnline">local</b-button></span>
  <!-- [[dendrites- watch]]{{node.modele}}[[axione - send]] -->
</b-card-footer>
<Properties :item="item" />
</b-card>
</template>

<!-- title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 20rem;"
class="mb-2" -->
<script>

import { PodAgent } from '@/agents/PodAgent.js';

import { HelloAgent } from '@/agents/HelloAgent.js';


export default {
  name: "Item",
  props: ['item'],
  components: {
    'Properties': () => import('@/components/items/Properties'),
  },
  created(){
    // this.agentItem = new HelloAgent('agentItem');
    //  this.podAgent1 = new PodAgent('podAgent1');
    this.agent3 = new HelloAgent('agent3');
    this.agent4 = new HelloAgent();
    this.podAgent1 = new PodAgent();
    console.log("PODAGENT",this.podAgent1)
  },
  methods:{
    putOnline(){
      console.log(this.item)
      let app = this
      //  console.log(this.agentItem, this.podAgent1)
      try{
        //  this.agentItem.send('subscribe1', "hello")

        // send a message to agent1
        //this.agent4.send('agent3', 'Hello agent3!, a basic send')
        let message = {
          action: "create",
          content : JSON.stringify(this.item, null, 2),
          file: {type: 'application/ld+json'},
          url: 'https://agora.solidcommunity.net/public/blackboard/'+this.item.id


        }
        this.agent4.request(this.podAgent1.id, message)
        // this.agent4.request('agent3', 'Hello agent1! a request')
        .then(function(reply) {
          console.log('reply: ', reply);
          try{
          console.log(reply.internal_resourceInfo.sourceIri)
          app.item['ve:url'] = reply.internal_resourceInfo.sourceIri
        }catch(e){
          console.log(e)
        }
        });
      }catch(e){
        console.log("e",e)
      }
      // this.agentItem.request('subscribe1', this.item).then(function(reply) {
      //   console.log('reply from pod: ' + reply);
      // });
    }
  }
}
</script>

<style>

</style>
