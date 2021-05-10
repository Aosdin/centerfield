import Vue from 'vue';
import VueRouter from 'vue-router';

import FullBase from '@/container/FullBase';
// modules

// page
import Main from '@/pages/Main';
import Main2 from '@/pages/Main2';
import Floor1 from '@/pages/Floor1';
import TenantDetail from '@/pages/TenantDetail';
import FloorInfo from '@/pages/FloorInfo';
import ParkingInfo from '@/pages/ParkingInfo';
import EventCouponList from '@/pages/EventCouponList';

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
        {
          path: '/main2',
          name: 'main',
          component: Main2,
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
    {
      path: '/floorInfo',
      component: FullBase,
      children: [
        {
          path: '/floorInfo',
          name: 'floorInfo',
          component: FloorInfo,
        },
      ],
    },
    {
      path: '/parkingInfo',
      component: FullBase,
      children: [
        {
          path: '/parkingInfo',
          name: 'parkingInfo',
          component: ParkingInfo,
        },
      ],
    },
    {
      path: '/eventCouponList',
      component: FullBase,
      children: [
        {
          path: '/eventCouponList',
          name: 'eventCouponList',
          component: EventCouponList,
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
