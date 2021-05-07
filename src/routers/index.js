import Vue from 'vue';
import VueRouter from 'vue-router';

import FullBase from '@/container/FullBase';
// modules
import api from './api';

// page
import Main from '@/pages/Main';
import Floor1 from '@/pages/Floor1';
import TenantDetail from '@/pages/TenantDetail';

/**
 * Vue router
 * https://router.vuejs.org
 * Must call `Vue.use` before creating new instance
 */
Vue.use(VueRouter);

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
          component: Main,
        },
      ],
    },
    {
      path: '/floor1',
      component: FullBase,
      children: [
        {
          path: '/floor1',
          name: 'floor1',
          component: Floor1,
        },
      ],
    },
    {
      path: '/tenantDetail',
      component: FullBase,
      children: [
        {
          path: '/tenantDetail',
          name: 'tenantDetail',
          component: TenantDetail,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  // TODO: Checking authentications
  next();
});
router.afterEach((to, from, next) => {
  // TODO: Checking authentications
});

export default router;
