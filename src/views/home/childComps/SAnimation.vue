<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-14 20:59:44
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-15 17:10:38
-->
<template>
  <transition name="fade">
    <div class='s-animation' v-show="isShow" @click="enter">
      <h1 id="h1" data-h1 class="one">
        <span v-for="(item, index) in msg1" :key="index">{{item}}</span>
      </h1>
      <h1 id="h1" class="two">
        <span v-for="(item, index) in msg2" :key="index">{{item}}</span>
      </h1>
    </div>
  </transition>

</template>

<script>
export default {
  name: 's-animation',
  data() {
    return {
      msg1: '有个少女经过你的眼前',
      msg2: '带着你的视线 跑进了夏天',
      isShow: true
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
      h1.addEventListener('animationend', e => {
        if (e.target === document.querySelector('.one span:last-child')) {
          setTimeout(() => {
            h1.removeAttribute('data-h1')
            h2.setAttribute('data-h1', '')
          }, 300)
        }
      })
      h2.addEventListener('animationend', e => {
        if (e.target === document.querySelector('.two span:last-child')) {
          h2.classList.add('ended')
        }
      })
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1280px) {
  .s-animation {
    /* background-color: rgb(233, 191, 191); */
    background-image: url(~assets/img/bg2.jpg);
    background-size: cover;
    overflow: hidden;
    color: #2c3e50;
  }

  #h1 {
    position: relative;
    top: 50%;
    left: 50%;
    font-size: 6rem;
    padding: 0;
    height: 109px;
    white-space: nowrap;
    overflow: hidden;
    font-family: "Simsun";
  }

  .one {
    transform: translate(-50%, -100%);
    margin-left: 100px;
  }

  .two {
    transform: translate(-50%, -50%);
    margin-left: 150px;
  }

  [data-h1]::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 6rem;
    background-color: #2c3e50;
    border-radius: 2px;
    top: 6px;
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
  transition: opacity 1s;
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
    background-image: url(~assets/img/bg3.jpg);
    color: #dff9fb;
  }

  #h1 {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    overflow: hidden;
    font-family: "Simsun";
  }

  .one {
    top: 60%;
  }

  .two {
    top: 70%;
  }

  [data-h1]::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 2px;
    height: 36.8px;
    background-color: #dff9fb;
    border-radius: 2px;
    /* top: 6px; */
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
}

/* 简单版打字动画 */
/* .one {
  width: 0;
  transform: translate(-50%, -200%);
  animation: 4s typing1 steps(11, jump-none) forwards;
}

.two {
  width: 0;
  transform: translate(-50%, -50%);
  animation: 4s typing2 steps(12, jump-none) forwards;
  animation-delay: 4s;
}

@keyframes typing1 {
  from {
    width: 2ch;
  }
  to {
    width: 20ch;
  }
}

@keyframes typing2 {
  from {
    width: 2ch;
  }
  to {
    width: 24ch;
  }
} */
</style>