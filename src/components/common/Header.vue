<template>
  <header class="header">
    <h1>
      <router-link :to="{ name: 'main' }"><span>THE SHOPS AT CENTERFIELD</span></router-link>
    </h1>
    <a href="javascript:;" class="btn-gnb" @click="showNavi"><span>메뉴열기</span></a>
    <a href="javascript:;" class="btn-spot"><span></span></a>
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState('common', {
      isNavigation: state => state.isNavigation,
    }),
  },
  methods: {
    ...mapActions('common', {
      setNavigation: 'setNavigation',
    }),
    showNavi() {
      this.setNavigation(!this.isNavigation);
    },
  },
};
</script>
