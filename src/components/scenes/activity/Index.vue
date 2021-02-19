<template>
  <Background/>
</template>

<script>
import Background from '@/components/scenes/menu/Background.vue'
export default {
  name: 'scenesActivity',
  components: {
    Background
  },
  methods: {
    ready () {
      console.log('場景-活動對戰')
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
