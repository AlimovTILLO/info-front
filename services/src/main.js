// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate'
import { router } from './router'
import { store } from './store'
// import '../src/assets/scripts/vendor'
// import '../src/assets/scripts/vendor/modernizr'
Vue.use(Notifications)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
