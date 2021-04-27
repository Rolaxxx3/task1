import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.module'
import auth from './auth.module'
import news from './news.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    auth,
    news,
  },
})


export default store
