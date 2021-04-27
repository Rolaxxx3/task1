import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { REQUEST_STATUSES } from '@/constants/REQUEST_STATUSES'

Vue.use(Vuex)

const state = {
  user: {},
  userId: null,
  status: REQUEST_STATUSES.loading,
}

const mutations = {
  SET_USER: (state, payload) => {
    state.user = payload
  },
  CLEAR_USER: (state) => {
    state.user.userId = null
  },
  SET_USER_ID: (state, payload) => {
    state.userId = payload
  },
  SET_STATUS: (state, payload) => {
    state.status = payload
  },
  CLEAR_USER_STORE: (state) => {
    state.user = {}
    state.userId = null
    state.status = REQUEST_STATUSES.loading
  },
}

const actions = {
  LOAD_USER: ({ commit, getters }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `user-info/${getters.userId}`,
        })

        commit('SET_USER', data.data)
        commit('SET_STATUS', REQUEST_STATUSES.success)
        resolve()
      } catch (err) {
        commit('SET_STATUS', REQUEST_STATUSES.error)
        reject(err)
      }
    })
  },
}

const getters = {
  userId: (state) => state.userId,
  user: (state) => state.user,
  userStatus: (state) => state.status,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
