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
    <font-swiper class="font-swiper"></font-swiper>
    <div class="right">
      <logo class="logo"></logo>
      <note class='note'></note>
    </div>
    <sunshine class="sunshine"></sunshine>
    <transition name="fade">
      <search class="search" v-show="!isShow"></search>
    </transition>
    <clock class="clock"></clock>
    <colorful-ball></colorful-ball>
    <transition name="fade">
      <music-control v-show="isShow" class="music-control"></music-control>
    </transition>
    <!-- 音乐显示控制 -->
    <div :class="['music-show', {'music-high': isShow}]" @click="isShow = !isShow">
      <i class="iconfont icon-icon_MyMusicBook"></i>
    </div>
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
      isShow: false
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
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
/* Web端 */
@media only screen and (min-width: 1280px) {
  .logo {
    position: relative;
    top: -10px;
    left: 220px;
  }
  .girl-ani {
    position: absolute;
    bottom: 0;
    left: 35%;
    z-index: -10;
  }
  .music-control {
    margin-left: 20px;
    transform: translateY(150%);
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 40px 84px 0 10px;
    width: 370px;
  }
}
/* 移动端 */
@media only screen and (max-width: 1280px) {
  .sunshine {
    display: none;
  }
  .music-show {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 65%;
    left: 0;
    z-index: 10;
    width: 45px;
    height: 45px;
    border: 2px solid #0984e3;
    border-radius: 50%;
    color: #0984e3;
    transition: all 0.5s;
  }
  .icon-icon_MyMusicBook {
    font-size: 40px;
  }
  .girl-ani {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  .right {
    display: flex;
    flex-direction: column;
  }
  .logo {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .font-swiper {
    display: none;
  }
  .clock {
    display: none;
  }
  .music-high {
    border: none;
    background-color: #0984e3;
    color: #fff;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
}
</style>