<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-16 17:34:40
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 18:16:35
-->
<template>
  <div class='girl-animation'>
    <div class="girl"></div>
  </div>
</template>

<script>
export default {
  name: 'girl-animation',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.girl {
  width: 197px;
  height: 341px;
  animation: 2s girl infinite linear;
  transition: all 0.1s;
  opacity: 0;
}

@keyframes girl {
  0% {
    background-image: url("~assets/img/1.png");
  }
  6.6% {
    background-image: url("~assets/img/2.png");
    transform: translateX(10%);
  }
  13.2% {
    background-image: url("~assets/img/3.png");
    transform: translateX(20%);
  }
  19.8% {
    background-image: url("~assets/img/4.png");
    transform: translateX(30%);
  }
  26.4% {
    background-image: url("~assets/img/5.png");
    transform: translateX(40%);
  }
  33% {
    background-image: url("~assets/img/6.png");
    transform: translateX(50%);
  }
  39.6% {
    background-image: url("~assets/img/7.png");
    transform: translateX(60%);
    opacity: 1;
  }
  46.2% {
    background-image: url("~assets/img/8.png");
    transform: translateX(70%);
  }
  52.6% {
    background-image: url("~assets/img/1.png");
    transform: translateX(80%);
  }
  59.4% {
    background-image: url("~assets/img/2.png");
    transform: translateX(90%);
  }
  66% {
    background-image: url("~assets/img/3.png");
    transform: translateX(100%);
  }
  72.6% {
    background-image: url("~assets/img/4.png");
    transform: translateX(110%);
  }
  79.2% {
    background-image: url("~assets/img/5.png");
    transform: translateX(120%);
    opacity: 1;
  }
  85.8% {
    background-image: url("~assets/img/6.png");
    transform: translateX(130%);
  }
  92.4% {
    background-image: url("~assets/img/7.png");
    transform: translateX(140%);
  }
  100% {
    background-image: url("~assets/img/8.png");
    transform: translateX(150%);
    opacity: 0;
  }
}
</style>