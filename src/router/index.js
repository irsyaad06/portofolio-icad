import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrganizationView from '../views/OrganizationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/organization',
      name: 'organization',
      component: OrganizationView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const id = to.hash.replace('#', '')
          if (id === 'hero') {
            resolve({ top: 0, behavior: 'smooth' })
          } else if (id === 'contact') {
            resolve({ top: document.body.scrollHeight, behavior: 'smooth' })
          } else {
            const el = document.getElementById(id)
            if (el) {
              let top = 0
              let currentEl = el
              while (currentEl && currentEl !== document.body) {
                top += currentEl.offsetTop
                currentEl = currentEl.offsetParent
              }
              resolve({ top, behavior: 'smooth' })
            } else {
              resolve({ el: to.hash, behavior: 'smooth' })
            }
          }
        }, 50) // small delay to allow Vue to process routes
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
