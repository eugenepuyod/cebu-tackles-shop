import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
