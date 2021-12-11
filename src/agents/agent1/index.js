// this.options = agent properties
// vue lifecycle https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforecreate
// js object lifecycle https://www.coursera.org/lecture/javascript-jquery-json/javascript-object-life-cycle-4pedI
const { v4: uuidv4 } = require('uuid');

let schema = {
  "@context": {
    "@vocab": "https://www.w3.org/ns/activitystreams",
    "as": "https://www.w3.org/ns/activitystreams",
    "ve": "https://scenaristeur.github.io/verse/",
    "@id": "id",
    "@type": "type"
  },
  "ve:name":'',
  "type": "agent",
  "ve:age": -1 ,
  "ve:properties": [],
  "ve:tags": ''
  //  "ve:privacy": 'private',

}


class Agent{

  constructor(options = {}){
    //this.env = window.env || {}
    this.options = options ;
    this.id == undefined ? this.id = uuidv4() : ""
    this.name = this.options.name || this.id
    this.data = schema
    this.data['as:created'] = Date.now()
    //  console.log("construct", this.options)
    if (options.debug == true){this.debug()}
    //this.send('env',{action:'addAgent', value:this})
    if(window.env != undefined){
      window.env.pushAgent(this)
    }else{
      console.log("can not add to env", this)
    }

  }
  save(data){
    console.log("saving", data)
    window.env.save(data)
  }

  send(to, message){
    let from = {id: this.id, name: this.name}
    console.log("SEND","from",from, "to",to, message)
  }

  debug(){
    console.log("--- DEBUG --- props : ",this.options)
    console.log("--- DEBUG --- data : ",this.data)
  }

  print(){
    console.log("--printing props : ",this.options, this.data)
  }

  log(text){
    console.log('-----log--- ',text)
  }

  async wait (str, callback){
    let name = this.options.name
    setTimeout(function() {
      str+= " "+name
      callback(str);
    }, 3000);
  }
  alert(){
    alert(JSON.stringify(this.data, null, 2))
  }


}
module.exports = Agent;
