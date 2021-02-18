<template>
  <div class="game">
    <CaptureApple/>
    <HtmlButton/>
  </div>
</template>

<script>
import HtmlButton from '@/components/control/Button.vue'
// import ElvesMonkey from '@/components/elves/Monkey.vue'
import CaptureApple from '@/components/capture/Apple.vue'
// import TurnTable from '@/components/demo/TurnTable.vue'
export default {
  name: 'Game',
  components: {
    HtmlButton,
    // ElvesMonkey,
    CaptureApple
    // TurnTable
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
</style>
