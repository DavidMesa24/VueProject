import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Registro from '../views/Registro.vue'
import User from '../views/User.vue'
import UserCats from '../views/UserCate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/user/categoris',
      name: 'Categorias',
      component: UserCats,
    },
  ]
})

export default router
