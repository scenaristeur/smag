var Agent = require('../agent');

// let schema = {
//   "ve:type": {"@id": "ve:tension"},
//   "ve:wi" : 'what is ?',
//   "ve:wsb": 'test in root and in properties',
//   "ve:proposition": '',
// }

let props = [
  {"name": 've:wi', "values": [], label: "What is ?", value_type: "text", order: 1},
  {"name": 've:wsb', "values": [], label: "What should be ?", value_type: "text", order: 2},
  {"name": 've:proposition', "values": [], label : "Your proposition ", value_type: "longtext", order: 3},
]

class Tension extends Agent {

  constructor(options){
    super(options); // this is required
    // this.data = Object.assign(this.data, schema);
    this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
    console.log(this.data);
  }

  alert(){
    alert(JSON.stringify(this.data, null, 2))
  }

}
module.exports = Tension;
