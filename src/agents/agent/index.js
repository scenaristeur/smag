// this.o = agent properties

let schema = {
  "@context": {
    "@vocab": "https://www.w3.org/ns/activitystreams",
    "ve": "https://scenaristeur.github.io/verse/",
    "@id": "id",
    "@type": "type"
  },
  "ve:name":'',
  "ve:tags": '',
  "ve:age": 0 ,
  "ve:privacy": 'private',
  "ve:type": {"@id": "ve:agent"},
  "ve:properties": []
}


  class Agent{

    constructor(options){
      this.o = options ;
      this.data = schema
      this.data['ve:created'] = Date.now()
      //  console.log("construct", this.o)
      if (options.debug == true){this.debug()}
    }

    debug(){
      console.log("--- DEBUG --- props : ",this.o)
      console.log("--- DEBUG --- data : ",this.data)
    }

    print(){
      console.log("--printing props : ",this.o, this.data)
    }

    log(text){
      console.log('-----log--- ',text)
    }

    async wait (str, callback){
      let name = this.o.name
      setTimeout(function() {
        str+= " "+name
        callback(str);
      }, 3000);
    }


  }
  module.exports = Agent;
