import Vue from 'vue'
import VueRouter from 'vue-router'

import FullBase from '@/container/FullBase'
// modules

// page
import Main from '@/pages/Main'
import Main2 from '@/pages/Main2'
import F1 from '@/pages/F1'

/**
 * Vue router
 * https://router.vuejs.org
 * Must call `Vue.use` before creating new instance
 */
Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FullBase,
      children: [
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/main2',
          name: 'main2',
          component: Main2
        },
        {
          path: '/f1',
          name: 'f1',
          component: F1
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // TODO: Checking authentications
  next()
})
router.afterEach((to, from, next) => {
  // TODO: Checking authentications
})

export default router
