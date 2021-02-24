<template>
    <canvas id="scenesMenuOption" class="canvas" ref="canvas" :width="width" :height="height">蘋果</canvas>
</template>

<script>
import imgCar1 from '@/assets/images/car/car1.png'
export default {
  name: 'scenesMenuOption',
  methods: {
    ready () {
      console.log('場景-首頁目錄-選項')
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      this.drawing()
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('scenesMenuOption')
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
      // var that = this
      // const sizeW = this.width * 0.15 * 2
      // const sizeH = this.width * 0.15 * 2
      // // 圓形圖片
      // var img = new Image()
      // img.onload = function () {
      //   const imgW = img.width
      //   const imgH = img.height
      //   // const x = imgW / 2
      //   const x = sizeW / 2
      //   // const y = imgH / 2
      //   const y = sizeH / 2
      //   // const r = imgW / 2
      //   const r = sizeW / 2
      //   console.log('變數:', imgW, imgH, x, y, r)
      //   that.context.clearRect(0, 0, sizeW, sizeH)
      //   that.context.save()
      //   that.context.beginPath()
      //   that.context.arc(x + that.width * 0.5 - r, y + that.height * 0.8 - r, r, 0, Math.PI * 2, false)
      //   that.context.clip()
      //   that.context.drawImage(img, that.width * 0.5 - r, that.height * 0.8 - r, sizeW, sizeH)
      //   // that.context.drawImage(img, that.width * 0.5, that.height * 0.8, that.width * 0.15 * 2, that.height * 0.15 * 2)
      //   that.context.restore()
      // }
      // img.src = 'https://wx.qlogo.cn/mmopen/vi_32/eANbKH1RvLW088qRtM96QLWWkgysk4T2TErm4F0lHcnhu2txL6Kk0PJokrxT4TLUmEtAZ2xqtxwTRIPWoZZ9RQ/132'

      // 選單圈圈三個
      // this.context.fillStyle = 'rgb(150, 100, 100, 0.8)'
      // this.context.beginPath()
      // this.context.arc(this.width * 0.2, this.height * 0.35, this.width * 0.1, 0, Math.PI * 2, true)
      // this.context.closePath()
      // this.context.stroke()
      // this.context.fill()

      // this.context.beginPath()
      // this.context.arc(this.width * 0.8, this.height * 0.35, this.width * 0.1, 0, Math.PI * 2, true)
      // this.context.closePath()
      // this.context.stroke()
      // this.context.fill()

      // this.context.beginPath()
      // this.context.arc(this.width * 0.5, this.height * 0.8, this.width * 0.15, 0, Math.PI * 2, true)
      // this.context.closePath()
      // this.context.stroke()
      // this.context.fill()
      this.drawingO(this.menu.fight.images, this.width * 0.5, this.height * 0.8, this.width * 0.15)
      this.drawingO(this.menu.activity.images, this.width * 0.2, this.height * 0.35, this.width * 0.1)
      this.drawingO(this.menu.capture.images, this.width * 0.8, this.height * 0.35, this.width * 0.1)
    },
    // 繪圖圓形圖
    drawingO (src, width, height, radius) {
      var that = this
      const sizeW = radius * 2
      const sizeH = radius * 2
      // 圓形圖片
      var img = new Image()
      img.onload = function () {
        const imgW = img.width
        const imgH = img.height
        // const x = imgW / 2
        const x = sizeW / 2
        // const y = imgH / 2
        const y = sizeH / 2
        // const r = imgW / 2
        const r = sizeW / 2
        console.log('變數:', imgW, imgH, x, y, r)
        that.context.clearRect(width - r, height - r, sizeW, sizeH)
        that.context.save()
        that.context.beginPath()
        that.context.arc(x + width - r, y + height - r, r, 0, Math.PI * 2, false)
        that.context.clip()
        that.context.drawImage(img, width - r, height - r, sizeW, sizeH)
        // that.context.drawImage(img, that.width * 0.5, that.height * 0.8, that.width * 0.15 * 2, that.height * 0.15 * 2)
        that.context.restore()
      }
      img.src = src
    }
  },
  computed: {
    menu: {
      get () {
        return this.$store.getters['pokemonGaole/getMenu']
      }
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      imgCar1: imgCar1,
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
  updated () {
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>
