<template>
  <div class="car">
    <div class="canvas-wrapper" ref="stage">
      <ScenesCar />
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
  </div>
</template>

<script>
import ScenesCar from '@/components/scenes/track/Index.vue'
import RacingCar from '@/components/racing/Car.vue'
export default {
  name: 'Car',
  components: {
    ScenesCar,
    RacingCar
  },
  methods: {
    ready () {
      // 擷取舞台的大小
      this.width = window.getComputedStyle(this.$refs.stage).width
      this.height = window.getComputedStyle(this.$refs.stage).height
      // 設定畫布
      const formData = {
        width: this.width,
        height: this.height
      }
      this.$store.dispatch('Racing/setCanvas', formData)
      console.log('北京賽車', this.width, this.height)
    }
  },
  data () {
    return {
      scenes: true,
      racing: true,
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
}
#scenesTrackBackground {
  // background-color: #058;
  top: 0;
  left: 0;
}
.canvasRacingCar {
  // background-color: #058;
  top: 0;
  left: 0;
}
.canvas {
  position: absolute;
}
</style>
