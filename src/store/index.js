import Vue from 'vue';
import Vuex from 'vuex';
import Chat from './modules/Chat';
//새로고침시 vuex데이터 초기화 방지
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Chat : Chat
    ,
  },
  plugins: [
    createPersistedState({
      paths : [
        
      ]
    })
  ]
})

export default store
