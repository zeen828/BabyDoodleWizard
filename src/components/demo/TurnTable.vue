<template>
    <canvas id="myCanvas" class="bg-info" width="500" height="500"></canvas>
</template>

<script>
export default {
  name: 'TurnTable',
  methods: {
    ready () {
      var that = this
      that.haA()
      that.haB()
      // that.haC(0)
      // 時間
      for (var i = 0; i <= 20; i++) {
        that.timeout = setTimeout(() => {
          console.log('雲跑了', i)
          that.haC(i * 10)
        }, 1000 * i)
      }
    },
    haA () {
      const canvas = document.querySelector('#myCanvas')
      const ctx = canvas.getContext('2d')
      // 利用矩型繪製房子的身體
      ctx.fillStyle = '#f6e204'
      ctx.fillRect(50, 350, 200, 200)
      // 利用路徑繪製屋頂
      ctx.beginPath()
      ctx.moveTo(50, 350)
      ctx.lineTo(150, 250)
      ctx.lineTo(250, 350)
      ctx.closePath()
      ctx.fillStyle = '#6a1a10'
      ctx.fill()
      // 利用矩型繪製窗戶外框
      ctx.strokeStyle = '#0173ab'
      ctx.strokeRect(75, 375, 50, 50)
      // 利用路徑繪製窗戶中間的十字窗框
      ctx.beginPath()
      ctx.moveTo(75, 400)
      ctx.lineTo(125, 400)
      ctx.moveTo(100, 375)
      ctx.lineTo(100, 425)
      ctx.closePath()
      ctx.stroke()
      // 利用矩型繪製門的外框
      ctx.strokeStyle = '#6a1a10'
      ctx.strokeRect(175, 450, 25, 50)
      ctx.strokeRect(200, 450, 25, 50)
      // 利用路徑繪製門把
      ctx.fillStyle = '#ba2736'
      ctx.beginPath()
      ctx.arc(190, 470, 5, 0, Math.PI * 2)
      ctx.arc(210, 470, 5, 0, Math.PI * 2)
      ctx.fill()
    },
    haB () {
      const canvas = document.querySelector('#myCanvas')
      const ctx = canvas.getContext('2d')
      // 利用矩型繪製樹幹
      ctx.fillStyle = '#6b4224'
      ctx.fillRect(400, 300, 200, 200)
      // 利用路徑繪製樹根
      ctx.beginPath()
      ctx.arc(320, 450, 80, 0, 0.4 * Math.PI)
      ctx.lineTo(400, 500)
      ctx.closePath()
      ctx.fill()
      // 利用路徑繪製樹葉
      ctx.fillStyle = '#335617'
      ctx.beginPath()
      ctx.arc(450, 200, 190, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      // 利用路徑繪製果實
      ctx.fillStyle = 'red'
      ctx.beginPath()
      ctx.arc(450, 100, 15, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(350, 200, 15, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(430, 280, 15, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    },
    haC (path) {
      const canvas = document.querySelector('#myCanvas')
      const ctx = canvas.getContext('2d')
      // 使用路徑繪製雲朵
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(80 + path, 100, 30, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(120 + path, 75, 35, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(160 + path, 75, 30, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(200 + path, 100, 30, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(120 + path, 125, 30, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
      ctx.beginPath()
      ctx.arc(160 + path, 125, 35, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    },
    // 畫格子
    test2 () {
      console.clear()
      const canvas = document.getElementById('myCanvas')
      const ctx = canvas.getContext('2d')
      const canvasSize = 500
      canvas.width = canvasSize
      canvas.height = canvasSize
      ctx.beginPath()
      for (let i = 0; i < canvasSize / 50; i++) {
        const pos = i * 50
        // X Axis
        ctx.moveTo(0, pos)
        ctx.lineTo(500, pos)
        ctx.fillText(pos, 0, pos)
        // Y Axis
        ctx.moveTo(pos, 0)
        ctx.lineTo(pos, 500)
        ctx.fillText(pos, pos, 10)
      }
      ctx.strokeStyle = 'gray'
      ctx.stroke()
      // Path
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(100, 50)
      ctx.lineTo(50, 170)
      ctx.closePath()
      ctx.rect(50, 200, 50, 50)
      ctx.lineWidth = 5
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'blue'
      ctx.stroke()
      ctx.fill()
      // Rect
      ctx.fillRect(150, 50, 100, 50)
      ctx.strokeRect(150, 150, 100, 50)
      // ctx.clearRect(150, 50, 100, 300)
      // Arc
      ctx.beginPath()
      ctx.arc(350, 100, 50, 0, Math.PI)
      ctx.closePath()
      ctx.stroke()
      ctx.fill()
      // Text
      ctx.font = 'bold 24px "Microsoft JhengHei"'
      ctx.textAlign = 'center'
      // ctx.textBaseline = 'middle'
      ctx.fillText('Hellow World!', 300, 50)
    },
    // 基礎
    test () {
      var c = document.getElementById('myCanvas')
      var ctx = c.getContext('2d')
      // 畫矩形
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(0, 0, 100, 30)// 繪製填色矩形
      // 畫矩形(只有邊框的)
      ctx.strokeStyle = '#0000ff'
      ctx.strokeRect(50, 0, 100, 30)// 繪製路徑矩形
      // 清除矩形範圍（在動畫中作為清除整塊畫布範圍的影格效果）
      // ctx.clearRect(x, y, width, height)
      // 繪製一個 5-12-13 直角三角形
      ctx.beginPath() // 宣告繪製路徑
      ctx.moveTo(50, 50) // 將畫筆移動至指定座標
      ctx.lineTo(100, 50) // 繪製直線
      ctx.lineTo(50, 170)
      ctx.closePath() // 自動封閉路徑
      ctx.rect(50, 200, 50, 50) // 繪製矩形路徑
      ctx.lineWidth = 5 // 指定路徑寬度
      ctx.strokeStyle = 'red' // 指定路徑顏色（字串，可以是顏色名稱、色票或 RGBA）
      ctx.fillStyle = 'blue' // 指定路徑填色（字串，可以是顏色名稱、色票或 RGBA）
      ctx.stroke() // 路徑上色
      ctx.fill() // 路徑填色
      // 創建漸變色(紅變白)
      var grd = ctx.createLinearGradient(0, 0, 100, 30)
      grd.addColorStop(0, 'red')
      grd.addColorStop(1, 'white')
      // 畫矩形填充漸變色
      ctx.fillStyle = grd
      ctx.fillRect(0, 35, 100, 30)
      // 創建漸變色(白變紅變白)
      var grd2 = ctx.createLinearGradient(75, 50, 5, 90, 60, 100)
      grd2.addColorStop(0, 'red')
      grd2.addColorStop(1, 'white')
      // 畫矩形填充漸變色
      ctx.fillStyle = grd2
      ctx.fillRect(0, 70, 100, 30)
      // 畫線
      ctx.moveTo(0, 0)
      ctx.lineTo(200, 100)
      ctx.stroke()
      // 畫圓形
      ctx.beginPath()
      ctx.arc(95, 50, 40, 0, 2 * Math.PI)
      ctx.stroke()
      // 文字(實心)
      ctx.fillStyle = '#000000'
      ctx.font = '20px Arial'
      ctx.fillText('Hello World', 80, 30)
      // 文字(實心)
      ctx.fillStyle = '#000000'
      ctx.font = '20px Arial'
      ctx.strokeText('Hello World', 80, 60)
    }
  },
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
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

<style lang="scss">
</style>
