// var eve = require('evejs');
import * as eve from  'evejs/dist/eve.custom-request.js';

export function HelloAgent(id) {
  // execute super constructor
  eve.Agent.call(this, id);
  // extend the agent with support for requests
  this.extend('request');
  // alternatively, the request module can be loaded in a separate namespace
  // instead of extending the agent itself:
  //   this.request = this.loadModule('request');
  //   this.request.request(...)
  this.count = 0

  // connect to all transports configured by the system
  this.connect(eve.system.transports.getAll());
}

// extend the eve.Agent prototype
HelloAgent.prototype = Object.create(eve.Agent.prototype);
HelloAgent.prototype.constructor = HelloAgent;

HelloAgent.prototype.sayHello = function(to) {
  this.send(to, 'Hello ' + to + '!');
};

HelloAgent.prototype.receive = function(from, message) {
  console.log(from + ' said: ' + JSON.stringify(message));
  // document.write(from + ' said: ' + JSON.stringify(message) + '<br>');

  if (typeof message == "string" && message.indexOf('Hello') === 0) {
    // reply to the greeting
    this.send(from, 'Hi ' + from + ', nice to meet you!');
    // return value is send back as reply in case of a request
    return 'Hi ' + from + ', Here is the answer of your request!';
  }
  // else{
  //   if(this.count <10)
  //   {
  //     this.count ++
  //     this.send(from, 'Hi ' + from + 'my count is '+this.count );
  //   }
  // }
};
