/**
 * 競速
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    // car: {
    //   car1: { no: 1, images: require('@/assets/images/car/car1.png') },
    //   car2: { no: 2, images: require('@/assets/images/car/car2.png') },
    //   car3: { no: 3, images: require('@/assets/images/car/car3.png') },
    //   car4: { no: 4, images: require('@/assets/images/car/car4.png') },
    //   car5: { no: 5, images: require('@/assets/images/car/car5.png') },
    //   car6: { no: 6, images: require('@/assets/images/car/car6.png') },
    //   car7: { no: 7, images: require('@/assets/images/car/car7.png') },
    //   car8: { no: 8, images: require('@/assets/images/car/car8.png') },
    //   car9: { no: 9, images: require('@/assets/images/car/car9.png') },
    //   car10: { no: 10, images: require('@/assets/images/car/car10.png') }
    // },
    // 寬(像數)
    widthPx: '0px',
    // 高(像數)
    heightPx: '0px',
    // 寬
    width: 0,
    // 高
    height: 0,
    // 速度
    speed: 40,
    // 距離
    distance: 10000,
    // 順位
    rank: 0,
    // 停止
    stop: false,
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setCar (state, val) {
      state.car = val
    },
    setWidthPx (state, val) {
      state.widthPx = val
    },
    setHeightPx (state, val) {
      state.heightPx = val
    },
    setWidth (state, val) {
      state.width = val
    },
    setHeight (state, val) {
      state.height = val
    },
    setSpeed (state, val) {
      state.speed = val
    },
    setDistance (state, val) {
      state.distance = val
    },
    setRank (state, val) {
      state.rank = val
    },
    setStop (state, val) {
      state.stop = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getCar (state) {
      return state.car
    },
    getWidthPx (state) {
      return state.widthPx
    },
    getHeightPx (state) {
      return state.heightPx
    },
    getWidth (state) {
      return state.width
    },
    getHeight (state) {
      return state.height
    },
    getSpeed (state) {
      return state.speed
    },
    getDistance (state) {
      return state.distance
    },
    getRank (state) {
      return state.rank
    },
    getStop (state) {
      return state.stop
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
    },
    // 設定畫布
    setCanvas (context, { width, height }) {
      // 紀錄畫布寬高
      context.commit('setWidthPx', width)
      context.commit('setHeightPx', height)
      // 寬高轉換成數值，xp去掉改型態
      context.commit('setWidth', parseInt(width.replace('xp', '')))
      context.commit('setHeight', parseInt(height.replace('xp', '')))
    }
  }
}
