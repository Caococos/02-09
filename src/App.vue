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
    background-image: url("~assets/img/bg5.jpg");
  }
}
@media only screen and (min-width: 1280px) {
  body {
    background-image: url("~assets/img/bg1.jpg");
  }
}
body {
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}
</style>
