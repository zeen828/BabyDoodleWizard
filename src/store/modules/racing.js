/**
 * 競速
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    // 速度
    speed: 30,
    // 距離
    distance: 10000,
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setSpeed (state, val) {
      state.speed = val
    },
    setDistance (state, val) {
      state.distance = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getSpeed (state) {
      return state.speed
    },
    getDistance (state) {
      return state.distance
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
