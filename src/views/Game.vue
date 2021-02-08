<template>
  <div class="game">
    <HtmlButton/>
  </div>
</template>

<script>
import HtmlButton from '@/components/control/Button.vue'
export default {
  name: 'Game',
  components: {
    HtmlButton
  },
  data () {
    return {
      menuVisible: false
    }
  }
}
</script>

<style lang="scss">
.game {
  width: 40%;
  margin: 0px auto;
}
</style>
