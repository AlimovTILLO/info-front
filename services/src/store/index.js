import Vue from 'vue'
import Vuex from 'vuex'
import { alert } from './alert.module'
import { router } from '../router'
import { Main } from '../api/main'
import { User } from '../api/user'
import {
  SET_BASE_DATE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER,
  LOGOUT
} from './mutation-types.js'
Vue.use(Vuex)

const user = JSON.parse(localStorage.getItem('user'))
// Состояние
const state = {
  categories: [],
  user: user ? { status: { loggedIn: true }, user } : { status: {}, user: null }
}
// Геттеры
const getters = {
  categories: state => state.categories
}
// Мутации
const mutations = {
  [SET_BASE_DATE] (state, { categories }) {
    state.categories = categories.categories
  },
  [LOGIN_REQUEST] (state, user) {
    state.status = { loggedIn: true }
    state.user = user.data
  },
  [LOGIN_SUCCESS] (state, user) {
    state.status = { loggedIn: true }
    state.user = user.data
  },
  [LOGIN_FAILURE] (state) {
    state.status = {}
    state.user = null
  },
  [LOGOUT] (state) {
    state.status = {}
    state.user = null
  }
}
// Действия
const actions = {
  getCategories ({ commit }) {
    Main.base_data().then(categories => {
      commit(SET_BASE_DATE, { categories })
    })
  },
  loginUser ({ dispatch, commit }, { email, password }) {
    commit('LOGIN_REQUEST', { email })
    console.log(email, password)
    User.login(email, password)
      .then(
        user => {
          commit('LOGIN_SUCCESS', user)
          router.push('/')
        },
        error => {
          commit('LOGIN_FAILURE', error)
          // dispatch(alert.mutations.error, error, {
          //   root: true
          // })
        }
      )
  },
  registerUser ({ commit }, userData) {
    User.register(userData).then(user => {
      commit(REGISTER_USER, user)
    })
  }
}
export default new Vuex.Store({
  alert,
  state,
  getters,
  actions,
  mutations
})
