import { Main } from '../api/main'
import {
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE
} from './mutation-types.js'

const state = {
  all: {},
  isModalVisible: false
}
// Геттеры
const getters = {
  categories: state => state.all.categories
//   menu: state => state.all.menu
}
// Действия
const actions = {
  getAll ({ commit }) {
    commit('GET_ALL_REQUEST')
    Main.getAll()
      .then(
        categories => commit('GET_ALL_SUCCESS', categories),
        cities => commit('GET_ALL_SUCCESS', cities),
        menu => commit('GET_ALL_SUCCESS', menu),
        error => commit('GET_ALL_FAILURE', error)
      )
  },
  addItem ({ dispatch, commit }, item) {
    commit('ADD_ITEM_REQUEST', item)

    Main.addItem(item)
      .then(
        item => {
          commit('ADD_ITEM_SUCCESS', item)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно добавлено', { root: true })
          })
        },
        error => {
          commit('ADD_ITEM_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  addService ({ dispatch, commit }, service) {
    commit('ADD_SERVICE_REQUEST', service)

    Main.addService(service)
      .then(
        service => {
          commit('ADD_SERVICE_SUCCESS', service)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно добавлено', { root: true })
          })
        },
        error => {
          commit('ADD_SERVICE_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
// Мутации
const mutations = {
  [GET_ALL_REQUEST] (state) {
    state.all = { loading: true }
  },
  [GET_ALL_SUCCESS] (state, { categories, cities, menu }) {
    state.all = { categories: categories, cities: cities, menu: menu }
  },
  [GET_ALL_FAILURE] (state, error) {
    state.all = { error }
  },
  [ADD_ITEM_REQUEST] (state) {
    state.status = {}
  },
  [ADD_ITEM_SUCCESS] (state) {
    state.status = {}
  },
  [ADD_ITEM_FAILURE] (state) {
    state.status = {}
  },
  [ADD_SERVICE_REQUEST] (state) {
    state.status = {}
  },
  [ADD_SERVICE_SUCCESS] (state) {
    state.status = {}
  },
  [ADD_SERVICE_FAILURE] (state) {
    state.status = {}
  }
}

export const items = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
