import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventoryView from '../views/InventoryView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import FaqView from '@/views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'conntact',
      component: ContactView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
    return savedPosition || {}
  }
})

export default router
