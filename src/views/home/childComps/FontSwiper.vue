<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 22:34:44
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 13:34:48
-->
<template>
  <div class="font-swiper">
    <h2>When The 0209, And You Are
      <div class="mask">
        <span data-show>The Setting Sun In Quiet River In Afternoon</span>
        <span>Blooming flowers in the valley after rain</span>
        <span>The moon in a clear sky</span>
        <span>My Sunshine</span>
      </div>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'FontSwiper',
  mounted() {
    this.move()
  },
  methods: {
    move() {
      setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('span:first-child') //拿到正在show的下一个span或者第一个span
        const up = document.querySelector('span[data-up]')

        if (up) {
          up.removeAttribute('data-up')
        }
        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')

        next.setAttribute('data-show', '')
      }, 3000)
    }
  }
}
</script>
<style scoped>
.font-swiper {
  padding: 15px;
}
h2 {
  width: 980px;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #a29bfe;
}

.mask {
  margin-top: var(--offset);
  height: 60px;
  position: relative;
  overflow: hidden;
}

.mask span {
  display: block;
  padding: var(--offset) 0;
  margin-top: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 47px;
  font-size: 50px;

  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}

.mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s transform ease-in-out;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #1eb7dd 50%, #1689be);
}

.mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #1cd692 50%, #16ad58);
}

.mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}

.mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #dd557e 50%, #ce506b);
}
</style>
