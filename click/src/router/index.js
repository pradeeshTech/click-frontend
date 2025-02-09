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
      path: '/userPanel/id?',
      name: 'userPanel',
      component:()=> import('@/views/userPanel.vue')
      // component: HomeView,
    },
    {
      path: '/notFound',
      name: 'notFound',
      component:()=> import('@/components/NotFound.vue')
      // component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/components/NotFound.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component:()=> import('@/views/setting.vue'),
      children: [
        {
          path: 'profile', // This will resolve to '/setting/profile'
          name: 'setting-profile',
          component: () => import('@/views/profile.vue'),
        },
        {
          path: 'plan-details', // This will resolve to '/setting/plan-details'
          name: 'setting-plan-details',
          component: () => import('@/views/viewPlan.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },

  ],
})

export default router
