import Vue from 'vue'
import App from './App'

import store from './store'
Vue.prototype.$store = store

import storage from './utils/storage'
Vue.prototype.$storage = storage

import request from './utils/request'
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
