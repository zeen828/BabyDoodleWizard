<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <ul class="nav" v-for="(val, index) in list" :key="index">
      <li class="nav-item">
        <router-link :to="val.path">{{$t(val.title)}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    list: {
      type: Array,
      default: function () {
        return [
          { title: 'menu.home', path: '/' },
          { title: 'menu.game', path: '/game' },
          { title: 'test', path: '/' }
        ]
      }
    }
  }
}
</script>
