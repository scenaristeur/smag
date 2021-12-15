var Agent = require('../agent');

let schema = {
  "type": "person",
  // "ve:wi" : 'what is ?',
  // "ve:wsb": 'test in root and in properties',
  // "ve:proposition": '',
}

let props = [
  {"name": 've:ville', "values": [], label: "Where does this person Live ?", value_type: "text", order: 1},
  {"name": 've:relation', "values": [], label: "Who does this person know ?", value_type: "text", order: 2},
  {"name": 've:description', "values": [], label : "Something about this person :", value_type: "longtext", order: 3},
]

class Person extends Agent {

  constructor(options){
    super(options); // this is required
    this.data = Object.assign(this.data, schema);
    this.init()
    console.log(this.data);
  }

  alert(){
    alert(JSON.stringify(this.data, null, 2))
  }
  init(){
    this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
  }

}
module.exports = Person;
