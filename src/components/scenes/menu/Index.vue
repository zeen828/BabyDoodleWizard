<template>
  <div>
    <Background />
    <Option />
  </div>
</template>

<script>
import Background from '@/components/scenes/menu/Background.vue'
import Option from '@/components/scenes/menu/Option.vue'
export default {
  name: 'scenesMenu',
  components: {
    Background,
    Option
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
  updated () {
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>
