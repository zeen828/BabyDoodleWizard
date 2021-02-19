<template>
  <Background/>
</template>

<script>
import Background from '@/components/scenes/menu/Background.vue'
export default {
  name: 'scenesFight',
  components: {
    Background
  },
  methods: {
    ready () {
      console.log('場景-對戰捕獲')
    }
  },
  data () {
    return {
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
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
