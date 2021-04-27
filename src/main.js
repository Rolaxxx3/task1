import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import config from '../config'

import App from './App.vue'

import store from './store'

import { humanize } from '@/filters/humanize'

axios.defaults.baseURL = config.apiUrl
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
}

Vue.use(Element)

Vue.config.productionTip = false

Vue.filter('humanize', humanize)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
