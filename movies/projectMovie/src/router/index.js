import { createRouter, createWebHistory } from 'vue-router'

import AboutDetailView from '../views/AboutDetailView.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
  
    {
      path: '/about/:id',
      
    
      component: () => import('../views/AboutDetailView.vue')
    },
    
  ]
})

export default router
