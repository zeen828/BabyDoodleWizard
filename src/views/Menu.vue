<template>
  <div class="menu">
    <div class="canvas-wrapper">
      <Background/>
      <Option/>
    </div>
    <ControlButton/>
  </div>
</template>

<script>
import Background from '@/components/scenes/menu/Background.vue'
import Option from '@/components/scenes/menu/Option.vue'
import ControlButton from '@/components/control/Button.vue'
export default {
  name: 'Game',
  components: {
    Background,
    Option,
    ControlButton
  },
  methods: {
    ready () {
    }
  },
  data () {
    return {}
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
  top: 0;
  left: 0;
  position: absolute;
}
</style>
