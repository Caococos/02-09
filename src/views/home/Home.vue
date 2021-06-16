<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:03:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 18:34:55
-->
<template>
  <div class='home'>
    <s-animation></s-animation>
    <font-swiper></font-swiper>
    <div class="right">
      <logo class="logo"></logo>
      <note class='note'></note>
    </div>
    <sunshine></sunshine>
    <search class="search"></search>
    <clock class="clock"></clock>
    <colorful-ball></colorful-ball>
    <music-control class="music-control"></music-control>
    <girl-ani class="girl-ani"></girl-ani>
    <footer-zhihaot1></footer-zhihaot1>
  </div>
</template>

<script>
import FontSwiper from 'views/home/childComps/FontSwiper';
import ColorfulBall from 'components/common/ColorfulBall';
import Sunshine from 'views/home/childComps/Sunshine';
import GirlAni from 'components/common/GirlAni';
import Footer from 'components/common/Footer';
import Search from 'components/common/Search';
import Clock from 'components/common/Clock';
import Logo from 'views/home/childComps/Logo';
import Note from 'views/home/childComps/Note';
import SAnimation from 'views/home/childComps/SAnimation';
import MusicControl from 'components/common/MusicControl';



export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    MusicControl,
    ColorfulBall,
    SAnimation,
    FontSwiper,
    Sunshine,
    GirlAni,
    Search,
    'footerZhihaot1': Footer,
    Clock,
    Logo,
    Note
  }
}
</script>

<style scoped>
.right {
  position: absolute;
  top: 0;
  right: 0;
  margin: 40px 84px 0 10px;
  width: 370px;
}

.logo {
  position: relative;
  top: -10px;
  left: 220px;
}

.search {
  position: absolute;
  margin: 30px 0 0 20px;
}

.note {
  margin-top: 25px;
}

.clock {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.music-control {
  margin-left: 20px;
  transform: translateY(150%);
}

.girl-ani {
  position: absolute;
  bottom: 0;
  left: 35%;
  z-index: -10;
}
</style>