import Vue from 'vue'
import VueRouter from 'vue-router'
import DashbordPage from '../views/DashbordPage.vue'
import ElecteurPage from '../views/ElecteurPage.vue'
import CandidatPage from '../views/CandidatPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashbordPage',
    component: DashbordPage
  },
  {
    path: '/Electeur',
    name: 'ElecteurPage',
    component: ElecteurPage
  }
  ,
  {
    path: '/Candidat',
    name: 'CandidatPage',
    component: CandidatPage
  }
  ,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
