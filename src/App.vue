<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>


    <!-- <Hello /> -->
    <router-view/>
    <hr>
<Checklist />
    <Login />
        <Browser />
    <NewNote />
    <NewItem />
    {{session}}
    <!-- <Sma /> -->
    <small><i>0.0.2 - automerge </i></small>
  </div>
</template>


<script>
// import externalComponent from '@/utils/external-component';

// const Browser = () => externalComponent('https://components.solidcommunity.net/public/browser/Browser.ae504fb4d5080011b75e.umd.min.js');
// import externalComponent from '@/utils/external-component';
//
// const Hello = () => externalComponent('https://components.solidcommunity.net/public/hello/Hello.bdd71b8bbb487af4de05.umd.min.js');

export default {
  name: "App",
  components: {
    'Navbar': () => import('@/components/layout/Navbar'),
    'Login': () => import('@/components/solid/Login'),
    // Hello,
    // Browser: () => externalComponent('https://components.solidcommunity.net/public/browser/Browser.ae504fb4d5080011b75e.umd.min.js'),
    // Browser: () => externalComponent('https://components.solidcommunity.net/public/browser/Browser.umd.min.js'),
    'Browser': () => import('@/components/browser/Browser'),
    'NewNote': () => import('@/views/sharing/NewNote'),
    'NewItem': () => import('@/components/items/NewItem'),
    'Checklist': () => import('@/components/dev/Checklist'),
    // 'Sma': () => import('@/views/Sma'),
    // 'Workspaces': () => import('@/views/Workspaces'),
    // 'Synchro': () => import('@/components/Synchro'),
  },
  async created(){
    this.$checkSession()
    //this.$automergeTest()


  },
  mounted(){

  },
  watch:{
    $route(){
      //  console.log(this.$route, to, from)
      if(this.$route.query.source != undefined && this.$route.query.source.length >0){
        this.$processSource(this.$route.query)
      }else{
        this.$store.commit('nodes/setSource', null)
        this.$checkSession()
      }
    }
  },
  computed:{
    session:{
      get () { return this.$store.state.solid.session },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
