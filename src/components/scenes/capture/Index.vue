<template>
</template>

<script>
export default {
  name: 'scenesCapture',
  methods: {
    ready () {
      console.log('場景-立即捕獲')
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
