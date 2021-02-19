<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">{{$t('menu.home')}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(val, index) in list" :key="index">
            <a class="nav-link" :href="val.path">{{$t(val.title)}}</a>
          </li>
        </ul>
      </div>
    </nav>
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
          { title: 'menu.menu', path: '/menu' },
          { title: 'menu.game', path: '/game' },
          { title: 'menu.car', path: '/car' },
          { title: 'test', path: '/' }
        ]
      }
    }
  }
}
</script>
