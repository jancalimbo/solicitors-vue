import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsListVue from '../views/students/StudentsList.vue'
import SolicitorsLists from "../views/solicitors-list/SolicitorsList.vue";
import SolicitorsListDetail from "../views/solicitors-list/SolicitorsListDetail.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      component: StudentsListVue
    },
    {
      path: '/solicitors-list',
      name: "solicitors-lists",
      component: SolicitorsLists,
    },
    {
      path: "/solicitors-list/:id",
      name:'solicitors-list-detail',
      component: SolicitorsListDetail,
      props: true,
    }
  ]
})

export default router
