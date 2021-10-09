import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import City from '../components/city/City.vue'
import Detail from '../components/details/Detail.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new Router({
  routes
})

export default router
