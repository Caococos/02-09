<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:03:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 17:41:48
-->
<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from 'views/home/Home';
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import "~assets/font/iconfont.css";
@media only screen and (max-width: 1280px) {
  body {
    background-image: url("~assets/img/bg4.jpg");
  }
}
@media only screen and (min-width: 1280px) {
  body {
    background-image: url("~assets/img/bg1.jpg");
  }
}
body {
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
