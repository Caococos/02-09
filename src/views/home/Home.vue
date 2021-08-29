<template>
  <div class='home'>
    <!-- 开场动画 -->
    <s-animation></s-animation>
    <!-- 轮播字 -->
    <font-swiper class="font-swiper"></font-swiper>
    <!-- 右上角的logo和note区域 -->
    <div class="right">
      <logo class="logo"></logo>
      <note class='note'></note>
    </div>
    <!-- 搜索框 -->
    <div class="absolute-search">
      <transition name="fade">
        <search class="search" v-show="!isShow"></search>
      </transition>
    </div>
    <!-- 右下角的时钟 -->
    <clock class="clock"></clock>
    <!-- 全局的鼠标颜色气泡 -->
    <colorful-ball></colorful-ball>
    <!-- 音乐播放器 -->
    <div class="absolute-music">
      <transition name="fade">
        <music-control v-show="isShow" class="music-control"></music-control>
      </transition>
    </div>

    <!-- 音乐显示控制 -->
    <div :class="['music-show', {'music-high': isShow}]" @click="isShow = !isShow">
      <i class="iconfont icon-icon_MyMusicBook"></i>
    </div>
    <!-- 奔跑girl动画 -->
    <girl-ani class="girl-ani"></girl-ani>
    <!-- 版权信息 -->
    <zh-footer class="version-footer"></zh-footer>
  </div>
</template>

<script>
import FontSwiper from 'views/home/childComps/FontSwiper';
import ColorfulBall from 'components/common/ColorfulBall';
import GirlAni from 'components/common/GirlAni';
import ZhFooter from 'components/common/ZhFooter';
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
    GirlAni,
    Search,
    ZhFooter,
    Clock,
    Logo,
    Note,
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
  .version-footer {
    color: #341f97;
  }
  .absolute-search,
  .absolute-music {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
  }
  .absolute-search {
    bottom: 140px;
  }
}
/* 公共样式 */
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
</style>