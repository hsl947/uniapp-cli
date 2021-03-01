import Vue from 'vue'
import App from './App'

// 全局注册 vuex，用于通信/传递数据
import store from './store'
Vue.prototype.$store = store

// 全局注册 storage，用于本地存储
import storage from './utils/storage'
Vue.prototype.$storage = storage

// 全局注册 request，用于请求接口
import request from './utils/request'
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
