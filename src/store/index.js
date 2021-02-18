import Vue from 'vue'
import Vuex from 'vuex'

// module
import Elves from './modules/elves'
import Capture from './modules/capture'
import Props from './modules/props'
import Event from './modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用來資料共享資料儲存
  state: {
    lang: null,
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setLang (state, val) {
      state.lang = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getLang (state) {
      return state.lang
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  // 建議透過這這邊執行邏輯運算後呼叫mutations
  // this.$store.dispatch('actions function name')
  actions: {
    ready: function ({ commit, dispatch, rootState, state }) {
      console.log('Vues.store.action.ready')
    }
  },
  // store的子模組，為了開發大型專案，方便狀態管理而使用的
  modules: {
    Elves,
    Capture,
    Props,
    Event
  }
})
