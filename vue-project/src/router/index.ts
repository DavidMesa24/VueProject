import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Inicio.vue'
import User from '../views/User.vue'
import Registro from '../views/Registro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },

    {
      path: '/registro',
      name: 'registro',
      component: Registro
  }
  ]
})

export default router