import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const DEFAULT_STATE_DATA = Object.freeze({
  message: '',
  isVerified: false,
})

const state = Object.assign({}, DEFAULT_STATE_DATA)

const mutations = {
  SET_VERIFIED: (state) => {
    state.isVerified = true
  },
  SET_MESSAGE: (state, payload) => {
    state.message = payload

    setTimeout(() => state.message = '', 5000)
  },
  CLEAR_AUTH_STORE: (state) => {
    state.message = ''
    state.isVerified = false
  },
}

const actions = {
  AUTH_USER: ({ commit }, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: 'validate',
          data: payload,
        })

        if (data.status === 'ok') {
          commit('SET_USER_ID', data.data.id)
          commit('SET_VERIFIED', true)
          resolve()
        }

        commit('SET_MESSAGE', data.message)
        reject(data)
      } catch (err) {
        commit('SET_MESSAGE', 'Server is unavailable')
        reject(err)
      }
    })
  },
  CLEAR_AUTH: ({ commit }) => {
    return new Promise(resolve => {
      commit('CLEAR_AUTH_STORE')
      commit('CLEAR_USER_STORE')
      resolve()
    })
  },
}

const getters = {
  verified: (store) => store.isVerified,
  getMessage: (store) => store.message,
}

export default {
  state,
  getters,
  mutations,
  actions,
}
