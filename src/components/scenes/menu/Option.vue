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
      // AD
      const wp = this.width * 0.01
      const hp = this.height * 0.01
      console.log(wp, hp)
      // 圓形圖片
      var img = new Image()
      img.src = 'https://wx.qlogo.cn/mmopen/vi_32/eANbKH1RvLW088qRtM96QLWWkgysk4T2TErm4F0lHcnhu2txL6Kk0PJokrxT4TLUmEtAZ2xqtxwTRIPWoZZ9RQ/132'
      this.context.beginPath()
      this.context.arc(this.width * 0.2, this.height * 0.35, this.width * 0.1, 0, Math.PI * 2, false)
      this.context.clip()
      this.context.drawImage(img, this.width * 0.2, this.height * 0.35)
      this.context.restore()

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
