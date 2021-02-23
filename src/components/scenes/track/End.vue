<template>
    <canvas id="scenesTrackEnd" class="canvas" ref="canvas" :width="widthXp" :height="heightXp">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesTrackEnd',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      // this.drawing()
      if (this.width !== 0) {
        // 型態轉換100px=>100，寬是取100px有單位
        // this.x = parseInt(this.width.replace('xp', ''))
        this.myLoop = setInterval(this.drawing, this.speed)
      }
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('scenesTrackEnd')
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
      if (this.distance >= (this.width / 2)) {
        return
      }
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 終點線
      let endX = this.x// 終點繪圖起點X座標
      let endY = 0// 終點繪圖起點Y座標
      const endS = 20// 相差間距
      const endCount = this.height / endS// 間距要執行次數
      this.context.fillStyle = '#c0c0c0'
      this.context.beginPath()
      this.context.moveTo(endX, 0)
      for (let j = 1; j <= endCount; j++) {
        endY = j * endS
        this.context.lineTo(endX, endY)
        if (endX === this.x) {
          endX += endS * 2
        } else {
          endX -= endS * 2
        }
        this.context.lineTo(endX, endY)
      }
      if (endX === this.x) {
        this.context.lineTo(endX + endS, endY)
      } else {
        this.context.lineTo(endX - endS, endY)
      }
      this.context.lineTo(endX + endS, 0)
      this.context.lineTo(endX, 0)
      this.context.closePath()
      this.context.fill()
      // this.context.stroke()

      this.x += 10
      if (this.x >= (this.width / 2)) {
        this.x = (this.width / 2)
      }
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
        clearInterval(this.myLoop)
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
      myLoop: null,
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
    clearInterval(this.myLoop)
  },
  destroyed () {}
}
</script>
