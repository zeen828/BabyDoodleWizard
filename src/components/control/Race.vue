<template>
  <canvas id="canvasRace" class="canvas" ref="canvas" :width="width" :height="height">行動線</canvas>
</template>

<script>
export default {
  name: 'Race',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // this.setRaceA()
      // this.setRaceB()
    },
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasRace')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    setRaceA () {
      const x = this.width / 6
      const y = (this.height / 2) - 30
      const y1 = 30
      const y2 = 60
      // 填充顏色
      this.context.fillStyle = 'rgb(200, 150, 0)'
      // 橘線
      this.context.beginPath()
      this.context.moveTo(0, y)
      this.context.lineTo(x * 1, y + y1)
      this.context.lineTo(x * 2, y)
      this.context.lineTo(x * 3, y + y1)
      this.context.lineTo(x * 4, y)
      this.context.lineTo(x * 5, y + y1)
      this.context.lineTo(this.width, y)
      this.context.lineTo(this.width, y + y1)
      this.context.lineTo(x * 5, y + y2)
      this.context.lineTo(x * 4, y + y1)
      this.context.lineTo(x * 3, y + y2)
      this.context.lineTo(x * 2, y + y1)
      this.context.lineTo(x * 1, y + y2)
      this.context.lineTo(0, y + y1)
      this.context.closePath()
      this.context.fill()
    },
    setRaceB () {
      const x = this.width / 6
      const y = (this.height / 2)
      const y1 = 30
      const y2 = 60
      // 填充顏色
      this.context.fillStyle = 'rgb(0, 150, 200)'
      // 橘線
      this.context.beginPath()
      this.context.moveTo(0, y)
      this.context.lineTo(x * 1, y + y1)
      this.context.lineTo(x * 2, y)
      this.context.lineTo(x * 3, y + y1)
      this.context.lineTo(x * 4, y)
      this.context.lineTo(x * 5, y + y1)
      this.context.lineTo(this.width, y)
      this.context.lineTo(this.width, y + y1)
      this.context.lineTo(x * 5, y + y2)
      this.context.lineTo(x * 4, y + y1)
      this.context.lineTo(x * 3, y + y2)
      this.context.lineTo(x * 2, y + y1)
      this.context.lineTo(x * 1, y + y2)
      this.context.lineTo(0, y + y1)
      this.context.closePath()
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
      x: 100,
      y: 100,
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
