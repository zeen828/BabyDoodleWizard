/**
 * 應用道具
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    menu: {
      fight: { name: '對戰捕獲', images: require('@/assets/images/pokemonGaole/menu/fight.jpg') },
      capture: { name: '立刻捕獲', images: require('@/assets/images/pokemonGaole/menu/capture.jpg') },
      activity: { name: '活動對戰', images: require('@/assets/images/pokemonGaole/menu/activity.jpg') }
    },
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
    getMenu (state) {
      return state.menu
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
