import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn.vue')
    },
    {
      path: '/student',
      name: 'student',
      meta: {login: true},
      component: () => import('./views/Student.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue'),
      meta: {login: true},
      redirect: '/community/academic',
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic.vue')
        },
        {
          path: 'downLoad',
          name: 'downLoad',
          component: () => import('./views/DownLoad.vue')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal.vue')
        }
      ]
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./views/Question.vue')
    },
    {
      path: '*',
      redirect(to) {
        if (to.path == '/') {
          return '/home';
        } else {
          return '/notFound';
        }
      }
    }
  ]
})
