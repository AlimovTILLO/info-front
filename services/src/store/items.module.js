import { Main } from '../api/main'
import {
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE
} from './mutation-types.js'

const state = {
  all: {}
}
// Геттеры
const getters = {
//   categories: state => state.all.categories,
//   menu: state => state.all.menu
}
// Действия
const actions = {
  getAll ({ commit }) {
    commit('GET_ALL_REQUEST')
    Main.getAll()
      .then(
        categories => commit('GET_ALL_SUCCESS', categories),
        error => commit('GET_ALL_FAILURE', error)
      )
  }
}
// Мутации
const mutations = {
  [GET_ALL_REQUEST] (state) {
    state.all = { loading: true }
  },
  [GET_ALL_SUCCESS] (state, { categories, menu }) {
    state.all = { categories: categories }
    // state.all = { menu: menu }
  },
  [GET_ALL_FAILURE] (state, error) {
    state.all = { error }
  }
}

export const items = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
