import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import FullBase from '@/container/FullBase'
// modules

// page
import Main from '@/pages/Main'
import Main2 from '@/pages/Main2'
import Floor1 from '@/pages/Floor1'
import TenantDetail from '@/pages/TenantDetail'
import FloorInfo from '@/pages/FloorInfo'
import ParkingInfo from '@/pages/ParkingInfo'
import EventCouponList from '@/pages/EventCouponList'
import EventDetail from '@/pages/EventDetail'
import CouponDetail from '@/pages/CouponDetail'
import Notice from '@/pages/Notice'
import Faq from '@/pages/Faq'
import Login from '@/pages/Login'
import Login2 from '@/pages/Login2'
import Join from '@/pages/Join'
import MyPage from '@/pages/MyPage'
import MyPagePop1 from '@/pages/MyPagePop1'
import MyPagePop2 from '@/pages/MyPagePop2'
import MyCoupon from '@/pages/MyCoupon'
import MyCoupon2 from '@/pages/MyCoupon2'
import Withdrawal from '@/pages/Withdrawal'
import Terms1 from '@/pages/Terms1'
import Terms2 from '@/pages/Terms2'
import Privacy from '@/pages/Privacy'

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
          name: 'main',
          component: Main2
        },
        {
          path: '/floor1',
          name: 'floor1',
          component: Floor1
        },
        {
          path: '/tenantDetail',
          name: 'tenantDetail',
          component: TenantDetail
        },
        {
          path: '/floorInfo',
          name: 'floorInfo',
          component: FloorInfo
        },
        {
          path: '/parkingInfo',
          name: 'parkingInfo',
          component: ParkingInfo
        },
        {
          path: '/eventCouponList',
          name: 'eventCouponList',
          component: EventCouponList
        },
        {
          path: '/eventDetail',
          name: 'eventDetail',
          component: EventDetail
        },
        {
          path: '/couponDetail',
          name: 'couponDetail',
          component: CouponDetail
        },
        {
          path: '/notice',
          name: 'notice',
          component: Notice
        },
        {
          path: '/faq',
          name: 'faq',
          component: Faq
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/login2',
          name: 'login2',
          component: Login2
        },
        {
          path: '/join',
          name: 'join',
          component: Join
        },
        {
          path: '/myPage',
          name: 'myPage',
          component: MyPage
        },
        {
          path: '/myPagePop1',
          name: 'myPagePop1',
          component: MyPagePop1
        },
        {
          path: '/myPagePop2',
          name: 'myPagePop2',
          component: MyPagePop2
        },
        {
          path: '/myCoupon',
          name: 'myCoupon',
          component: MyCoupon
        },
        {
          path: '/myCoupon2',
          name: 'myCoupon2',
          component: MyCoupon2
        },
        {
          path: '/withdrawal',
          name: 'withdrawal',
          component: Withdrawal
        },
        {
          path: '/terms1',
          name: 'terms1',
          component: Terms1
        },
        {
          path: '/terms2',
          name: 'terms2',
          component: Terms2
        },
        {
          path: '/privacy',
          name: 'privacy',
          component: Privacy
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // TODO: Checking authentications
  store.dispatch('common/setNavigation', false)
  next()
})
router.afterEach((to, from, next) => {
  // TODO: Checking authentications
})

export default router
