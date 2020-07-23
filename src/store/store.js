import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: 0,
    counter: 0,
    login: false,
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    clickCounter: state => {
      return `${state.counter} clicks ` 
    }
  },
  mutations: {
    countUp: state => {
      return state.counter++
    },
    countDown: state => {
      return state.counter--
    },
  },
  actions: {
  },
  modules: {
  }
})
