import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/features', name: 'features', component: () => import('../views/FeaturesView.vue') },
  { path: '/pricing', name: 'pricing', component: () => import('../views/PricingView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/signup', name: 'signup', component: () => import('../views/SignUpView.vue') },
  { path: '/login', name: 'login', component: () => import('../views/LogInView.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('../views/NotFoundView.vue') },
  { path: '/cookies', name: 'cookies', component: () => import('../views/NotFoundView.vue') },
  { path: '/terms',   name: 'terms',   component: () => import('../views/NotFoundView.vue') },
  // Catch-all — must stay last
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router