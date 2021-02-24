<template>
  <canvas id="canvas" class="canvas" ref="canvas" :width="width" :height="height">畫布</canvas>
</template>

<script>
export default {
  name: 'canvas-demo',
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
      this.canvas = document.getElementById('canvas')
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
      // 避免額外function內指向錯亂
      const that = this
      // 圖片函式
      const img = new Image()
      // 指定圖片
      img.src = 'http://www.w3.org/html/logo/img/one-color.png'
      // 讀取圖片
      img.onload = function () {
        // 貼圖(圖檔,X,Y)
        that.context.drawImage(img, 10, 10)
        that.context.drawImage(img, 150, 10, 50, 50)
        that.context.drawImage(img, 60, 60, 50, 50, 10, 10, 10, 10)
      }
    }
  },
  data () {
    return {
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      // 寬高
      width: 400,
      height: 400
    }
  },
  mounted () {
    this.ready()
  }
}
</script>
