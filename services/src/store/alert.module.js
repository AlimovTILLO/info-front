const state = {
  notifications: []
}

const actions = {
  success ({ commit }, message) { commit('success', message) },
  error ({ commit }, message) { commit('error', message) },
  remove ({ commit }, message) { commit('remove', message) },
  clear ({ commit }, message) { commit('success', message) }
}

const mutations = {
  success (state, message) {
    state.notifications.push({type: 'alert-success', message: message, timeout: true})
  },
  error (state, message) {
    state.notifications.push({type: 'alert-danger', message: message, timeout: true})
  },
  remove (state, message) {
    state.notifications = state.notifications.filter(item => item !== message)
  },
  clear (state) {
    state.notifications = null
  }
}

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations
}
