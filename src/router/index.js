import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 도메인으로 접속시 리다이렉트 설정
    path: '/',
  },
  {
    name: 'view',
    path: '/view',
    children : [
          {

            name: 'chatting',
            path: 'chatting',
            children : [
              {
                name: 'chatting-list',
                path: 'chatting-list',
                component: () => import('@/view/chatting/ChattingList.vue'),
              },
              {
                name: 'chatting-detail',
                path: ':id',
                component: () => import('@/view/chatting/ChattingDetail.vue'),
              }
            ]
          },
        ]
  }
]

// 베이스속성이 prefix입니다
// 베이스속성이 prefix입니다
// 베이스속성이 prefix입니다
const router = new VueRouter({
  // base: "/view",
  mode: 'history',
  routes
})

export default router
