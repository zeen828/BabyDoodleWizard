<template>
  <div class="menu">
    <div class="canvas-wrapper">
      <ScenesMenu :if="scenes" />
    </div>
  </div>
</template>

<script>
import ScenesMenu from '@/components/scenes/menu/Index.vue'
export default {
  name: 'Game',
  components: {
    ScenesMenu
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
  width: 600px;
  height: 600px;
  border: 1px solid black;
  margin:0px auto;
}
.canvas {
  width: 100%;
  height: 100%;
}
#scenesMenuBackground {
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
