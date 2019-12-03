import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */
export default new Vuex.Store({
  state: {
    lang: '',
  },
  mutations: {
    setLang(state, payload) {
      state.lang = payload;
    },
  },
  actions: {
    setLang({ state, commit, getters, rootState }, payload) {
      commit('setLang', payload);
    },
  },
  modules: {}
})
