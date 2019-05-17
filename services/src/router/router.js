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
import ConfirmationEmail from '@/components/ConfirmationEmail'
import Cat from '@/components/Cat'
import NotFoundComponent from '@/components/NotFoundComponent'

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
    { path: '/auth/confirm/:email_code', component: ConfirmationEmail },
    { path: '/cat/:cat_slug', component: Cat, name: 'cat' },
    { path: '*', component: NotFoundComponent }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/', '/about', '/contacts', '/faq', '/cat/']
  const privatePages = ['/services', '/adverts', '/requests', '/settings', '/add_service']
  const authRequired = privatePages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  // otherwise redirect to home
  if (authRequired && !loggedIn) {
    return next('/')
  }

  next()
})
