<template>
  <div class="s-animation" @click="enter" v-show="open">
    <ul class="stacks">
      <li :style="{ transform: showBg ? 'translateX(0)' : 'translateX(-50vw)' }"></li>
      <li :style="{ transform: showBg ? 'translateX(0)' : 'translateX(50vw)' }"></li>
    </ul>
    <!-- <transition name="fade">
      <div class="text-container" v-show="isShow">
        <h1 id="h1" data-h1 class="one">
          <span v-for="(item, index) in msg1" :key="index">{{ item }}</span>
        </h1>
        <h1 id="h1" class="two">
          <span v-for="(item, index) in msg2" :key="index">{{ item }}</span>
        </h1>
      </div>
    </transition> -->
    <div :data-spotlight="lightText" :class="['light-text', 'animate__animated', { animate__zoomOutUp: !showText }]">
      {{ lightText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 's-animation',
  data() {
    return {
      msg1: '',
      msg2: '',
      lightText: '',
      showBg: true,
      showText: true,
      open: true,
      currMonth: new Date().getMonth() + 1
    }
  },
  computed: {
    getSeason1() {
      const spring = [3, 4, 5]
      const summer = [6, 7, 8]
      const autumn = [9, 10, 11]
      const winner = [12, 1, 2]
      if (spring.includes(this.currMonth)) {
        return '请相信自己是很美好的存在'
      }
      if (summer.includes(this.currMonth)) {
        return '有个少女经过你的眼前'
      }
      if (autumn.includes(this.currMonth)) {
        return '下次，如果再有谁对你品头论足'
      }
      if (winner.includes(this.currMonth)) {
        return '愿你被这个世界温柔以待，心中装满爱'
      }
    },
    getSeason2() {
      const spring = [3, 4, 5]
      const summer = [6, 7, 8]
      const autumn = [9, 10, 11]
      const winner = [12, 1, 2]
      if (spring.includes(this.currMonth)) {
        return '不用怀疑这是宇宙独一无二的色彩'
      }
      if (summer.includes(this.currMonth)) {
        return '带着你的视线，跑进了夏天'
      }
      if (autumn.includes(this.currMonth)) {
        return '请你也勇敢怼回去'
      }
      if (winner.includes(this.currMonth)) {
        return '卸下所有防备，自由自在'
      }
    }
  },
  mounted() {
    const arr1 = [
      '请相信自己是很美好的存在',
      '有个少女经过你的眼前',
      '下次，如果再有谁对你品头论足',
      '愿你被这个世界温柔以待，心中装满爱'
    ]
    const arr2 = [
      '不用怀疑这是宇宙独一无二的色彩！',
      '带着你的视线，跑进了夏天~',
      '请你也勇敢怼回去！',
      '卸下所有防备，自由自在~'
    ]
    const lightArr = [
      '请相信自己是很美好的存在，不用怀疑这是宇宙独一无二的色彩！',
      '有个少女经过你的眼前，带着你的视线，跑进了夏天~',
      '下次，如果再有谁对你品头论足，请你也勇敢怼回去！',
      '愿你被这个世界温柔以待，心中装满爱，卸下所有防备，自由自在~'
    ]
    const num = this.randomNum(0, 3)
    this.msg1 = arr1[num]
    this.msg2 = arr2[num]
    this.lightText = lightArr[num]
    this.$nextTick(() => {
      this.typing()
    })
  },
  methods: {
    enter() {
      this.showText = false
      setTimeout(() => {
        this.showBg = false
      }, 900)
      setTimeout(() => {
        this.open = false
      }, 2000)
    },
    typing() {
      const h1 = document.querySelectorAll('#h1')[0]
      const h2 = document.querySelectorAll('#h1')[1]
      // h1.innerHTML = h1.textContent.replace(/\S/g, '<span>$&</span>')
      // h2.innerHTML = h2.textContent.replace(/\S/g, '<span>$&</span>')
      let delay = 0
      document.querySelectorAll('#h1 span').forEach((span, index) => {
        delay += 0.1
        if (index === 4 || index === 10 || index === 17) delay += 0.3
        span.style.setProperty('--delay', `${delay}s`)
      })
      h1.addEventListener('animationend', (e) => {
        if (e.target === document.querySelector('.one span:last-child')) {
          setTimeout(() => {
            h1.removeAttribute('data-h1')
            h2.setAttribute('data-h1', '')
          }, 300)
        }
      })
      h2.addEventListener('animationend', (e) => {
        if (e.target === document.querySelector('.two span:last-child')) {
          h2.classList.add('ended')
        }
      })
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
          break
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
          break
        default:
          return 0
          break
      }
    }
  }
}
</script>

<style scoped>
/* 公共样式 */
.s-animation {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* pc */
@media only screen and (min-width: 1280px) {
  .s-animation {
    /* background-color: rgb(233, 191, 191); */
    overflow: hidden;
    color: #2c3e50;
  }
  .stacks {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-size: cover;
  }
  ul.stacks li {
    position: relative;
    background-color: #ccc;
    flex: 1;
    overflow: hidden;
    transition: 1s transform ease-in-out;
  }
  li::after {
    content: '';
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    background-size: cover;
  }
  ul.stacks li:nth-child(2)::after {
    left: -50vw;
  }

  #h1 {
    position: relative;
    font-size: 75px;
    height: 109px;
    white-space: nowrap;
    overflow: hidden;
    font-family: 'Simsun';
    text-align: start;
  }
  .text-container {
    position: fixed;
  }
  .s-animation .text-container {
    padding: 0 80px;
    width: 100%;
  }
  .two {
    margin-left: calc(100vw - 1360px);
  }

  [data-h1]::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 3px;
    height: 93px;
    background-color: #2c3e50;
    border-radius: 2px;
    top: 2px;
  }

  #h1 span {
    /* 延迟预设值 */
    --delay: 10s;
    display: inline-block;
    overflow: hidden;
    width: 0;
    animation: 0.1s text-in ease-in-out forwards;
    animation-delay: var(--delay);
  }

  h1.ended::after {
    animation: 1.1s cursor steps(2, jump-none) infinite;
  }
  .light-text {
    position: relative;
    color: rgba(51, 51, 51, 0.3);
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    font-size: 3rem;
    letter-spacing: -0.3rem;
  }
  .light-text:after {
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    animation: spotlight 12s ease-in-out infinite;
    background-image: url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    background-clip: text;
  }
  @keyframes spotlight {
    0% {
      -webkit-clip-path: ellipse(100px 100px at 0% 50%);
      clip-path: ellipse(100px 100px at 0% 50%);
    }
    50% {
      -webkit-clip-path: ellipse(100px 100px at 100% 50%);
      clip-path: ellipse(100px 100px at 100% 50%);
    }
    100% {
      -webkit-clip-path: ellipse(100px 100px at 0% 50%);
      clip-path: ellipse(100px 100px at 0% 50%);
    }
  }
}
@keyframes text-in {
  from {
    width: 0;
  }
  to {
    width: 2ch;
  }
}

@keyframes cursor {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-leave-active {
  transition: opacity 0.75s;
}

.fade-leave-to {
  opacity: 0;
}
/* 移动端 */
@media only screen and (max-width: 1280px) {
  .s-animation {
    /* position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    background-image: url(~assets/img/bg6.jpg);
    color: #130f40;
  }

  #h1 {
    padding-left: 40px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    overflow: hidden;
    font-family: 'Simsun';
    font-size: 7vw;
  }

  .one {
    top: 60%;
  }

  .two {
    top: 75%;
  }

  [data-h1]::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 4px;
    height: 50px;
    background-color: #130f40;
    border-radius: 2px;
    top: 2px;
  }

  #h1 span {
    /* 延迟预设值 */
    --delay: 10s;
    display: inline-block;
    overflow: hidden;
    width: 0;
    animation: 0.1s text-in ease-in-out forwards;
    animation-delay: var(--delay);
  }

  h1.ended::after {
    animation: 1.1s cursor steps(2, jump-none) infinite;
  }
}
</style>
