import { User } from '../api/user'
// import { router } from '../router'
import { items } from './items.module'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT
} from './mutation-types.js'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

const actions = {
  loginUser ({ dispatch, commit }, { email, password }) {
    commit('LOGIN_REQUEST', { email })
    User.login(email, password)
      .then(
        user => {
          commit('LOGIN_SUCCESS', user)
          items.state.isModalVisible = false
          location.reload()
          // router.push('/')
        },
        error => {
          commit('LOGIN_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  updateProfile ({ dispatch, commit }, { profile, id }) {
    commit('UPDATE_PROFILE_REQUEST', profile)

    User.updateProfile(profile, id)
      .then(
        profile => {
          commit('UPDATE_PROFILE_SUCCESS', profile)
          setTimeout(() => {
            dispatch('alert/success', 'Update successful', { root: true })
          })
        },
        error => {
          commit('UPDATE_PROFILE_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    User.logout()
    commit('LOGOUT')
  },
  register ({ dispatch, commit }, user) {
    commit('REGISTER_REQUEST', user)

    User.register(user)
      .then(
        user => {
          commit('REGISTER_SUCCESS', user)
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('REGISTER_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

const mutations = {
  [LOGIN_REQUEST] (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  [LOGIN_SUCCESS] (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  [LOGIN_FAILURE] (state) {
    state.status = { loggedIn: false }
    state.user = null
  },
  [LOGOUT] (state) {
    state.status = { loggedIn: false }
    state.user = null
  },
  [UPDATE_PROFILE_REQUEST] (state, profile) {
    state.status = { registering: true }
  },
  [UPDATE_PROFILE_SUCCESS] (state, profile) {
    state.status = {}
  },
  [UPDATE_PROFILE_FAILURE] (state, error) {
    state.status = {}
  },
  [REGISTER_REQUEST] (state, user) {
    state.status = { registering: true }
  },
  [REGISTER_SUCCESS] (state, user) {
    state.status = {}
  },
  [REGISTER_FAILURE] (state, error) {
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
