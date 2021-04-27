import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { REQUEST_STATUSES } from '@/constants/REQUEST_STATUSES'

Vue.use(Vuex)

const state = {
  news: [],
  status: REQUEST_STATUSES.loading,
}

const mutations = {
  SET_NEWS: (state, payload) => {
    state.news = payload
  },
  SET_STATUS: (state, payload) => {
    state.status = payload
  },
}

const actions = {
  LOAD_NEWS: ({ commit }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'news',
        })

        commit('SET_NEWS', data.data)
        commit('SET_STATUS', REQUEST_STATUSES.success)
        resolve()
      } catch (e) {
        commit('SET_STATUS', REQUEST_STATUSES.error)
        reject(e);
      }
    })
  },
}

const getters = {
  news: (state) => state.news,
  newsStatus: (state) => state.status,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
