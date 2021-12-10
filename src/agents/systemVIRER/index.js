//var Agent = require('../agent');




// let props = [
//   //  {"name": 've:pod', "value": null},
//   // {"name": 've:wsb', "value": "What should be in prop ?"},
//   // {"name": 've:proposition', "value": "What is in prop ?"},
// ]

class System /*extends Agent*/ {

  constructor(options){
    console.log(options)
    // super(options); // this is required
    //this.data = Object.assign(this.data, schema);
    //  this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
    //console.log(this.data);
  }
  pushAgent(a){
    agents.push(a)
  }
  removeAgentByName(name){
    agents = agents.filter(x => {return x.name != name})
  }
  getAgents(){
    return agents
  }

}
module.exports = System;
