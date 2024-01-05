import { createRouter, createWebHistory } from 'vue-router'
import appRouter from './app-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...appRouter]
})

export default router
