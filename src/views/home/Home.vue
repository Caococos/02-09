<template>
  <div class="home" @click.capture="removeAnimation">
    <!-- 开场动画 -->
    <s-animation></s-animation>
    <div class="content" ref="contentRef">
      <music-control @play="showMusic" class="music-control animate__animated"></music-control>
      <img
        class="animate__animated"
        src="https://cdn.jsdelivr.net/gh/caococos/resource-set@master/img/lulus.jpg"
        alt="Zhihaot1"
      />
      <span class="animate__animated">lulu / 扎着丸子头的牛栏山小仙女</span>
      <search @click="clickSearch" class="search animate__animated"></search>
    </div>
    <!-- 音乐播放器 -->
    <!-- <div class="music-container">
      <div class="music-rope iconfont icon-icon_MyMusicBook"></div>
    </div> -->
    <!-- 奔跑girl动画 -->
    <!-- <girl-ani class="girl-ani"></girl-ani> -->
    <!-- 版权信息 -->

    <music-bounce
      :class="['music-bounce', 'animate__animated', { animate__zoomInDown: isPlay }, { animate__zoomOut: !isPlay }]"
    />
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
import MusicBounce from 'components/common/MusicBounce'

export default {
  name: 'home',
  data() {
    return {
      isShow: false,
      clickNum: 0,
      isPlay: false
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
    MusicBounce
  },
  methods: {
    clickSearch() {
      this.clickNum = 2
      const refArr = this.$refs.contentRef.children
      for (let index = 0; index < refArr.length; index++) {
        if (index !== 3) {
          const element = refArr[index]
          element.classList.add('animate__fadeOutUp')
        }
      }
    },
    removeAnimation() {
      const refArr = this.$refs.contentRef.children
      for (let index = 0; index < refArr.length; index++) {
        const element = refArr[index]
        element.classList.remove('animate__fadeInUp')
        element.classList.remove('animate__fadeInDown')
        element.classList.remove('animate__fadeOutUp')
        element.classList.remove('animate__fadeOutDown')
        if (this.clickNum === 1) {
          if (index !== 0) {
            element.classList.add('animate__fadeInUp')
          }
        }
        if (this.clickNum === 2) {
          if (index !== 3) {
            element.classList.add('animate__fadeInDown')
          }
        }
      }
      this.clickNum = 0
    },
    showMusic(isPlay) {
      this.isPlay = isPlay
      this.clickNum = 1
      const refArr = this.$refs.contentRef.children
      for (let index = 0; index < refArr.length; index++) {
        if (index !== 0) {
          const element = refArr[index]
          element.classList.add('animate__fadeOutDown')
        }
      }
    }
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
  height: 90vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
}
.content img {
  margin: 40px 0 15px 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.content span {
  margin-bottom: 40px;
  color: #faeeee;
}
.music-bounce {
  position: absolute;
  bottom: 0;
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
