# smag


# using scenaristeur/evejs multi-agent system
- in views/Sma.vue
```
import { HelloAgent } from '@/agents/HelloAgent.js';

...
this.agent1 = new HelloAgent('agent1');
this.agent2 = new HelloAgent('agent2');

console.log(this.agent1)

  // send a message to agent1
  this.agent2.send('agent1', 'Hello agent1!, a basic send');

  // send a request to agent 1, await the response
  this.agent2.request('agent1', 'Hello agent1! a request')
      .then(function(reply) {
        console.log('reply: ' + reply);
      });
      ```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
