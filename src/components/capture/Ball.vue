<template>
  <canvas id="canvasBall" class="canvas" ref="canvas" :width="width" :height="height">蘋果</canvas>
</template>

<script>
export default {
  name: 'Ball',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      this.drawing()
      // setInterval(this.drawing, 32)
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasBall')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    // 繪圖-精靈球
    drawing () {
      // 畫一個下半圓，指定顏色為白色
      this.context.beginPath()
      this.context.lineWidth = 3
      this.context.fillStyle = '#FFFFFF'
      this.context.arc(100, 100, 50, 0, Math.PI)
      this.context.fill()
      this.context.stroke()

      // 畫一個上半圓，指定顏色為紅色
      this.context.beginPath()
      this.context.fillStyle = '#FF0000'
      this.context.arc(100, 100, 50, Math.PI, Math.PI * 2)
      this.context.fill()
      this.context.stroke()

      // 畫中間的線和圈圈，指定顏色為白色
      this.context.beginPath()
      this.context.fillStyle = '#FFFFFF'
      // 從圓的左邊開始
      this.context.moveTo(50, 100)
      // 連到中間後接著一個上半圓
      this.context.arc(100, 100, 10, Math.PI, Math.PI * 2)
      // 繞過去後再畫一條直線到圓的右邊
      this.context.lineTo(150, 100)
      // 最後沿著線繞回來畫一個下半圓
      this.context.arc(100, 100, 10, 0, Math.PI * 2)
      this.context.fill()
      this.context.stroke()

      // 畫一個圓形，中間的那個圈圈按鈕
      this.context.beginPath()
      this.context.arc(100, 100, 5, 0, Math.PI * 2)
      this.context.stroke()
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
      x: 80,
      y: 80,
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
