<template>
  <canvas id="canvasDemo" ref="canvas" class="" width="400" height="400">蘋果</canvas>
</template>

<script>
export default {
  name: 'Demo',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 蘋果
      this.setApple()
      // 設定矩形
      // this.setRect()
      // 畫路徑-填色&邊框
      // this.setPathA()
      // 畫路徑-笑臉
      // this.setPathB()
      // 移動效果
      // setInterval(this.drawCanvas, 32)
    },
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasDemo')
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    setApple () {
      // 紅
      this.context.fillStyle = 'rgb(200, 0, 0)'
      this.context.beginPath()
      this.context.arc(60, 60, 25, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.fill()
      // 葉子
      this.context.fillStyle = 'rgb(0, 200, 0)'
      this.context.beginPath()
      this.context.moveTo(70, 45)
      this.context.arc(80, 25, 20, 0, 1.2, false)
      this.context.closePath()
      this.context.fill()
    },
    // 畫矩形
    setRect () {
      // 設定顏色(rgb(紅,綠,藍,透明度))
      this.context.fillStyle = 'rgb(200, 0, 0)'
      // 設定一個填滿顏色的矩形(原點出發X橫向位置,原點出發Y垂直位置,寬,高)
      this.context.fillRect(10, 10, 30, 50)
      this.context.fillStyle = 'rgba(0, 0, 200, 0.5)'
      this.context.fillRect(10, 30, 50, 30)
      // 設定一個邊框矩形
      this.context.strokeRect(10, 50, 30, 30)
      // 清除矩形內的內容
      this.context.clearRect(15, 10, 10, 100)
    },
    // 畫路徑-填色&邊框
    setPathA () {
      // 填色三角形
      this.context.fillStyle = 'rgb(0, 200, 0)'
      // 開始一個新路徑
      this.context.beginPath()
      // 移動畫筆到(X,Y)
      this.context.moveTo(25, 25)
      // 從目前位置畫一直線到指定座標(X,Y)
      this.context.lineTo(105, 25)
      this.context.lineTo(25, 105)
      // 填滿路徑內容
      this.context.fill()

      // 邊框三角形
      this.context.beginPath()
      this.context.moveTo(125, 125)
      this.context.lineTo(125, 45)
      this.context.lineTo(45, 125)
      // 結束一個路徑
      this.context.closePath()
      // 畫出圖形邊框
      this.context.stroke()
    },
    // 畫路徑-笑臉
    setPathB () {
      this.context.fillStyle = 'rgb(200, 0, 0)'
      // 開始一個新路徑
      this.context.beginPath()
      // 臉
      // 產生一個弧形(圓心座標X,圓心座標Y,半徑,開始點,結束點,true逆向)
      this.context.arc(75, 75, 50, 0, Math.PI * 2, true)
      // 移動畫筆到(X,Y)
      this.context.moveTo(110, 75)
      // 嘴
      this.context.arc(75, 75, 35, 0, Math.PI, false)
      this.context.moveTo(65, 65)
      // 眼睛-左
      this.context.arc(60, 65, 5, 0, Math.PI * 2, true)
      this.context.moveTo(95, 65)
      // 眼睛-右
      this.context.arc(90, 65, 5, 0, Math.PI * 2, true)
      this.context.stroke()
    },
    // 畫圓移動需搭配setInterval(this.drawCanvas, 32)
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
      // 畫布
      canvas: this.$refs.canvas,
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
