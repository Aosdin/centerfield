<template>
  <div
    class="full-base"
    :class="{'active': isNavigation}"
  >
    <header-area />
    <navigation />
    <router-view />
    <footer-area />
    <dialogs />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HeaderArea from '../components/common/Header.vue'
import Navigation from '../components/common/Navigation.vue'
import FooterArea from '../components/common/Footer.vue'
import Dialogs from '../components/dialogs/Dialogs.vue'

export default {
  name: 'FullBase',
  components: {
    HeaderArea,
    Navigation,
    FooterArea,
    Dialogs
  },
  computed: {
    ...mapState('common', {
      isNavigation: state => state.isNavigation
    })
  }
}
</script>
