<template>
  <header class="header">
    <a href="javascript:;" class="btn-gnb" @click="showNavi"><span>메뉴열기</span></a>
    <h1>
      <a href="#"><span>THE SHOPS AT CENTERFIELD</span></a>
    </h1>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState("common", {
      isNavigation: state => state.isNavigation
    })
  },
  methods: {
    ...mapActions("common", {
      setNavigation: "setNavigation"
    }),
    showNavi() {
      this.setNavigation(!this.isNavigation);
    }
  }
};
</script>
