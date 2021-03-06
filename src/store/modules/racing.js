/**
 * 競速
 **/
export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    // 開始
    start: false,
    // 重置
    reset: false,
    // 停止
    stop: false,
    // 汽車
    car: {
      car1: { st: 1, images: require('@/assets/images/car/car1.png') },
      car2: { st: 2, images: require('@/assets/images/car/car2.png') },
      car3: { st: 3, images: require('@/assets/images/car/car3.png') },
      car4: { st: 4, images: require('@/assets/images/car/car4.png') },
      car5: { st: 5, images: require('@/assets/images/car/car5.png') },
      car6: { st: 6, images: require('@/assets/images/car/car6.png') },
      car7: { st: 7, images: require('@/assets/images/car/car7.png') },
      car8: { st: 8, images: require('@/assets/images/car/car8.png') },
      car9: { st: 9, images: require('@/assets/images/car/car9.png') },
      car10: { st: 10, images: require('@/assets/images/car/car10.png') }
    },
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
    debug: false
  },
  // 用來註冊改變資料狀態
  // this.$store.commit('mutations function name')
  mutations: {
    setStart (state, val) {
      state.start = val
    },
    setReset (state, val) {
      state.reset = val
    },
    setStop (state, val) {
      state.stop = val
    },
    setCar (state, val) {
      state.car = val
    },
    setCar1St (state, val) {
      state.car.car1.st = val
    },
    setCar2St (state, val) {
      state.car.car2.st = val
    },
    setCar3St (state, val) {
      state.car.car3.st = val
    },
    setCar4St (state, val) {
      state.car.car4.st = val
    },
    setCar5St (state, val) {
      state.car.car5.st = val
    },
    setCar6St (state, val) {
      state.car.car6.st = val
    },
    setCar7St (state, val) {
      state.car.car7.st = val
    },
    setCar8St (state, val) {
      state.car.car8.st = val
    },
    setCar9St (state, val) {
      state.car.car9.st = val
    },
    setCar10St (state, val) {
      state.car.car10.st = val
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
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getStart (state, val) {
      return state.start
    },
    getReset (state, val) {
      return state.reset
    },
    getStop (state) {
      return state.stop
    },
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
    },
    // 設定開獎號碼(EX:1,2,3,4,5,6,7,8,9,10)
    serDrawNo (context, noStr) {
      const noArr = noStr.split(',')
      noArr.forEach(function (item, index, array) {
        // console.log(item, index, array)
        switch (item) {
          case '1':
          case '01':
            context.commit('setCar1St', index + 1)
            break
          case '2':
          case '02':
            context.commit('setCar2St', index + 1)
            break
          case '3':
          case '03':
            context.commit('setCar3St', index + 1)
            break
          case '4':
          case '04':
            context.commit('setCar4St', index + 1)
            break
          case '5':
          case '05':
            context.commit('setCar5St', index + 1)
            break
          case '6':
          case '06':
            context.commit('setCar6St', index + 1)
            break
          case '7':
          case '07':
            context.commit('setCar7St', index + 1)
            break
          case '8':
          case '08':
            context.commit('setCar8St', index + 1)
            break
          case '9':
          case '09':
            context.commit('setCar9St', index + 1)
            break
          case '10':
            context.commit('setCar10St', index + 1)
            break
        }
      })
    },
    // 畫布開始
    setCanvasStart (context) {
      if (context.state.distance >= 0) {
        context.commit('setStart', true)
        context.commit('setReset', false)
        context.commit('setStop', false)
      }
    },
    // 畫布重置
    setCanvasReset (context) {
      context.commit('setStart', false)
      context.commit('setReset', true)
      context.commit('setStop', false)
      context.commit('setSpeed', 40)
      context.commit('setDistance', 10000)
    },
    // 畫布停止
    setCanvasStop (context) {
      context.commit('setStart', false)
      context.commit('setReset', false)
      context.commit('setStop', true)
    }
  }
}
