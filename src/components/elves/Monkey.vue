<template>
  <canvas id="elvesMonkey" class="canvas" ref="canvas" :width="width" :height="height">猴子</canvas>
</template>

<script>
export default {
  name: 'Monkey',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 蘋果
      // this.setMonkey()
      // setInterval(this.setMonkey, 32)
    },
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('elvesMonkey')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    setMonkey () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 填充顏色
      this.context.fillStyle = 'rgb(200, 200, 0)'
      // 邊條顏色
      this.context.strokeStyle = 'rgb(200, 200, 0)'
      // 線的粗度
      this.context.lineWidth = 2
      // 頭
      this.context.beginPath()
      this.context.arc(100, 100, 30, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 胸-左
      this.context.beginPath()
      this.context.arc(80, 160, 30, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 胸-右
      this.context.beginPath()
      this.context.arc(120, 160, 30, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 臀
      this.context.arc(100, 200, 30, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 手-左
      this.context.beginPath()
      this.context.moveTo(60, 160)
      this.context.lineTo(15, 160)
      this.context.lineTo(30, 100)
      this.context.stroke()
      // 手-右
      this.context.beginPath()
      this.context.moveTo(140, 160)
      this.context.lineTo(180, 160)
      this.context.lineTo(170, 100)
      this.context.stroke()
      // 腳-左
      this.context.beginPath()
      this.context.moveTo(75, 210)
      this.context.lineTo(60, 250)
      this.context.lineTo(60, 300)
      this.context.stroke()
      // 腳-右
      this.context.beginPath()
      this.context.moveTo(125, 210)
      this.context.lineTo(135, 250)
      this.context.lineTo(135, 300)
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
