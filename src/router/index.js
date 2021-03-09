import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta : {wrapper : 'DefaultWrapper'}
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {wrapper: 'MenuWrapper'}
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work'),
      meta: {wrapper: 'MenuWrapper'}
    },
    {
      path: '/atlantis',
      name: 'Atlantis',
      component: () => import('../views/projects/Atlantis'),
      meta: {wrapper: 'MenuWhiteWrapper'}
    },
    {
      path: '/scrollandride',
      name: 'ScrollAndRide',
      component: () => import('../views/projects/ScrollAndRide'),
      meta: {wrapper: 'MenuWhiteWrapper'}
    },
    {
      path: '/timburton',
      name: 'TimBurton',
      component: () => import('../views/projects/TimBurton'),
      meta: {wrapper: 'MenuWhiteWrapper'}
    },
    {
      path: '/motiondesign',
      name: 'MotionDesign',
      component: () => import('../views/projects/MotionDesign'),
      meta: {wrapper: 'MenuWhiteWrapper'}
    },
    {
      path: '/room',
      name: 'Room',
      component: () => import('../views/projects/Room'),
      meta: {wrapper: 'MenuWhiteWrapper'}
    }
  ]
})
/*component : () => import(/!* webpackChunkName: "about" *!/ '../views/Home.vue')*/
/*
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})*/
