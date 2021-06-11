<template>
  <div class="home">
    <h2>0209 is your brithday, so
      <div class="mask">
        <span data-show>Happy birthday!</span>
        <span>С днем рождения!</span>
        <span>생일 축하합니다!</span>
        <span>誕生日おめでと!</span>
      </div>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    // this.move()
  },
  methods: {
    move() {
      setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('span:first-child')
        const up = document.querySelector('span[data-up]')

        if (up) {
          up.removeAttribute('data-up')
        }
        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')

        next.setAttribute('data-show', '')
      }, 2000)
    }
  }
}
</script>
<style scoped>
h2 {
  width: 980px;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #1d1d1f;
}

.mask {
  margin-top: var(--offset);
  height: 106px;
  position: relative;
  /* overflow: hidden; */
}

.mask span {
  border: 1px solid #000;
  display: block;
  padding-top: var(--offset);
  padding-bottom: var(--offset);
  box-sizing: border-box;
  position: absolute;
  top: 100px;

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
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}

.mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}

.mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}

.mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
</style>
