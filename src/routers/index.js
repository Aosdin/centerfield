import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

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
import EventDetail from '@/pages/EventDetail';
import CouponDetail from '@/pages/CouponDetail';
import Notice from '@/pages/Notice';
import Faq from '@/pages/Faq';
import Login from '@/pages/Login';
import Login2 from '@/pages/Login2';

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
        {
          path: '/floor1',
          name: 'floor1',
          component: Floor1,
        },
        {
          path: '/tenantDetail',
          name: 'tenantDetail',
          component: TenantDetail,
        },
        {
          path: '/floorInfo',
          name: 'floorInfo',
          component: FloorInfo,
        },
        {
          path: '/parkingInfo',
          name: 'parkingInfo',
          component: ParkingInfo,
        },
        {
          path: '/eventCouponList',
          name: 'eventCouponList',
          component: EventCouponList,
        },
        {
          path: '/eventDetail',
          name: 'eventDetail',
          component: EventDetail,
        },
        {
          path: '/couponDetail',
          name: 'couponDetail',
          component: CouponDetail,
        },
        {
          path: '/notice',
          name: 'notice',
          component: Notice,
        },
        {
          path: '/faq',
          name: 'faq',
          component: Faq,
        },
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/login2',
          name: 'login2',
          component: Login2,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  // TODO: Checking authentications
  store.dispatch('common/setNavigation', false);
  next();
});
router.afterEach((to, from, next) => {
  // TODO: Checking authentications
});

export default router;
