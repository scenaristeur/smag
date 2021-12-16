// this.options = agent properties
// vue lifecycle https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforecreate
// js object lifecycle https://www.coursera.org/lecture/javascript-jquery-json/javascript-object-life-cycle-4pedI
const { v4: uuidv4 } = require('uuid');

let schema = {
  "@context": {
    "@vocab": "https://www.w3.org/ns/activitystreams",
    "as": "https://www.w3.org/ns/activitystreams",
    "ve": "https://scenaristeur.github.io/verse/",
    //  "@id": "id",
    "@type": "type"
  },
  //"ve:name":'',
  "type": "choudbi",
  //"ve:age": -1 ,
  "ve:properties": [],
  "ve:tags": '',
  "ve:status": 'init'
  //  "ve:privacy": 'private',

}


class Choudbi{

  constructor(options = {}){
    //this.env = window.env || {}
    this.options = options ;
    this._data = Object.assign({}, schema);
    //  this.id == undefined ? this.id = uuidv4() : ""
    //this.name = this.options.name || this.id

    this._data['as:created'] = Date.now()

    //  console.log("construct", this.options)
    if (options.debug == true){this.debug()}


  }

  debug(){
    console.log("--- DEBUG --- CHOUDBI : ",this)
    console.log("--- DEBUG --- CHOUDBI_options : ",this.options)
    console.log("--- DEBUG --- CHOUDBI_data : ",this._data)
    console.log("--- DEBUG --- CHOUDBI_data.properties : ",this._data['ve:properties'])
  }


save(){
  console.log("save", this)
}
  update_data(val){
    this._data = Object.assign(this._data, val);
  }

  update_status(val){
    this['ve:status'] = val
  }

  addProperty(name){
    this['ve:status'] = "addProp"
    let prop = {id: uuidv4(), name: name, values: []}
    this._data['ve:properties'].push(prop)
  }


}
module.exports = Choudbi;
