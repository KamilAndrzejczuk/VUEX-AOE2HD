import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

