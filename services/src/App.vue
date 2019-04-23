<template>
  <div class="mainWrap">
        <nav-menu/>
        <router-view/>
        <footer-menu/>
    </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'nav-menu': Nav,
    'footer-menu': Footer
  }
}
</script>

<style>
@import url(./assets/styles/main.css);
@import url(./assets/styles/vendor.css);
</style>
