import { User } from '../api/user'
import { router } from '../router'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER,
  LOGOUT
} from './mutation-types.js'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

const mutations = {
  [LOGIN_REQUEST] (state, user) {
    state.status = { loggedIn: true }
    state.user = user.data
  },
  [LOGIN_SUCCESS] (state, user) {
    state.status = { loggedIn: true }
    state.user = user.data
  },
  [LOGIN_FAILURE] (state) {
    state.status = { loggedIn: false }
    state.user = null
  },
  [LOGOUT] (state) {
    state.status = { loggedIn: false }
    state.user = null
  }
}
const actions = {
  loginUser ({ dispatch, commit }, { email, password }) {
    commit('LOGIN_REQUEST', { email })
    User.login(email, password)
      .then(
        user => {
          commit('LOGIN_SUCCESS', user)
          router.push('/')
        },
        error => {
          commit('LOGIN_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    User.logout()
    commit('LOGOUT')
  },
  registerUser ({ commit }, userData) {
    User.register(userData).then(user => {
      commit(REGISTER_USER, user)
    })
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
