import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RpgAwesome } from 'rpg-awesome/css/rpg-awesome.min.css'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
