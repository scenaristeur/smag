// this.options = agent properties
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
  "ve:tags": '',
  "ve:age": -1 ,
  //  "ve:privacy": 'private',
  "ve:type": {"@id": "ve:agent"},
  "ve:properties": []
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
