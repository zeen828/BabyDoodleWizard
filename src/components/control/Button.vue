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
    previous: function (e) {
      // check key code
      // console.log(e)
      switch (e.key) {
        case 'ArrowUp':
          console.log('上')
          break
        case 'ArrowDown':
          console.log('下')
          break
        case 'ArrowLeft':
          console.log('左')
          break
        case 'ArrowRight':
          console.log('右')
          break
        case 'z':
        case 'Z':
          console.log('紅')
          break
        case 'm':
        case 'M':
          console.log('藍')
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
    window.addEventListener('keyup', this.previous, false)
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
    window.removeEventListener('keyup', this.previous, false)
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
