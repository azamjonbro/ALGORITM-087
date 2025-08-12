import { createRouter, createWebHistory } from 'vue-router';


const routes = [
 {
  path: "/",
  name: "HomePage",
  component: () => import("../components/Home.vue")
 },
 {
  path: "/about",
  name: "AboutPage",
  component: () => import("../components/About.vue")
 }
]


const router = createRouter({
 history: createWebHistory(),
 routes
})

export default router