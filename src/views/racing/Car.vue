<template>
  <div class="car">
    <div class="canvas-wrapper" ref="stage">
      <Background />
      <End />
      <RacingCar :no="1" :st="9" :colour="'#FF9797'" :speed="10 + 3 * 1" :width="width" :height="height" />
      <RacingCar :no="2" :st="4" :colour="'#66B3FF'" :speed="10 + 3 * 2" :width="width" :height="height" />
      <RacingCar :no="3" :st="2" :colour="'#7AFEC6'" :speed="10 + 3 * 3" :width="width" :height="height" />
      <RacingCar :no="4" :st="5" :colour="'#FF9224'" :speed="10 + 3 * 4" :width="width" :height="height" />
      <RacingCar :no="5" :st="8" :colour="'#A6A6D2'" :speed="10 + 3 * 5" :width="width" :height="height" />
      <RacingCar :no="6" :st="10" :colour="'#AE57A4'" :speed="10 + 3 * 6" :width="width" :height="height" />
      <RacingCar :no="7" :st="6" :colour="'#FFFF37'" :speed="10 + 3 * 7" :width="width" :height="height" />
      <RacingCar :no="8" :st="1" :colour="'#B87070'" :speed="10 + 3 * 8" :width="width" :height="height" />
      <RacingCar :no="9" :st="3" :colour="'#00ff00'" :speed="10 + 3 * 9" :width="width" :height="height" />
      <RacingCar :no="10" :st="7" :colour="'#0000ff'" :speed="10 + 3 * 10" :width="width" :height="height" />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">{{ $t('racing.ranking') }}</span>
      </div>
      <input type="text" class="form-control" v-model="no" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <button type="button" class="btn btn-success" @click="gameStart()">{{ $t('racing.start') }}</button>
    <button type="button" class="btn btn-warning" @click="gameReset()">{{ $t('racing.reset') }}</button>
    <button type="button" class="btn btn-danger" @click="gameStop()">{{ $t('racing.stop') }}</button>
  </div>
</template>

<script>
import Background from '@/components/scenes/track/Background.vue'
import End from '@/components/scenes/track/End.vue'
import RacingCar from '@/components/racing/Car.vue'
export default {
  name: 'Car',
  components: {
    Background,
    End,
    RacingCar
  },
  methods: {
    ready () {
      const that = this
      // 擷取舞台的大小
      that.width = window.getComputedStyle(that.$refs.stage).width
      that.height = window.getComputedStyle(that.$refs.stage).height
      // 設定畫布
      const formData = {
        width: that.width,
        height: that.height
      }
      that.$store.dispatch('Racing/setCanvas', formData)
      console.log('北京賽車', that.width, that.height)
    },
    setRanking () {
      const that = this
      // const no = '01,02,03,04,05,06,07,08,09,10'
      // 切字
      const noArr = that.no.split(',')
      noArr.forEach(function (item, index, array) {
        console.log(item, index, array)
        switch (item) {
          case '1':
          case '01':
            that.$store.commit('Racing/setCar1St', index + 1)
            break
          case '2':
          case '02':
            that.$store.commit('Racing/setCar2St', index + 1)
            break
          case '3':
          case '03':
            that.$store.commit('Racing/setCar3St', index + 1)
            break
          case '4':
          case '04':
            that.$store.commit('Racing/setCar4St', index + 1)
            break
          case '5':
          case '05':
            that.$store.commit('Racing/setCar5St', index + 1)
            break
          case '6':
          case '06':
            that.$store.commit('Racing/setCar6St', index + 1)
            break
          case '7':
          case '07':
            that.$store.commit('Racing/setCar7St', index + 1)
            break
          case '8':
          case '08':
            that.$store.commit('Racing/setCar8St', index + 1)
            break
          case '9':
          case '09':
            that.$store.commit('Racing/setCar9St', index + 1)
            break
          case '10':
            that.$store.commit('Racing/setCar10St', index + 1)
            break
        }
      })
    },
    gameStart () {
      const that = this
      that.setRanking()
      that.$store.dispatch('Racing/setCanvasStart')
    },
    gameReset () {
      var that = this
      that.setRanking()
      that.$store.dispatch('Racing/setCanvasReset')
    },
    gameStop () {
      var that = this
      that.$store.dispatch('Racing/setCanvasStop')
    }
  },
  data () {
    return {
      scenes: true,
      racing: true,
      no: '01,03,05,07,09,02,04,06,08,10',
      width: 0,
      height: 0
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

<style lang="scss">
.canvas-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid black;
  margin:0px auto;
}
.canvas {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
