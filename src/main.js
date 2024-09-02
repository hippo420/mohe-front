import Vue from 'vue'
import App from './App.vue'
import socketPlugin from './plugins/socketPlugin'
import vuetify from './plugins/vuetify'
import router from './router'
// import vueMoment from './plugins/vue-moment'
//import commonApi from './api/common/common.api'
//import emitterApi from './api/emitter/emitter.api'
import './plugins'
//import bridge from './plugins/bridge.plug.js'
import store from './store'


Vue.config.productionTip = false

//Vue.use(bridge)
Vue.use(socketPlugin)
//Vue.prototype.$emitterApi = emitterApi
//Vue.prototype.$commonApi = commonApi

var vm = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

window.app = vm;
