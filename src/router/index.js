import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Rent from '@/pages/rent/Rent'
import Room from '@/pages/room/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: Room
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
