import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Logout from '@/components/Logout'
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import ContactsInfo from '@/components/ContactsInfo'
import FAQ from '@/components/FAQ'
import Requests from '@/components/Requests'
import Services from '@/components/Services'
import addService from '@/components/addService'
import Adverts from '@/components/Adverts'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/logout', component: Logout },
    { path: '/contacts', component: Contacts },
    { path: '/settings', component: ContactsInfo },
    { path: '/faq', component: FAQ },
    { path: '/requests', component: Requests },
    { path: '/services', component: Services },
    { path: '/add_service', component: addService },
    { path: '/adverts', component: Adverts },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/about', '/contacts', '/faq']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/')
  }

  next()
})
