<template>
    <canvas id="scenesCarBackground" class="canvas" ref="canvas" :width="width" :height="height">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesCarBackground',
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
      this.canvas = document.getElementById('scenesCarBackground')
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
      // 黑底
      this.context.fillStyle = 'rgb(0, 0, 0)'
      // 設定一個填滿顏色的矩形(原點出發X橫向位置,原點出發Y垂直位置,寬,高)
      this.context.fillRect(0, 0, this.width, this.height)
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      width: 800,
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
