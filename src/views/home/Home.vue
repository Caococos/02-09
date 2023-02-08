<template>
  <div class="home">
    <!-- 开场动画 -->
    <s-animation></s-animation>
    <div class="content">
      <search class="search"></search>
      <img src="https://cdn.jsdelivr.net/gh/caococos/resource-set@master/img/lulus.jpg" alt="Zhihaot1" />
      <span>lulu</span>
      <music-control class="music-control"></music-control>
    </div>
    <!-- 音乐播放器 -->
    <div class="music-container">
      <!-- 音乐绳 拉取互动 -->
      <div class="music-rope iconfont icon-icon_MyMusicBook"></div>
    </div>
    <!-- 奔跑girl动画 -->
    <!-- <girl-ani class="girl-ani"></girl-ani> -->
    <!-- 版权信息 -->
    <zh-footer class="version-footer"></zh-footer>
  </div>
</template>

<script>
import FontSwiper from 'views/home/childComps/FontSwiper'
import ColorfulBall from 'components/common/ColorfulBall'
import GirlAni from 'components/common/GirlAni'
import ZhFooter from 'components/common/ZhFooter'
import Search from 'components/common/Search'
import Clock from 'components/common/Clock'
import Logo from 'views/home/childComps/Logo'
import Note from 'views/home/childComps/Note'
import SAnimation from 'views/home/childComps/SAnimation'
import MusicControl from 'components/common/MusicControl'

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
.search-container {
  display: flex;
  justify-content: center;
}
.content {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
}
.content img {
  margin: 40px 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.content span {
  margin-bottom: 40px;
  color: #fff;
}
/* 移动端 */
@media only screen and (max-width: 1280px) {
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
