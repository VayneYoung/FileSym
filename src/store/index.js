import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'vayne',
    menu: [],
    currentMenu: '首页'
  },
  mutations: {
    changeName (state) {
      state.userName = 'vayneyang'
    },
    changeMenu (state, val) {
      state.currentMenu = val
    }
  }
})
