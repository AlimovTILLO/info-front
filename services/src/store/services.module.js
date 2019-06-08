import { Main } from '../api/main'
import {
  GET_SERVICE_BY_ID_REQUEST,
  GET_SERVICE_BY_ID_SUCCESS,
  GET_SERVICE_BY_ID_FAILURE,
  GET_SERVICE_BY_CAT_ID_REQUEST,
  GET_SERVICE_BY_CAT_ID_SUCCESS,
  GET_SERVICE_BY_CAT_ID_FAILURE,
  GET_ACTIVE_SERVICE_BY_USER_ID_REQUEST,
  GET_ACTIVE_SERVICE_BY_USER_ID_SUCCESS,
  GET_ACTIVE_SERVICE_BY_USER_ID_FAILURE,
  GET_INACTIVE_SERVICE_BY_USER_ID_REQUEST,
  GET_INACTIVE_SERVICE_BY_USER_ID_SUCCESS,
  GET_INACTIVE_SERVICE_BY_USER_ID_FAILURE,
  GET_AWAITING_SERVICE_BY_USER_ID_REQUEST,
  GET_AWAITING_SERVICE_BY_USER_ID_SUCCESS,
  GET_AWAITING_SERVICE_BY_USER_ID_FAILURE,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE,
  ADD_RATING_REQUEST,
  ADD_RATING_SUCCESS,
  ADD_RATING_FAILURE,
  DELETE_ACTIVE_SERVICE_REQUEST,
  DELETE_ACTIVE_SERVICE_SUCCESS,
  DELETE_ACTIVE_SERVICE_FAILURE,
  DELETE_INACTIVE_SERVICE_REQUEST,
  DELETE_INACTIVE_SERVICE_SUCCESS,
  DELETE_INACTIVE_SERVICE_FAILURE,
  DELETE_AWAITING_SERVICE_REQUEST,
  DELETE_AWAITING_SERVICE_SUCCESS,
  DELETE_AWAITING_SERVICE_FAILURE,
  PAUSE_SERVICE_REQUEST,
  PAUSE_SERVICE_SUCCESS,
  PAUSE_SERVICE_FAILURE,
  UP_SERVICE_REQUEST,
  UP_SERVICE_SUCCESS,
  UP_SERVICE_FAILURE,
  PLAY_SERVICE_REQUEST,
  PLAY_SERVICE_SUCCESS,
  PLAY_SERVICE_FAILURE
} from './mutation-types.js'

const state = {
  service: '',
  catservices: [],
  activeservices: {},
  inactiveservices: {},
  awaitingservices: {}
}
// Геттеры
const getters = {
  services: state => state.catservices.services
}
// Действия
const actions = {
  getServiceById ({ commit }, id) {
    commit('GET_SERVICE_BY_ID_REQUEST')
    Main.getServiceById(id)
      .then(
        service => commit('GET_SERVICE_BY_ID_SUCCESS', service),
        error => commit('GET_SERVICE_BY_ID_FAILURE', error)
      )
  },
  getServiceByCatId ({ commit }, { id, page }) {
    commit('GET_SERVICE_BY_CAT_ID_REQUEST')
    Main.getServiceByCatId(id, page)
      .then(
        services => commit('GET_SERVICE_BY_CAT_ID_SUCCESS', services),
        error => commit('GET_SERVICE_BY_CAT_ID_FAILURE', error)
      )
  },
  getActiveServiceByUserId ({ commit }, { id, page }) {
    commit('GET_ACTIVE_SERVICE_BY_USER_ID_REQUEST')
    Main.getActiveServiceByUserId(id, page)
      .then(
        activeservices => commit('GET_ACTIVE_SERVICE_BY_USER_ID_SUCCESS', activeservices),
        error => commit('GET_ACTIVE_SERVICE_BY_USER_ID_FAILURE', error)
      )
  },
  getInactiveServiceByUserId ({ commit }, { id, page }) {
    commit('GET_INACTIVE_SERVICE_BY_USER_ID_REQUEST')
    Main.getInactiveServiceByUserId(id, page)
      .then(
        inactiveservices => commit('GET_INACTIVE_SERVICE_BY_USER_ID_SUCCESS', inactiveservices),
        error => commit('GET_INACTIVE_SERVICE_BY_USER_ID_FAILURE', error)
      )
  },
  getAwaitingServiceByUserId ({ commit }, { id, page }) {
    commit('GET_AWAITING_SERVICE_BY_USER_ID_REQUEST')
    Main.getAwaitingServiceByUserId(id, page)
      .then(
        awaitingservices => commit('GET_AWAITING_SERVICE_BY_USER_ID_SUCCESS', awaitingservices),
        error => commit('GET_AWAITING_SERVICE_BY_USER_ID_FAILURE', error)
      )
  },
  getActiveAdsByUserId ({ commit }, id) {
    commit('GET_ACTIVE_ADS_BY_USER_ID_REQUEST')
    Main.getActiveAdsByUserId(id)
      .then(
        uads => commit('GET_ACTIVE_ADS_BY_USER_ID_SUCCESS', uads),
        error => commit('GET_ACTIVE_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getInactiveAdsByUserId ({ commit }, id) {
    commit('GET_INACTIVE_ADS_BY_USER_ID_REQUEST')
    Main.getInactiveAdsByUserId(id)
      .then(
        uads => commit('GET_INACTIVE_ADS_BY_USER_ID_SUCCESS', uads),
        error => commit('GET_INACTIVE_ADS_BY_USER_ID_FAILURE', error)
      )
  },
  getAwaitingAdsByUserId ({ commit }, id) {
    commit('GET_AWAITING_ADS_BY_USER_ID_REQUEST')
    Main.getAwaitingAdsByUserId(id)
      .then(
        uads => commit('GET_AWAITING_ADS_BY_USER_ID_SUCCESS', uads),
        error => commit('GET_AWAITING_ADS_BY_USER_ID_FAILURE', error)
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
  },
  addRating ({ dispatch, commit }, {service, user, rating}) {
    commit('ADD_RATING_REQUEST', service)

    Main.addRating(service, user, rating)
      .then(
        service => {
          commit('ADD_RATING_SUCCESS', service)
          setTimeout(() => {
            dispatch('alert/success', service, { root: true })
          })
        },
        error => {
          commit('ADD_RATING_FAILURE', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteActiveService ({ dispatch, commit }, id) {
    commit('DELETE_ACTIVE_SERVICE_REQUEST', id)
    Main.deleteService(id)
      .then(
        activeservice => {
          commit('DELETE_ACTIVE_SERVICE_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно удалено', { root: true })
          })
        },
        error => {
          commit('DELETE_ACTIVE_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteInactiveService ({ dispatch, commit }, id) {
    commit('DELETE_INACTIVE_SERVICE_REQUEST', id)
    Main.deleteService(id)
      .then(
        inactiveservice => {
          commit('DELETE_INACTIVE_SERVICE_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно удалено', { root: true })
          })
        },
        error => {
          commit('DELETE_INACTIVE_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  deleteAwaitingService ({ dispatch, commit }, id) {
    commit('DELETE_AWAITING_SERVICE_REQUEST', id)
    Main.deleteService(id)
      .then(
        awaitingservice => {
          commit('DELETE_AWAITING_SERVICE_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно удалено', { root: true })
          })
        },
        error => {
          commit('DELETE_AWAITING_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  pauseService ({ dispatch, commit }, id) {
    commit('PAUSE_SERVICE_REQUEST', id)

    Main.playPauseService(id)
      .then(
        service => {
          commit('PAUSE_SERVICE_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно остановлено', { root: true })
          })
        },
        error => {
          commit('PAUSE_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  playService ({ dispatch, commit }, id) {
    commit('PLAY_SERVICE_REQUEST', id)

    Main.playPauseService(id)
      .then(
        service => {
          commit('PLAY_SERVICE_SUCCESS', id)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно возобновлено', { root: true })
          })
        },
        error => {
          commit('PLAY_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  upService ({ dispatch, commit }, id) {
    commit('UP_SERVICE_REQUEST', id)

    Main.upService(id)
      .then(
        service => {
          commit('UP_SERVICE_SUCCESS', service)
          setTimeout(() => {
            dispatch('alert/success', 'Успешно поднято', { root: true })
          })
        },
        error => {
          commit('UP_SERVICE_FAILURE', { id, error: error.toString() })
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
// Мутации
const mutations = {
  [GET_SERVICE_BY_CAT_ID_REQUEST] (state) {
    state.catservices = { loading: true }
  },
  [GET_SERVICE_BY_CAT_ID_SUCCESS] (state, services) {
    state.catservices = services
  },
  [GET_SERVICE_BY_CAT_ID_FAILURE] (state, error) {
    state.catservices = { error }
  },
  [GET_SERVICE_BY_ID_REQUEST] (state) {
    state.service = { loading: true }
  },
  [GET_SERVICE_BY_ID_SUCCESS] (state, service) {
    state.service = service
  },
  [GET_SERVICE_BY_ID_FAILURE] (state, error) {
    state.service = { error }
  },
  [GET_ACTIVE_SERVICE_BY_USER_ID_REQUEST] (state) {
    state.activeservices = { loading: true }
  },
  [GET_ACTIVE_SERVICE_BY_USER_ID_SUCCESS] (state, activeservices) {
    state.activeservices = { userServices: activeservices.userServices }
  },
  [GET_ACTIVE_SERVICE_BY_USER_ID_FAILURE] (state, error) {
    state.activeservices = { error }
  },
  [GET_INACTIVE_SERVICE_BY_USER_ID_REQUEST] (state) {
    state.inactiveservices = { loading: true }
  },
  [GET_INACTIVE_SERVICE_BY_USER_ID_SUCCESS] (state, inactiveservices) {
    state.inactiveservices = { userServices: inactiveservices.userServices }
  },
  [GET_INACTIVE_SERVICE_BY_USER_ID_FAILURE] (state, error) {
    state.inactiveservices = { error }
  },
  [GET_AWAITING_SERVICE_BY_USER_ID_REQUEST] (state) {
    state.awaitingservices = { loading: true }
  },
  [GET_AWAITING_SERVICE_BY_USER_ID_SUCCESS] (state, awaitingservices) {
    state.awaitingservices = { userServices: awaitingservices.userServices }
  },
  [GET_AWAITING_SERVICE_BY_USER_ID_FAILURE] (state, error) {
    state.awaitingservices = { error }
  },
  [ADD_SERVICE_REQUEST] (state) {
    state.status = {}
  },
  [ADD_SERVICE_SUCCESS] (state) {
    state.status = {}
  },
  [ADD_SERVICE_FAILURE] (state) {
    state.status = {}
  },
  [ADD_RATING_REQUEST] (state) {
    state.status = {}
  },
  [ADD_RATING_SUCCESS] (state) {
    state.status = {}
  },
  [ADD_RATING_FAILURE] (state) {
    state.status = {}
  },
  [DELETE_ACTIVE_SERVICE_REQUEST] (state, id) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(activeservice =>
      activeservice.id === id
        ? { ...activeservice, deleting: true }
        : activeservice
    )
  },
  [DELETE_ACTIVE_SERVICE_SUCCESS] (state, id) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.filter(activeservice => activeservice.id !== id)
  },
  [DELETE_ACTIVE_SERVICE_FAILURE] (state, { id, error }) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(activeservice => {
      if (activeservice.id === id) {
        const { deleting, ...serviceCopy } = activeservice
        return { ...serviceCopy, deleteError: error }
      }
      return activeservice
    })
  },
  [DELETE_INACTIVE_SERVICE_REQUEST] (state, id) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.map(inactiveservice =>
      inactiveservice.id === id
        ? { ...inactiveservice, deleting: true }
        : inactiveservice
    )
  },
  [DELETE_INACTIVE_SERVICE_SUCCESS] (state, id) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.filter(inactiveservice => inactiveservice.id !== id)
  },
  [DELETE_INACTIVE_SERVICE_FAILURE] (state, { id, error }) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.map(inactiveservice => {
      if (inactiveservice.id === id) {
        const { deleting, ...serviceCopy } = inactiveservice
        return { ...serviceCopy, deleteError: error }
      }
      return inactiveservice
    })
  },
  [DELETE_AWAITING_SERVICE_REQUEST] (state, id) {
    state.awaitingservices.userServices.data = state.awaitingservices.userServices.data.map(awaitingservice =>
      awaitingservice.id === id
        ? { ...awaitingservice, deleting: true }
        : awaitingservice
    )
  },
  [DELETE_AWAITING_SERVICE_SUCCESS] (state, id) {
    state.awaitingservices.userServices.data = state.awaitingservices.userServices.data.filter(awaitingservice => awaitingservice.id !== id)
  },
  [DELETE_AWAITING_SERVICE_FAILURE] (state, { id, error }) {
    state.awaitingservices.userServices.data = state.awaitingservices.userServices.data.map(awaitingservice => {
      if (awaitingservice.id === id) {
        const { deleting, ...serviceCopy } = awaitingservice
        return { ...serviceCopy, deleteError: error }
      }
      return awaitingservice
    })
  },
  [PAUSE_SERVICE_REQUEST] (state, id) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(service =>
      service.id === id
        ? { ...service, is_view: 0 }
        : service
    )
  },
  [PAUSE_SERVICE_SUCCESS] (state, id) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.filter(service => service.id !== id)
  },
  [PAUSE_SERVICE_FAILURE] (state, { id, error }) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(service => {
      if (service.id === id) {
        const { deleting, ...serviceCopy } = service
        return { ...serviceCopy, deleteError: error }
      }
      return service
    })
  },
  [UP_SERVICE_REQUEST] (state, id) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(activeservice =>
      activeservice.id === id
        ? { ...activeservice, deleting: true }
        : activeservice
    )
  },
  [UP_SERVICE_SUCCESS] (state, service) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.filter(activeservice => activeservice === service)
  },
  [UP_SERVICE_FAILURE] (state, { id, error }) {
    state.activeservices.userServices.data = state.activeservices.userServices.data.map(activeservice => {
      if (activeservice.id === id) {
        const { deleting, ...serviceCopy } = activeservice
        return { ...serviceCopy, deleteError: error }
      }
      return activeservice
    })
  },
  [PLAY_SERVICE_REQUEST] (state, id) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.map(service =>
      service.id === id
        ? { ...service, is_view: 0 }
        : service
    )
  },
  [PLAY_SERVICE_SUCCESS] (state, id) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.filter(service => service.id !== id)
  },
  [PLAY_SERVICE_FAILURE] (state, { id, error }) {
    state.inactiveservices.userServices.data = state.inactiveservices.userServices.data.map(service => {
      if (service.id === id) {
        const { deleting, ...serviceCopy } = service
        return { ...serviceCopy, deleteError: error }
      }
      return service
    })
  }
}

export const services = {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
