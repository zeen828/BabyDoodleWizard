<template>
    <canvas id="scenesMenuBackground" class="canvas" ref="canvas" :width="width" :height="height">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesMenuBackground',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      this.drawing()
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('scenesMenuBackground')
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
      // AD
      const wp = this.width * 0.01
      const hp = this.height * 0.01
      console.log(wp, hp)
      this.context.strokeRect(wp, hp, this.width - (wp * 2), this.height * 0.2)
      // 三角形
      this.context.beginPath()
      this.context.moveTo(this.width * 0.2, this.height * 0.35)
      this.context.lineTo(this.width * 0.8, this.height * 0.35)
      this.context.lineTo(this.width * 0.5, this.height * 0.8)
      this.context.closePath()
      this.context.stroke()
      // 選單圈圈三個
      this.context.fillStyle = 'rgb(150, 200, 100)'
      this.context.beginPath()
      this.context.arc(this.width * 0.2, this.height * 0.35, this.width * 0.1, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()

      this.context.beginPath()
      this.context.arc(this.width * 0.8, this.height * 0.35, this.width * 0.1, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()

      this.context.beginPath()
      this.context.arc(this.width * 0.5, this.height * 0.8, this.width * 0.15, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()
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
