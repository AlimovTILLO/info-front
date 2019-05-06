<template>
  <div class="mainWrap">
    <div class="contentWrap contentWrap--atherBgc">
      <div class="hamburger">
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </div>
      <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
      <nav-menu/>
      <router-view/>
    </div>
    <footer-menu/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'nav-menu': Nav,
    'footer-menu': Footer
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
      this.clearAlert()
    }
  }
}
</script>

<style>
@import url(./assets/styles/main.css);
@import url(./assets/styles/multiselect.css);
@import url(./assets/styles/vendor.css);
</style>
