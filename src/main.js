import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import SolidPodPlugin from './plugins/solid-pod';
Vue.use(SolidPodPlugin, {store: store});
import SolidDataPlugin from './plugins/solid-data';
Vue.use(SolidDataPlugin, {store: store});
import AutomergePlugin from './plugins/automerge';
Vue.use(AutomergePlugin, {store: store});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
