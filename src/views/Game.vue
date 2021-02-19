<template>
  <div class="game">
    <div class="canvas-wrapper">
      <ElvesMonkey/>
      <CaptureApple/>
      <CaptureBall/>
      <ControlRace/>
    </div>
    <ControlButton/>
  </div>
</template>

<script>
import ElvesMonkey from '@/components/elves/Monkey.vue'
import CaptureApple from '@/components/capture/Apple.vue'
import CaptureBall from '@/components/capture/Ball.vue'
// import TurnTable from '@/components/demo/TurnTable.vue'
import ControlRace from '@/components/control/Race.vue'
import ControlButton from '@/components/control/Button.vue'
export default {
  name: 'Game',
  components: {
    ElvesMonkey,
    CaptureApple,
    CaptureBall,
    // TurnTable,
    ControlRace,
    ControlButton
  },
  methods: {
    ready () {
    }
  },
  data () {
    return {
      menuVisible: false
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
  width: 600px;
  height: 600px;
  border: 1px solid black;
}
.canvas {
  width: 100%;
  height: 100%;
}
#canvasRace {
  // background-color: #058;
  top: 0;
  left: 0;
}
#elvesMonkey {
  // background-color: #058;
  top: 0;
  left: 0;
}
#canvasApple {
  // background-color: red;
  top: 0;
  left: 0;
}
.canvas {
  position: absolute;
}
</style>
