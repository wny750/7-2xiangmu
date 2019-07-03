import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './plugins/router'
import axios from './plugins/axios' 
import store from './plugins/store'


Vue.prototype.baseUrl = require('../config/config').active

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
