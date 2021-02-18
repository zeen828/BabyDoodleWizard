<template>
  <canvas id="canvas" ref="canvas" class="bg-info">蘋果</canvas>
</template>

<script>
function getOffset (Node, offset) {
  if (!offset) {
    offset = {}
    offset.top = 0
    offset.left = 0
  }
  if (Node === document.body) {
    return offset
  }
  offset.top += Node.offsetTop
  offset.left += Node.offsetLeft
  return getOffset(Node.parentNode, offset)
}
export default {
  name: 'Apple',
  methods: {
    ready () {
      // 畫蘋果
      // this.canvas = document.querySelector('#captureApple')
      // this.ctx = this.canvas.getContext('2d')
    },
    initCanvas () {
      this.canvas = document.getElementById('captureApple')
      this.canvas.width = this.canvasSize.width
      this.canvas.height = this.canvasSize.height
      this.context = this.canvas.getContext('2d')
      this.canvasTop = getOffset(this.canvas).top - 108
      this.canvasLeft = getOffset(this.canvas).left - (135 / 915) * this.scrW
    },
    apple () {
      // 抓Dom&宣告2D
      const canvas = document.querySelector('#captureApple')
      const ctx = canvas.getContext('2d')
      // 畫蘋果(紅圓)
      ctx.fillStyle = 'red'
      ctx.beginPath()
      ctx.arc(30, 30, 20, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
      ctx.beginPath()
      ctx.rotate(20 * Math.PI / 180)
      ctx.arc(40, 10, 8, 0, Math.PI)
      ctx.strokeStyle = '#000000'
      ctx.stroke()
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      canvasSize: {
        width: window.screen.availWidth * 0.8,
        height: window.screen.availHeight * 0.75
      },
      // 畫布
      canvas: this.$refs.canvas,
      canvasTop: null,
      canvasLeft: null,
      context: null,
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
