import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 도메인으로 접속시 리다이렉트 설정
    path: '/',
    name: '/',
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
  {
    name: '/chatting-list',
    path: '/chatting-list',
    component: () => import('@/view/chatting/ChattingList.vue'),
  },
  {
    name: '/chatting-detail',
    path: '/:id',
    component: () => import('@/view/chatting/ChattingDetail.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
