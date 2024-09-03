import { createApp } from 'vue';
import App from './App.vue'
import socketPlugin from './plugins/socketPlugin'
import vuetify from './plugins/vuetify';

import router from '@/router'
// import vueMoment from './plugins/vue-moment'
//import commonApi from './api/common/common.api'
//import emitterApi from './api/emitter/emitter.api'
//import '@/plugins'
//import bridge from './plugins/bridge.plug.js'
import store from './store'


//

//Vue.use(bridge)
// Vuetify 인스턴스 생성

//Vue.prototype.$emitterApi = emitterApi
//Vue.prototype.$commonApi = commonApi
createApp(App)
    .use(vuetify)
    .use(socketPlugin)
    .use(router)
    .use(store)
    .mount('#app')

