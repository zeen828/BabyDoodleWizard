<template>
  <div id="app">
    <HtmlHeader msg="我是Header"/>
    <router-view/>
    <HtmlFooter msg="我是Footer"/>
  </div>
</template>

<script>
import HtmlHeader from '@/components/html/Header.vue'
import HtmlFooter from '@/components/html/Footer.vue'

export default {
  name: 'App',
  components: {
    HtmlHeader,
    HtmlFooter
  },
  computed: {},
  methods: {
    ready () {
      console.log('app.vue > ready')
    }
  },
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // console.log('App.vue > mounted ()')
    // console.log('查看vuex:', this.$store)
    // console.log('查看環境設定檔:', process.env)
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
