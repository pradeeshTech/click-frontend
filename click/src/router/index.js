import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // Public Routes (Accessible to Everyone)
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: { guest: true }, // Only accessible when NOT logged in
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue'),
    meta: { guest: true }, // Only accessible when NOT logged in
  },

  // Protected Routes (Requires Authentication)
  {
    path: '/userPanel/:id?',
    name: 'userPanel',
    component: () => import('@/views/userPanel.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/setting.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'profile',
        name: 'setting-profile',
        component: () => import('@/views/profile.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'plan-details',
        name: 'setting-plan-details',
        component: () => import('@/views/viewPlan.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },

  // Not Found Routes
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/components/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Global Navigation Guard for Authentication
router.beforeEach((to, from, next) => {
  console.log('Matched Routes:', to.matched) // Debugging

  const isAuthenticated = !!localStorage.getItem('authToken') // Check if user is logged in

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    console.log('Protected route detected. Redirecting to login...')
    next('/login') // Redirect to login if not authenticated
  } else if (to.matched.some(record => record.meta.guest) && isAuthenticated) {
    console.log('Guest route detected. Redirecting to home...')
    next('/') // Redirect home if logged-in user tries to access guest routes
  } else {
    next() // Proceed as normal
  }
})

export default router
