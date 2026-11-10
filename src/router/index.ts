import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DuDoanDaLuuView from '../views/DuDoanDaLuuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/du-doan-da-luu',
      name: 'du-doan-da-luu',
      component: DuDoanDaLuuView,
    },
  ],
})

export default router
