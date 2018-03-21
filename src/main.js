import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import HelloWorld from './components/HelloWorld'

import 'lib-flexible'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/hello',
  component: HelloWorld
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app-box',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(vm)
