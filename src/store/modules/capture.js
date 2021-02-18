/**
 * 捕獲道具
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    data: [
      // 名稱, 圖片, 購買價錢, 捕獲加成屬性, 捕獲機率
      { name: '橘子', image: '', price: '', attrib: '柑橘類', ratio: 0.5 },
      { name: '蘋果', image: '', price: '', attrib: '仁果類', ratio: 0.5 },
      { name: '葡萄', image: '', price: '', attrib: '漿果類', ratio: 0.5 },
      { name: '水蜜桃', image: '', price: '', attrib: '核果類', ratio: 0.5 },
      { name: '櫻桃', image: '', price: '', attrib: '核果類', ratio: 0.5 },
      { name: '栗子', image: '', price: '', attrib: '堅果類', ratio: 0.5 },
      { name: '哈密瓜', image: '', price: '', attrib: '瓜果類', ratio: 0.5 },
      { name: '鳳梨', image: '', price: '', attrib: '熱帶和亞熱帶果類', ratio: 0.5 }
    ],
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setData (state, val) {
      state.data = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getData (state) {
      return state.data
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
