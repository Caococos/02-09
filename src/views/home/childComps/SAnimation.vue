<template>
  <div class="s-animation" @click="enter" v-show="open">
    <ul class="stacks">
      <li :style="{ transform: isShow ? 'translateX(0)' : 'translateX(-50vw)' }"></li>
      <li :style="{ transform: isShow ? 'translateX(0)' : 'translateX(50vw)' }"></li>
    </ul>
    <transition name="fade">
      <div class="text-container" v-show="isShow">
        <h1 id="h1" data-h1 class="one">
          <span v-for="(item, index) in msg1" :key="index">{{ item }}</span>
        </h1>
        <h1 id="h1" class="two">
          <span v-for="(item, index) in msg2" :key="index">{{ item }}</span>
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 's-animation',
  data() {
    return {
      msg1: '有个少女经过你的眼前',
      msg2: '带着你的视线 跑进了夏天',
      isShow: true,
      open: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.typing()
    })
  },
  methods: {
    enter() {
      this.isShow = false
      setTimeout(() => {
        this.open = false
      }, 1000)
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
    }
  }
}
</script>

<style scoped>
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
    background: url(~assets/img/bg2.jpg) no-repeat;
    background-size: cover;
  }
  ul.stacks li:nth-child(2)::after {
    left: -50vw;
  }

  #h1 {
    position: relative;
    font-size: 96px;
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
    height: 96px;
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
</style>
