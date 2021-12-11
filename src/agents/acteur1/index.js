var Agent = require('../agent');

// let schema = {
//   "ve:type": {"@id": "ve:tension"},
//   "ve:wi" : 'what is ?',
//   "ve:wsb": 'test in root and in properties',
//   "ve:proposition": '',
// }

// let props = [
//   {"name": 've:pod', "value": null},
//   // {"name": 've:wsb', "value": "What should be in prop ?"},
//   // {"name": 've:proposition', "value": "What is in prop ?"},
// ]

class Board extends Agent {

  constructor(options){
    super(options); // this is required
    // this.data = Object.assign(this.data, schema);
    //this.data['ve:properties'] = Object.assign(this.data['ve:properties'], props);
    console.log(this.data);
  }

}
module.exports = Board;
