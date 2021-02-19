<template>
  <canvas :id="'canvasRacingCar' + no" class="canvasRacingCar canvas" ref="canvas" :width="width" :height="height">汽車</canvas>
</template>

<script>
export default {
  name: 'canvasRacingCar',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      // this.drawing()
      this.y = this.no * 40 + 10 - 40
      if (this.width !== 0) {
        // 型態轉換100px=>100，寬是取100px有單位
        this.x = parseInt(this.width.replace('xp', ''))
        this.carLoop = setInterval(this.drawing, this.speed)
      }
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasRacingCar' + this.no)
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    // 繪圖-車子
    drawing () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 車體
      // this.context.fillStyle = 'rgb(200, 150, 0)'
      this.context.fillStyle = this.colour
      this.context.beginPath()
      this.context.moveTo(this.x + 0, this.y + 10)
      this.context.lineTo(this.x + 20, this.y + 10)
      this.context.lineTo(this.x + 30, this.y)
      this.context.lineTo(this.x + 60, this.y)
      this.context.lineTo(this.x + 70, this.y + 10)
      this.context.lineTo(this.x + 80, this.y + 10)
      this.context.lineTo(this.x + 80, this.y + 20)
      this.context.lineTo(this.x + 0, this.y + 20)
      this.context.lineTo(this.x + 0, this.y + 10)
      this.context.closePath()
      this.context.fill()
      // 前輪
      this.context.fillStyle = '#c0c0c0'
      this.context.beginPath()
      this.context.arc(this.x + 20, this.y + 20, 8, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()
      // 後輪
      this.context.beginPath()
      this.context.arc(this.x + 70, this.y + 20, 8, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()
      // 車號
      this.context.font = '12px serif'
      this.context.strokeText(this.no, this.x + 40, this.y + 15)
      if (this.x > 10) {
        this.x -= 10
        // if (this.x < 10) this.x = 10
      } else {
        console.log(this.x)
        // 停止迴圈
        clearInterval(this.carLoop)
        // this.stop = true
      }
    }
  },
  props: [
    // 車號
    'no',
    // 速度
    'speed',
    // 顏色
    'colour',
    'width',
    'height'
  ],
  computed: {
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
      // width: 600,
      // height: 600,
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      x: 1000,
      y: 10,
      carLoop: null,
      config: {}
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {
    this.ready()
  },
  beforeUpdate () {},
  updated () {
    console.log('汽車區更新')
    console.log('汽車區', this.no, this.speed, this.colour, this.width, this.height)
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>
