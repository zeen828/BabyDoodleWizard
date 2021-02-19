<template>
  <div class="car">
    <div class="canvas-wrapper">
      <ScenesCar :if="scenes" />
    </div>
  </div>
</template>

<script>
import ScenesCar from '@/components/scenes/track/Index.vue'
export default {
  name: 'Car',
  components: {
    ScenesCar
  },
  methods: {
    ready () {
    }
  },
  data () {
    return {
      scenes: true
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
