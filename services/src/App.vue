<template>
  <div>
    <notifications></notifications>
    <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div> -->
    <div class="mmenu-nav"></div>
    <div class="mainWrap">
      <div class="contentWrap <!--contentWrap&#45;&#45;atherBgc-->">
        <div class="hamburger">
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
        </div>
        <nav-menu/>
        <router-view/>
      </div>
      <footer-menu/>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Notifications from './components/Notifications'
export default {
  name: 'app',
  components: {
    'nav-menu': Nav,
    'footer-menu': Footer,
    'notifications': Notifications
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

  .notifications {
    position: fixed;
    right: 10px;
    top: 10px;
    width: 350px;
    z-index: 1000;
  }

  .notifications .notification {
    margin-bottom: 15px;
    background-color: #1ba5b7;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .25);
    border-radius: 5px;
    padding: 15px;
  }

  .notification p {
    margin-right: 20px;
    color: #ffffff;
  }

  .notification h5 {
    color: #ffffff;
  }

  .notifications .close-button {
    float: right;
    background-color: #1ba5b7;
    outline: none;
  }

  .notifications .close-button {
    width: 0;
    height: 0;
    margin-right: 10px;
  }

  .notifications .close-button span {
    font-size: 25px;
    color: #ffffff;
    line-height: 0;
  }
</style>
