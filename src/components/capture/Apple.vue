<template>
  <canvas id="canvasApple" ref="canvas" class="bg-info" width="400" height="400">蘋果</canvas>
</template>

<script>
export default {
  name: 'Apple',
  methods: {
    ready () {
      // 畫蘋果
      this.initCanvas()
      // this.setApple()
      setInterval(this.drawCanvas, 32)
    },
    initCanvas () {
      this.canvas = document.getElementById('canvasApple')
      this.context = this.canvas.getContext('2d')
    },
    setApple () {
      this.context.fillStyle = 'red'
      this.context.beginPath()
      this.context.arc(30, 30, 20, 0, Math.PI * 2)
      this.context.fill()
      this.context.closePath()
      this.context.beginPath()
      this.context.rotate(20 * Math.PI / 180)
      this.context.arc(40, 10, 8, 0, Math.PI)
      this.context.strokeStyle = '#000000'
      this.context.stroke()
    },
    drawCanvas () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.beginPath()
      this.context.arc(this.x, this.y, 12, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      this.x += 6
      if (this.x > 560) this.x = 10
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      // canvasSize: {
      //   width: window.screen.availWidth * 0.8,
      //   height: window.screen.availHeight * 0.75
      // },
      // 畫布
      canvas: this.$refs.canvas,
      // canvasTop: null,
      // canvasLeft: null,
      context: null,
      x: 30,
      y: 30,
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
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
