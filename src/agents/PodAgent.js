// var eve = require('evejs');
import Vue from 'vue'
import * as eve from  'evejs/dist/eve.custom-request.js';

export function PodAgent(id) {
  // execute super constructor
  eve.Agent.call(this, id);
  this.extend('request');
  this.count = 0

  // connect to all transports configured by the system
  this.connect(eve.system.transports.getAll());
}

// extend the eve.Agent prototype
PodAgent.prototype = Object.create(eve.Agent.prototype);
PodAgent.prototype.constructor = PodAgent;

PodAgent.prototype.sayHello = function(to) {
  this.send(to, 'Hello ' + to + '!');
};

PodAgent.prototype.receive = async function(from, message) {
  console.log("POD : "+from + ' said: ' + JSON.stringify(message));
  // document.write(from + ' said: ' + JSON.stringify(message) + '<br>');
  let retour = {}
  try{
    let mess = message
    if (message.type == "request"){
      mess = message.message
    }
    if (mess.action == "read"){
      let file = await Vue.prototype.$getResource(mess)
      retour = file
    }else if (mess.action == "create"){
      let file = await Vue.prototype.$updateFile(mess)
      retour = file
    }else{
      retour = "i don't understand"
    }

  }catch(e){
    console.log(e)
    retour = e
  }

  return retour
  // let url = message.url
  // if (message.type == "request"){
  //   url = message.message.url
  // }
  // let resources = await Vue.prototype.$getResources(url)
  // console.log("$getResources", resources)
  // return {resources: resources};
  //return {resources: resources}
  // for (const r of resources){
  //   console.log(r)
  //   if (r.type == "folder"){
  //     r.resources = await Vue.prototype.$getResources(r.url)
  //   }
  // }
  //let resources = await getResources(message)
  //if (message.indexOf('Hello') === 0) {
  // reply to the greeting
  //  this.send(from, {resources: resources});

  // }else{
  //   if(this.count <10)
  //   {
  //     this.count ++
  //     this.send(from, 'Hi ' + from + 'my count is '+this.count );
  //   }
  // }
};

// async function getResources(r){
//   r.resources = await Vue.prototype.$getResources(r.url)
//   for (const (i, res) in r.resources){
//     let res  = r.resources[i]
//
//     if (res.type == "folder"){
//       console.log(res.url)
//       res.resources = await getResources(res)
//     }
//   }
//   console.log(r)
//   return r
//
// }
