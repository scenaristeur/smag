// var eve = require('evejs');
import * as eve from  'evejs/dist/eve.custom.js';

export function HelloAgent(id) {
  // execute super constructor
  eve.Agent.call(this, id);
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
  }
  // else{
  //   if(this.count <10)
  //   {
  //     this.count ++
  //     this.send(from, 'Hi ' + from + 'my count is '+this.count );
  //   }
  // }
};
