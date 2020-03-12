import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

import 'normalize.css'
import 'skeleton-css/css/skeleton.css'
import './assets/css/style.css'

Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')