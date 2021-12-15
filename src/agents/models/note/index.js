var Agent = require('../agent');

let schema = {
  "type": "note",
  // "ve:wi" : 'what is ?',
  // "ve:wsb": 'test in root and in properties',
  // "ve:proposition": '',
}

let props = [
  {"name": 've:content', "values": [], label: "What are you thinking ?", value_type: "text", order: 1},
]

class Note extends Agent {

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
module.exports = Note;
