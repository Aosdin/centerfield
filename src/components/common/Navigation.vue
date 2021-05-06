<template>
  <nav class="nav">
    <ul class="navtop">
      <li><span class="username">김센터</span></li>
      <li><a href="#">LOGOUT</a></li>
    </ul>
    <!-- <a href="javascript:;" @click="hideNavi">메뉴닫기</a> -->
    <ul class="gnb1">
      <li>
        <router-link to="/" exact><span>HOME</span></router-link>
      </li>
      <li>
        <router-link to="/floor2"><span>2F</span></router-link>
      </li>
      <li>
        <router-link to="/floor1"><span>1F</span></router-link>
      </li>
      <li>
        <router-link to="/floorB1"><span>B1</span></router-link>
      </li>
      <li>
        <router-link to="/floorB2"><span>B2</span></router-link>
      </li>
    </ul>
    <ul class="gnb2">
      <li>
        <a href="#"><span>ABOUT</span></a>
      </li>
      <li>
        <a href="#"><span>FLOOR MAP</span></a>
      </li>
      <li>
        <a href="#"><span>PARKING</span></a>
      </li>
      <li>
        <a href="#"><span>EVENT</span></a>
      </li>
      <li>
        <a href="#"><span>NOTICE</span></a>
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
