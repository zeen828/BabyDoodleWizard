<template>
  <div class="container">

    <div class="form-row">
      <div class="form-group col-4">
        <label for="color">花色</label>
        <select id="color" class="form-control" v-model="startColor">
          <option v-for="(item, index) in colors" v-bind:key="index" v-bind:value="index">
            {{ item }} - {{ index }}
          </option>
        </select>
      </div>
      <div class="form-group col-4">
        <label for="digital">牌面</label>
        <select id="digital" class="form-control" v-model="startDigital">
          <option v-for="(item, index) in digitals" v-bind:key="index" v-bind:value="index">
            {{ item }} - {{ index }}
          </option>
        </select>
      </div>
      <div class="form-group col-4">
        <label for="number">張數</label>
        <input type="email" id="number" class="form-control" v-model="startNumber" />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        {{ colors[startColor] }} {{ digitals[startDigital] }} 的第 {{ startNumber }} 張 == {{ colors[aimsColor] }} {{ digitals[aimsDigital] }}
      </div>
    </div>
    <div class="row text-center">
      <div class="col-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16">
          <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/>
        </svg>
      </div>
      <div class="col-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
        </svg>
      </div>
      <div class="col-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
          <path d="M2.45 7.4L7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/>
        </svg>
      </div>
      <div class="col-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16">
          <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayingCard',
  methods: {
    ready () {
    },
    test () {
      console.log('算牌')
      // start_color 開始花色
      // start_digital 開始牌面
      // number  張數
      this.aimsColor = (this.startNumber + this.startColor) % 4
      this.aimsDigital = (this.startNumber + this.startDigital) % 13
    }
  },
  data () {
    return {
      // 花色
      colors: {
        0: '黑桃',
        1: '紅心',
        2: '方塊',
        4: '梅花'
      },
      // 牌面
      digitals: {
        0: 'A',
        1: '4',
        2: '7',
        3: '10',
        4: 'K',
        5: '3',
        6: '6',
        7: '9',
        8: 'Q',
        9: '2',
        10: '5',
        11: '8',
        12: 'J'
      },
      // 選擇花色
      startColor: 0,
      // 選擇牌面
      startDigital: 0,
      // 選擇張數
      startNumber: 0,
      aimsColor: 0,
      aimsDigital: 0
    }
  },
  watch: {
    startColor (newVal, oldVal) {
      this.test()
    },
    startDigital (newVal, oldVal) {
      this.test()
    },
    startNumber (newVal, oldVal) {
      this.test()
    }
  },
  mounted () {
    this.ready()
  }
}
</script>
