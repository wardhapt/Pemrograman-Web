import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/cart",
      name: "cart",
      // Lazy loading: halaman keranjang baru dimuat saat dibuka
      component: () => import("../views/CartView.vue")
    }
  ]
})

export default router
