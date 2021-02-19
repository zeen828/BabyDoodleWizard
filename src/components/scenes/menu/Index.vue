<template>
  <Background/>
</template>

<script>
import Background from '@/components/scenes/menu/Background.vue'
export default {
  name: 'scenesMenu',
  components: {
    Background
  },
  methods: {
    ready () {
      console.log('場景-首頁目錄')
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
