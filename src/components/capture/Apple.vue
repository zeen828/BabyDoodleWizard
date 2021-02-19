<template>
  <canvas id="canvasApple" class="canvas" ref="canvas" :width="width" :height="height">蘋果</canvas>
</template>

<script>
export default {
  name: 'Apple',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 蘋果
      // this.setApple()
      // setInterval(this.setApple, 32)
    },
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasApple')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    setApple () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 紅
      this.context.fillStyle = 'rgb(200, 0, 0)'
      this.context.beginPath()
      this.context.arc(this.x, this.y, 25, 0, Math.PI * 2, true)
      // this.context.arc(60, 60, 25, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 葉子
      this.context.fillStyle = 'rgb(0, 200, 0)'
      this.context.beginPath()
      this.context.moveTo(this.x + 10, this.y - 15)
      // this.context.moveTo(70, 45)
      this.context.arc(this.x + 20, this.y - 35, 20, 0, 1.2, false)
      // this.context.arc(80, 25, 20, 0, 1.2, false)
      this.context.closePath()
      this.context.fill()
      if (this.y > 60) {
        this.y -= 10
        if (this.y < 0) this.y = this.height
      } else {
        console.log(this.y)
      }
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      width: 600,
      height: 600,
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      x: 60,
      y: 600,
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
