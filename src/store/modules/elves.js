/**
 * 精靈
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    data: [
      // 名稱, 攻擊, 防禦, 速度, 屬性, 稀有度, 捕獲機率
      { name: '閃電屬', attack: '2400', defense: '2400', speed: '98', attrib: ['老鼠', '金'], rarity: '', ratio: 0.5 }
    ],
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
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
