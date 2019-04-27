import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Logout from '@/components/Logout'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/logout', component: Logout },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/#signIn')
  }

  next()
})
