import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import userPanel from ''
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/userPanel/id=:id',
      name: 'userPanel',
      component:()=> import('@/views/userPanel.vue')
      // component: HomeView,
    }
  ],
})

export default router
