import { createStore } from 'vuex';
import Chat from './modules/Chat';
import User from './modules/User'
import Common from './modules/Common'
//새로고침시 vuex데이터 초기화 방지
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    Chat : Chat,
    User : User,
    Common : Common
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
