var Agent = require('../agent');

let schema = {
  "ve:type": {"@id": "ve:tension"},
  "ve:wi" : 'what is ?',
  "ve:wsb": 'test in root and in properties',
  "ve:proposition": '',
}

let props = [
  {"name": 've:wi', "value": " in the props What is in prop ?"},
  {"name": 've:wsb', "value": "What should be in prop ?"},
  {"name": 've:proposition', "value": "What is in prop ?"},
]

class Tension extends Agent {

  constructor(options){
    super(options); // this is required
    this.data = Object.assign(this.data, schema);
    this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
    console.log(this.data);
  }

  alert(){
    alert(JSON.stringify(this.data, null, 2))
  }

}
module.exports = Tension;
