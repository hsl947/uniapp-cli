import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		num: 0
	},
	mutations: {
		setNum(state, val) {
			state.num = val
		}
	},
	actions: {
		setNum({ commit }, val) {
			commit('setNum', val)
		}
	}
})

export default store
