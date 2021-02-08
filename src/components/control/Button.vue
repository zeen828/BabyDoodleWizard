<template>
  <div>
    <div class="button md-layout md-gutter">
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item"><md-avatar class="md-avatar-icon">上</md-avatar></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
    </div>
    <div class="button md-layout md-gutter">
      <div class="md-layout-item">
        <md-avatar class="md-avatar-icon md-primary">Z</md-avatar>
      </div>
      <div class="md-layout-item"><md-avatar class="md-avatar-icon">左</md-avatar></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item"><md-avatar class="md-avatar-icon">右</md-avatar></div>
      <div class="md-layout-item">
        <md-avatar class="md-avatar-icon md-accent">M</md-avatar>
      </div>
    </div>
    <div class="button md-layout md-gutter">
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item">
        <md-avatar class="md-avatar-icon">下</md-avatar>
      </div>
      <div class="md-layout-item"></div>
      <div class="md-layout-item"></div>
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
      console.log(e)
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
          console.log('zZ')
          break
        case 'm':
        case 'M':
          console.log('mM')
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
