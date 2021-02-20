<template>
    <canvas id="scenesTrackBackground" class="canvas" ref="canvas" :width="widthXp" :height="heightXp">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesTrackBackground',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      // this.drawing()
      if (this.width !== 0) {
        // 型態轉換100px=>100，寬是取100px有單位
        // this.x = parseInt(this.width.replace('xp', ''))
        this.carLoop = setInterval(this.drawing, this.speed)
      }
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('scenesTrackBackground')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    // 繪圖
    drawing () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 黑底
      this.context.fillStyle = 'rgb(0, 0, 0)'
      // 設定一個填滿顏色的矩形(原點出發X橫向位置,原點出發Y垂直位置,寬,高)
      this.context.fillRect(0, 0, this.width, this.height)
      // 白虛線(迴圈9條)
      const h = this.height / 10
      this.context.setLineDash([30, 5])
      for (let i = 1; i < 10; i++) {
        this.context.beginPath()
        // this.context.strokeStyle = 'rgb(255, 255, 255)'
        this.context.strokeStyle = '#c0c0c0'
        this.context.lineWidth = 2
        this.context.moveTo(-50 + this.x, h * i)
        this.context.lineTo(this.width + this.x + 100, h * i)
        this.context.stroke()
      }
      if (this.x === 5) {
        this.x = 15
      } else if (this.x === 15) {
        this.x = 25
      } else {
        this.x = 5
      }
      this.distance -= this.x
    }
  },
  computed: {
    widthXp: {
      get () {
        return this.$store.getters['Racing/getWidthPx']
      }
    },
    heightXp: {
      get () {
        return this.$store.getters['Racing/getHeightPx']
      }
    },
    width: {
      get () {
        return this.$store.getters['Racing/getWidth']
      }
    },
    height: {
      get () {
        return this.$store.getters['Racing/getHeight']
      }
    },
    speed: {
      get () {
        return this.$store.getters['Racing/getSpeed']
      }
    },
    distance: {
      get () {
        return this.$store.getters['Racing/getDistance']
      },
      set (val) {
        this.$store.commit('Racing/setDistance', val)
      }
    },
    stop: {
      get () {
        return this.$store.getters['Racing/getStop']
      },
      set (val) {
        this.$store.commit('Racing/setStop', val)
      }
    }
  },
  watch: {
    distance (newVal, oldVal) {
      if (newVal <= 0) {
        this.stop = true
      }
    },
    stop (newVal, oldVal) {
      if (newVal === true) {
        clearInterval(this.carLoop)
      }
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      // 畫筆位置
      x: 0,
      y: 0,
      // 迴圈
      carLoop: null,
      config: {}
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {
    // this.ready()
  },
  beforeUpdate () {},
  updated () {
    this.ready()
  },
  beforeDestroy () {
    clearInterval(this.carLoop)
  },
  destroyed () {}
}
</script>
