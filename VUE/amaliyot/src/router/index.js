import { createWebHistory, createRouter } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
let routes = [
 {
  path: '/',
  component: Login,
 },
  {
  path: '/dashboard',
  component: Dashboard,
 }
]

const router = createRouter({
 history: createWebHistory(),
 routes
}
)

export default router 