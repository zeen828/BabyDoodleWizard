<template>
  <div class="button">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <div class=""></div>
        <div class=""></div>
        <div class="bt alert-warning">{{$t('button.top')}}</div>
        <div class=""></div>
        <div class=""></div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="bt alert-danger">{{$t('button.z')}}</div>
        <div class="bt alert-warning">{{$t('button.left')}}</div>
        <div class="bt"></div>
        <div class="bt alert-warning">{{$t('button.right')}}</div>
        <div class="bt alert-primary">{{$t('button.m')}}</div>
      </div>
      <div class="d-flex justify-content-center">
        <div class=""></div>
        <div class=""></div>
        <div class="bt alert-warning">{{$t('button.bottom')}}</div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    ready () {
      console.log('Game.vue > ready()')
    },
    // 控制
    control: function (e) {
      // check key code
      // console.log(e)
      console.log('按下')
      switch (e.key) {
        case 'ArrowUp':
          console.log('上')
          this.$store.commit('setUp', true)
          break
        case 'ArrowDown':
          console.log('下')
          this.$store.commit('setDown', true)
          break
        case 'ArrowLeft':
          console.log('左')
          this.$store.commit('setLeft', true)
          break
        case 'ArrowRight':
          console.log('右')
          this.$store.commit('setRight', true)
          break
        case 'z':
        case 'Z':
          console.log('紅')
          this.$store.commit('setZ', true)
          break
        case 'm':
        case 'M':
          console.log('藍')
          this.$store.commit('setM', true)
          break
        default:
          break
      }
    },
    // 控制清除
    controlClear: function (e) {
      // check key code
      // console.log(e)
      console.log('放開')
      switch (e.key) {
        case 'ArrowUp':
          console.log('上')
          this.$store.commit('setUp', false)
          break
        case 'ArrowDown':
          console.log('下')
          this.$store.commit('setDown', false)
          break
        case 'ArrowLeft':
          console.log('左')
          this.$store.commit('setLeft', false)
          break
        case 'ArrowRight':
          console.log('右')
          this.$store.commit('setRight', false)
          break
        case 'z':
        case 'Z':
          console.log('紅')
          this.$store.commit('setZ', false)
          break
        case 'm':
        case 'M':
          console.log('藍')
          this.$store.commit('setM', false)
          break
        default:
          break
      }
    },
    add () {
      console.log('add')
    }
  },
  data () {
    return {
      input: '',
      todo: [],
      list: [
        { title: 'bet.menu.gamelist', path: '/bet/game/list' },
        { title: 'test', path: '#' }
      ]
    }
  },
  beforeCreate () {},
  created () {
    // 建立事件
    window.addEventListener('keydown', this.control, false)
    window.addEventListener('keyup', this.controlClear, false)
  },
  beforeMount () {},
  mounted () {
    console.log('bet/user/Login.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {
    // 清除事件
    window.removeEventListener('keydown', this.control, false)
    window.removeEventListener('keyup', this.controlClear, false)
  },
  destroyed () {}
}
</script>

<style lang="scss">
.bt {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
}
</style>
