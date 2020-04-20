import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Rent from '@/pages/rent/Rent'
import Room from '@/pages/room/Room'
import User from '@/pages/user/User'
import Space from '@/pages/space/Space'

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
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/space',
      name: 'Space',
      component: Space
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
