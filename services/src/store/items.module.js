import { Main } from '../api/main'
import { User } from '../api/user'
import {
  CONFIRM_EMAIL_REQUEST,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAILURE,
  GET_MAIN_REQUEST,
  GET_MAIN_SUCCESS,
  GET_MAIN_FAILURE,
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  GET_ADS_BY_USER_ID_REQUEST,
  GET_ADS_BY_USER_ID_SUCCESS,
  GET_ADS_BY_USER_ID_FAILURE,
  GET_ACTIVE_ADS_BY_USER_ID_REQUEST,
  GET_ACTIVE_ADS_BY_USER_ID_SUCCESS,
  GET_ACTIVE_ADS_BY_USER_ID_FAILURE,
  GET_AWAITING_ADS_BY_USER_ID_REQUEST,
  GET_AWAITING_ADS_BY_USER_ID_SUCCESS,
  GET_AWAITING_ADS_BY_USER_ID_FAILURE,
  GET_CLOSE_ADS_BY_USER_ID_REQUEST,
  GET_CLOSE_ADS_BY_USER_ID_SUCCESS,
  GET_CLOSE_ADS_BY_USER_ID_FAILURE,
  GET_REJECTED_ADS_BY_USER_ID_REQUEST,
  GET_REJECTED_ADS_BY_USER_ID_SUCCESS,
  GET_REJECTED_ADS_BY_USER_ID_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  PAUSE_ITEM_REQUEST,
  PAUSE_ITEM_SUCCESS,
  PAUSE_ITEM_FAILURE
} from './mutation-types.js'

const state = {
  сonfirm: '',
  main: {},
  all: {},
  ads: {},
  activeads: {},
  awaitingads: {},
  closeads: {},
  rejectedads: {},
  isModalVisible: false
}
// Геттеры
const getters = {
  categories: state => state.all.categories
}
// Действия
const actions = {
  confirmEmail ({ commit }, code) {
    commit('CONFIRM_EMAIL_REQUEST')
    User.confirmEmail(code)
      .then(
        сonfirm => commit('CONFIRM_EMAIL_SUCCESS', сonfirm),
        error => commit('CONFIRM_EMAIL_FAILURE', error)
      )
  },
  getMain ({ commit }) {
    commit('GET_MAIN_REQUEST')
    Main.getMain()
      .then(
        items => commit('GET_MAIN_SUCCESS', items),
        error => commit('GET_MAIN_FAILURE', error)
      )
  },
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
  getAdsByUserId ({ commit }, { id, page }) {
    commit('GET_ADS_BY_USER_ID_REQUEST')
    Main.getAdsByUserId(id, page)
      .then(
        ads => commit('GET_ADS_BY_USER_ID_SUCCESS', ads),
        error => commit('GET_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getActiveAdsByUserId ({ commit }, { id, page }) {
    commit('GET_ACTIVE_ADS_BY_USER_ID_REQUEST')
    Main.getActiveAdsByUserId(id, page)
      .then(
        activeads => commit('GET_ACTIVE_ADS_BY_USER_ID_SUCCESS', activeads),
        error => commit('GET_ACTIVE_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getAwaitingAdsByUserId ({ commit }, { id, page }) {
    commit('GET_AWAITING_ADS_BY_USER_ID_REQUEST')
    Main.getAwaitingAdsByUserId(id, page)
      .then(
        awaitingads => commit('GET_AWAITING_ADS_BY_USER_ID_SUCCESS', awaitingads),
        error => commit('GET_AWAITING_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getCloseAdsByUserId ({ commit }, { id, page }) {
    commit('GET_CLOSE_ADS_BY_USER_ID_REQUEST')
    Main.getCloseAdsByUserId(id, page)
      .then(
        closeads => commit('GET_CLOSE_ADS_BY_USER_ID_SUCCESS', closeads),
        error => commit('GET_CLOSE_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getRejectedAdsByUserId ({ commit }, { id, page }) {
    commit('GET_REJECTED_ADS_BY_USER_ID_REQUEST')
    Main.getRejectedAdsByUserId(id, page)
      .then(
        rejectedads => commit('GET_REJECTED_ADS_BY_USER_ID_SUCCESS', rejectedads),
        error => commit('GET_REJECTED_ADS_BY_USER_ID_FAILURE', error)
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
  pauseItem ({ dispatch, commit }, id) {
    commit('PAUSE_ITEM_REQUEST', id)

    Main.pauseItem(id)
      .then(
        service => {
          commit('PAUSE_ITEM_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно остановлено', { root: true })
          })
        },
        error => {
          commit('PAUSE_ITEM_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteItem ({ dispatch, commit }, id) {
    commit('DELETE_ITEM_REQUEST', id)

    Main.deleteItem(id)
      .then(
        item => {
          commit('DELETE_ITEM_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно удалено', { root: true })
          })
        },
        error => {
          commit('DELETE_ITEM_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
// Мутации
const mutations = {
  [CONFIRM_EMAIL_REQUEST] (state, сonfirm) {
    state.сonfirm = сonfirm
  },
  [CONFIRM_EMAIL_SUCCESS] (state, сonfirm) {
    state.сonfirm = сonfirm
  },
  [CONFIRM_EMAIL_FAILURE] (state, error) {
    state.сonfirm = { error }
  },
  [GET_MAIN_REQUEST] (state) {
    state.main = { loading: true }
  },
  [GET_MAIN_SUCCESS] (state, items) {
    state.main = { items: items }
  },
  [GET_MAIN_FAILURE] (state, error) {
    state.main = { error }
  },
  [GET_ALL_REQUEST] (state) {
    state.all = { loading: true }
  },
  [GET_ALL_SUCCESS] (state, { categories, cities, menu }) {
    state.all = { categories: categories, cities: cities, menu: menu }
  },
  [GET_ALL_FAILURE] (state, error) {
    state.all = { error }
  },
  [GET_ADS_BY_USER_ID_REQUEST] (state) {
    state.ads = { loading: true }
  },
  [GET_ADS_BY_USER_ID_SUCCESS] (state, ads) {
    state.ads = { userAds: ads.userAds }
  },
  [GET_ADS_BY_USER_ID_FAILURE] (state, error) {
    state.ads = { error }
  },
  [GET_ACTIVE_ADS_BY_USER_ID_REQUEST] (state) {
    state.activeads = { loading: true }
  },
  [GET_ACTIVE_ADS_BY_USER_ID_SUCCESS] (state, activeads) {
    state.activeads = { userAds: activeads.userAds }
  },
  [GET_ACTIVE_ADS_BY_USER_ID_FAILURE] (state, error) {
    state.activeads = { error }
  },
  [GET_AWAITING_ADS_BY_USER_ID_REQUEST] (state) {
    state.awaitingads = { loading: true }
  },
  [GET_AWAITING_ADS_BY_USER_ID_SUCCESS] (state, awaitingads) {
    state.awaitingads = { userAds: awaitingads.userAds }
  },
  [GET_AWAITING_ADS_BY_USER_ID_FAILURE] (state, error) {
    state.awaitingads = { error }
  },
  [GET_CLOSE_ADS_BY_USER_ID_REQUEST] (state) {
    state.closeads = { loading: true }
  },
  [GET_CLOSE_ADS_BY_USER_ID_SUCCESS] (state, closeads) {
    state.closeads = { userAds: closeads.userAds }
  },
  [GET_CLOSE_ADS_BY_USER_ID_FAILURE] (state, error) {
    state.closeads = { error }
  },
  [GET_REJECTED_ADS_BY_USER_ID_REQUEST] (state) {
    state.rejectedads = { loading: true }
  },
  [GET_REJECTED_ADS_BY_USER_ID_SUCCESS] (state, rejectedads) {
    state.rejectedads = { userAds: rejectedads.userAds }
  },
  [GET_REJECTED_ADS_BY_USER_ID_FAILURE] (state, error) {
    state.rejectedads = { error }
  },
  [ADD_ITEM_REQUEST] (state) {
    state.status = { loading: true }
  },
  [ADD_ITEM_SUCCESS] (state, item) {
    state.status = { item: item }
  },
  [ADD_ITEM_FAILURE] (state, error) {
    state.status = {error}
  },
  [DELETE_ITEM_REQUEST] (state, id) {
    state.activeads.userAds.data = state.activeads.userAds.data.map(item =>
      item.id === id
        ? { ...item, deleting: true }
        : item
    )
  },
  [DELETE_ITEM_SUCCESS] (state, id) {
    state.activeads.userAds.data = state.activeads.userAds.data.filter(item => item.id !== id)
  },
  [DELETE_ITEM_FAILURE] (state, { id, error }) {
    state.activeads.userAds.data = state.activeads.userAds.data.map(item => {
      if (item.id === id) {
        const { deleting, ...itemCopy } = item
        return { ...itemCopy, deleteError: error }
      }
      return item
    })
  },
  [PAUSE_ITEM_REQUEST] (state, id) {
    state.activeads.userAds.data = state.activeads.userAds.data.map(item =>
      item.id === id
        ? { ...item, deleting: true }
        : item
    )
  },
  [PAUSE_ITEM_SUCCESS] (state, id) {
    state.activeads.userAds.data = state.activeads.userAds.data.filter(item => item.id !== id)
  },
  [PAUSE_ITEM_FAILURE] (state, { id, error }) {
    state.activeads.userAds.data = state.activeads.userAds.data.map(item => {
      if (item.id === id) {
        const { deleting, ...itemCopy } = item
        return { ...itemCopy, deleteError: error }
      }
      return item
    })
  }
}

export const items = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
