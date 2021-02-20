<template>
  <canvas :id="'canvasRacingCar' + no" class="canvasRacingCar canvas" ref="canvas" :width="widthXp" :height="heightXp">汽車</canvas>
</template>

<script>
import imgCar1 from '@/assets/images/car/car1.png'
import imgCar2 from '@/assets/images/car/car2.png'
import imgCar3 from '@/assets/images/car/car3.png'
import imgCar4 from '@/assets/images/car/car4.png'
import imgCar5 from '@/assets/images/car/car5.png'
import imgCar6 from '@/assets/images/car/car6.png'
import imgCar7 from '@/assets/images/car/car7.png'
import imgCar8 from '@/assets/images/car/car8.png'
import imgCar9 from '@/assets/images/car/car9.png'
import imgCar10 from '@/assets/images/car/car10.png'
export default {
  name: 'canvasRacingCar',
  methods: {
    ready () {
      // 畫布宣告
      this.initCanvas()
      // 繪圖
      // this.drawing()
      this.y = this.no * 40 + 10 - 40
      if (this.width !== 0) {
        // 型態轉換100px=>100，寬是取100px有單位
        // this.x = parseInt(this.width.replace('xp', ''))
        this.x = this.width
        this.carLoop = setInterval(this.drawing, this.speed)
      }
    },
    // 畫布宣告
    initCanvas () {
      // 定位目標DOM
      this.canvas = document.getElementById('canvasRacingCar' + this.no)
      // 渲染
      if (this.canvas.getContext) {
        this.context = this.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    drawing () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      var img = new Image()
      // x : 11, 94, 175
      // y : 13, 45, 83, 118, 152
      switch (this.no) {
        case 1:
          img.src = this.imgCar1
          // this.context.drawImage(img, 11, 13, 80, 35, this.x, this.y, 80, 30)
          // img.src = 'https://share.jonbotech.com/racing/video/racing_car/images/animate/car1.png'
          // img.src = 'https://share.jonbotech.com/racing/video/racing_car/images/rezult/winner1.png'
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 2:
          img.src = this.imgCar2
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 3:
          img.src = this.imgCar3
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 4:
          img.src = this.imgCar4
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 5:
          img.src = this.imgCar5
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 6:
          img.src = this.imgCar6
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 7:
          img.src = this.imgCar7
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 8:
          img.src = this.imgCar8
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 9:
          img.src = this.imgCar9
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
        case 10:
          img.src = this.imgCar10
          this.context.drawImage(img, this.x, this.y, 80, 30)
          break
      }
      // 車號
      this.context.font = '14px serif'
      this.context.strokeText(this.no, this.x + 30, this.y + 20)
      // 移動
      const wt = this.width / 4
      // const wtt = [(wt * 3) - wt] / 3
      if (this.competeStatus === false) {
        // 先跑到一半
        if (this.x >= wt * 2) {
          this.x -= 10
        } else {
          // 過半開始較勁
          this.competeStatus = true
        }
      }
      // 較勁
      if (this.competeStatus === true && this.endStatus === false) {
        // 較勁邏輯
        if (this.competeCount === 30 || this.competeTypr === 10) {
          this.competeTypr = Math.floor(Math.random() * 5)
        }
        // (0不變,1前進到一半,2前進到底,3後退一半,4後退到底,10未賦予動作)
        switch (this.competeTypr) {
          case 1:
            if (this.x >= wt * 1.5) {
              this.x -= 10
            }
            break
          case 2:
            if (this.x >= wt) {
              this.x -= 10
            }
            break
          case 3:
            if (this.x <= wt * 2.5) {
              this.x += 5
            }
            break
          case 4:
            if (this.x <= wt * 3) {
              this.x += 5
            }
            break
        }
        this.competeCount--
        if (this.competeCount === 0) {
          this.competeCount = 30
        }
      }
      // 衝終點
      if (this.endStatus === true) {
        if (this.distance <= 2000) {
          if (this.st <= this.rank) {
            this.x -= 10
          }
        } else {
          switch (this.competeTypr) {
            case 1:
              if (this.x <= wt * 3.5) {
                this.x += 10
              }
              break
            case 2:
              if (this.x <= wt * 3.5) {
                this.x += 15
              }
              break
            case 3:
              if (this.x <= wt * 3.5) {
                this.x += 5
              }
              break
            case 4:
              if (this.x <= wt * 3.5) {
                this.x += 5
              }
              break
          }
        }
      }
      if (this.x <= 20) {
        // 停止迴圈
        clearInterval(this.carLoop)
        this.stop = true
      }
    },
    // 繪圖-車子
    drawingBB () {
      // 倍數
      // const enlarge = 1
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // 車體
      // this.context.fillStyle = 'rgb(200, 150, 0)'
      this.context.fillStyle = this.colour
      this.context.beginPath()
      this.context.moveTo(this.x + 0, this.y + 10)
      this.context.lineTo(this.x + 20, this.y + 10)
      this.context.lineTo(this.x + 30, this.y)
      this.context.lineTo(this.x + 60, this.y)
      this.context.lineTo(this.x + 70, this.y + 10)
      this.context.lineTo(this.x + 80, this.y + 10)
      this.context.lineTo(this.x + 80, this.y + 20)
      this.context.lineTo(this.x + 0, this.y + 20)
      this.context.lineTo(this.x + 0, this.y + 10)
      this.context.closePath()
      this.context.fill()
      // 前輪
      this.context.fillStyle = '#c0c0c0'
      this.context.beginPath()
      this.context.arc(this.x + 20, this.y + 20, 8, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()
      // 後輪
      this.context.beginPath()
      this.context.arc(this.x + 70, this.y + 20, 8, 0, Math.PI * 2, true)
      this.context.closePath()
      this.context.stroke()
      this.context.fill()
      // 車號
      this.context.font = '12px serif'
      this.context.strokeText(this.no, this.x + 40, this.y + 15)
      // 移動
      if (this.x > 10) {
        this.x -= 10
      } else {
        console.log(this.x)
        // 停止迴圈
        clearInterval(this.carLoop)
        this.stop = true
      }
    }
  },
  props: [
    // 車號
    'no',
    // 名次
    'st'
  ],
  computed: {
    // 寬度(像數)
    widthXp: {
      get () {
        return this.$store.getters['Racing/getWidthPx']
      }
    },
    // 高度(像數)
    heightXp: {
      get () {
        return this.$store.getters['Racing/getHeightPx']
      }
    },
    // 寬度
    width: {
      get () {
        return this.$store.getters['Racing/getWidth']
      }
    },
    // 高度
    height: {
      get () {
        return this.$store.getters['Racing/getHeight']
      }
    },
    // 速度
    speed: {
      get () {
        return this.$store.getters['Racing/getSpeed']
      }
    },
    // 距離
    distance: {
      get () {
        return this.$store.getters['Racing/getDistance']
      }
    },
    // 順位
    rank: {
      get () {
        return this.$store.getters['Racing/getRank']
      },
      set (val) {
        this.$store.commit('Racing/setRank', val)
      }
    },
    // 停止
    stop: {
      get () {
        return this.$store.getters['Racing/getStop']
      },
      set (val) {
        this.$store.commit('Racing/setStop', val)
      }
    }
  },
  watch: {
    distance (newVal, oldVal) {
      if (newVal <= 3000) {
        this.endStatus = true
      }
    },
    stop (newVal, oldVal) {
      if (newVal === true) {
        clearInterval(this.carLoop)
      }
    }
  },
  data () {
    return {
      // 運作狀態
      isRunning: false,
      // 汽車圖
      imgCar1: imgCar1,
      imgCar2: imgCar2,
      imgCar3: imgCar3,
      imgCar4: imgCar4,
      imgCar5: imgCar5,
      imgCar6: imgCar6,
      imgCar7: imgCar7,
      imgCar8: imgCar8,
      imgCar9: imgCar9,
      imgCar10: imgCar10,
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      // 畫筆位置
      x: 1000,
      y: 10,
      // 迴圈
      carLoop: null,
      // 較勁狀態
      competeStatus: false,
      // 較勁倒數
      competeCount: 30,
      // 較勁動作(0不變,1前進到一半,2前進到底,3後退一半,4後退到底,10未賦予動作)
      competeTypr: 10,
      // 衝終點
      endStatus: false,
      config: {}
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {
    // this.ready()
  },
  beforeUpdate () {},
  updated () {
    this.ready()
  },
  beforeDestroy () {
    clearInterval(this.carLoop)
  },
  destroyed () {}
}
</script>
