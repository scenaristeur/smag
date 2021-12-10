var Agent = require('../agent');

let agents = []
// let schema = {
//   "ve:type": {"@id": "ve:tension"},
//   "ve:wi" : 'what is ?',
//   "ve:wsb": 'test in root and in properties',
//   "ve:proposition": '',
// }

let props = [
  {"name": 've:type', "value": "virtual"},
  {"name": 've:size', "value": "unlinmited"},
  // {"name": 've:wsb', "value": "What should be in prop ?"},
  // {"name": 've:proposition', "value": "What is in prop ?"},
]

class Environnement extends Agent {

  constructor(options){
    super(options);
    //window.env = this// this is required
    // this.data = Object.assign(this.data, schema);
    this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
    console.log(this.data);
    window.env = this
  }

  pushAgent(a){
    agents.push(a)
    this.updateEnv()
  }
  removeAgentByName(name){
    agents = agents.filter(x => {return x.name != name})
    this.updateEnv()
  }
  getAgents(){
    return agents
  }

  updateEnv(){
    if(this.options.type == "vue2"){
      this.options.store.dispatch('sma/setAgents', agents)
    }
  }

}
module.exports = Environnement;
