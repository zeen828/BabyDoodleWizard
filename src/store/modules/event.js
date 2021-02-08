export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    accessToken: '',
    signature: '',
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setAccessToken (state, val) {
      state.accessToken = val
    },
    setSignature (state, val) {
      state.signature = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getAccessToken (state) {
      return state.accessToken
    },
    getSignature (state) {
      return state.signature
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  // 建議透過這這邊執行邏輯運算後呼叫mutations
  // this.$store.dispatch('actions function name')
  actions: {
    ready (context) {
      console.log('Vues.store.model.action.ready')
    }
  }
}
