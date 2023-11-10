// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { routes as events } from '@/modules/events/router'
import beforeEach from './beforeEach'

const routes = [...events]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach(beforeEach)

export default router
