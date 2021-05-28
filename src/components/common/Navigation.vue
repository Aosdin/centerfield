<template>
  <nav class="nav">
    <!-- 로그인 전(s) -->
    <ul class="navtop">
      <li><a href="#" class="ftc-primary">LOGIN</a></li>
    </ul>
    <!--// 로그인 전(e) -->
    <!-- 로그인 후(s) -->
    <ul class="navtop">
      <li><span class="username">김센터</span></li>
      <li><a href="#">LOGOUT</a></li>
    </ul>
    <!--// 로그인 후(e) -->
    <!-- <a href="javascript:;" @click="hideNavi">메뉴닫기</a> -->
    <ul class="gnb1">
      <li>
        <router-link :to="{ name: 'main' }" exact>
          <span>HOME</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'floor1' }"><span>2F</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'floor1' }"><span>1F</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'floor1' }"><span>B1</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'floor1' }"><span>B2</span></router-link>
      </li>
    </ul>
    <ul class="gnb2">
      <li>
        <a href="#"><span>ABOUT</span></a>
      </li>
      <li>
        <router-link :to="{ name: 'floorInfo' }"><span>FLOOR MAP</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'location' }"><span>LOCATION</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'parkingInfo' }"><span>PARKING</span></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'eventCouponList' }"><span>EVENT</span></router-link>
      </li>
      <li>
        <a href="#"><span>NOTICE</span></a>
      </li>
      <li>
        <a href="#" class="gnb-search"><span>SEARCH</span></a>
      </li>
    </ul>
    <div class="lang-select">
      <a href="#"><span>ENGLISH</span></a>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions('common', {
      setNavigation: 'setNavigation',
    }),
    hideNavi() {
      this.setNavigation(false);
    },
  },
};
</script>
