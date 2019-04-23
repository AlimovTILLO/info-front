import Vue from 'vue'
import Vuex from 'vuex'
import { Main } from '../api/main'
import {
  SET_BASE_DATE
} from './mutation-types.js'
Vue.use(Vuex)
// Состояние
const state = {
  categories: []
}
// Геттеры
const getters = {
  categories: state => state.categories
}
// Мутации
const mutations = {
  [SET_BASE_DATE] (state, { categories }) {
    state.categories = categories.categories
  }
}
// Действия
const actions = {
  getCategories ({ commit }) {
    Main.base_data().then(categories => {
      commit(SET_BASE_DATE, { categories })
    })
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
