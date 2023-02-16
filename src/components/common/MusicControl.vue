<template>
  <div class="music-control" @click="$emit('click', isPlay)">
    <div class="music__main">
      <div :class="['music__cover', isPlay ? 'active' : '']" @click="play">
        <img src="~assets/img/music.jpg" />
      </div>
      <div class="music__main__timeBar">
        <div class="time">
          <span>{{ realMusicTime }}</span>
          <span>{{ totalMusicTime }}</span>
        </div>
        <div class="bar" ref="bar" @click="handClickBar">
          <div class="bar__slid" ref="slid" @click="handClickBar"></div>
        </div>
      </div>
    </div>
    <div class="music_name">
      <span :style="{ animationPlayState: isPlay ? 'running' : 'paused' }">{{ audioSrc.name }}</span>
      <span :style="{ animationPlayState: isPlay ? 'running' : 'paused' }">{{ audioSrc.name }}</span>
    </div>
    <div class="name_tip">{{ audioSrc.name }}</div>
    <div class="music__btn">
      <i class="iconfont icon-shuaxin" @click="switchMusic"></i>
    </div>
    <div class="volume">
      <span
        @click="showVolume"
        :class="['iconfont', { 'icon-jiadayinliang': !isMuted }, { 'icon-guanbiyinliang': isMuted }]"
      ></span>
      <span ref="volumeBar" @click="handleVolumeBar" class="volume_bar" data-width="30%"></span>
    </div>
    <div class="music__mask"></div>
    <audio ref="music" :src="audioSrc.src"></audio>
  </div>
</template>

<script>
export default {
  name: 'music-control',
  data() {
    this.audioSrcs = [
      { src: 'http://music.163.com/song/media/outer/url?id=2007721646.mp3', name: '嘘つき-早稻叽' }, //嘘つき-早稻叽
      { src: 'http://music.163.com/song/media/outer/url?id=30251317.mp3', name: '世界は恋に落ちている-pika' }, //世界坠入爱河-pika
      { src: 'http://music.163.com/song/media/outer/url?id=2015001195.mp3', name: '小さいな恋のうた-椎白真昼' }, //小小恋歌
      { src: 'http://music.163.com/song/media/outer/url?id=458231455.mp3', name: '回る空うさぎ-miku' } //月兔回旋于空中
      //'http://music.163.com/song/media/outer/url?id=28815677.mp3', //下一站天后
      //'http://music.163.com/song/media/outer/url?id=1350160463.mp3', //勾指起誓
      //image.png'http://music.163.com/song/media/outer/url?id=1840459406.mp3', //崂山水
    ]
    return {
      isPlay: false,
      realMusicTime: '00:00',
      totalMusicTime: '00:00',
      audioSrc: this.audioSrcs[0],
      isMuted: false,
      volume: 0.3
    }
  },
  mounted() {
    this.watchMusicTime()
    this.music.volume = this.volume
  },
  methods: {
    play() {
      if (this.music.paused) {
        this.music.play()
        this.isPlay = true
      } else {
        this.music.pause()
        this.isPlay = false
      }
      this.$emit('play', this.isPlay)
    },
    // 处理时间
    handlMusicTime() {
      //用秒数来显示当前播放进度
      let timeDisplay = Math.floor(this.music.currentTime) //获取实时时间
      //分钟
      let minute = parseInt(timeDisplay / 60)
      if (minute < 10) {
        minute = '0' + minute
      }
      //秒
      let second = Math.round(timeDisplay % 60)
      if (second < 10) {
        second = '0' + second
      }
      this.realMusicTime = minute + ':' + second
    },
    // 处理进度条
    handMusicBar() {
      let slid = this.$refs.slid
      let duration = this.music.duration //音乐总时长
      let currentTime = this.music.currentTime //音乐当前时间
      let x = ((currentTime / duration) * 100).toFixed(2) + '%'
      slid.style.width = x
    },
    // 处理点击进度条点击事件
    handClickBar(e) {
      const barTotalWidth = this.bar.offsetWidth // bar 总宽度
      // const rect = e.target.getBoundingClientRect() // 元素右边距离页面边距的距离 返回上下左右
      const left = this.getElementLeft(e.target)
      let length = e.pageX - left
      this.music.currentTime = (length / barTotalWidth) * this.music.duration // 计算播放时间 位置百分比*总时间
      this.$nextTick(() => {
        this.music.play()
        this.isPlay = true
      })
    },
    // 切换歌曲
    switchMusic() {
      this.isPlay = false
      this.audioSrc = this.audioSrcs[Math.floor(Math.random() * this.audioSrcs.length)]
      this.music.load()
      // 文件下载完毕，如果不用等到全部下载完毕，可以用canplay事件
      this.music.addEventListener('canplaythrough', () => {
        this.music.play()
        this.isPlay = true
      })
    },
    //使用事件监听方式捕捉事件
    watchMusicTime() {
      this.music = this.$refs.music
      this.bar = this.$refs.bar
      this.music.addEventListener(
        'timeupdate',
        () => {
          this.handlMusicTime()
          this.$nextTick(() => {
            this.handMusicBar()
          })
        },
        false
      )
      // 播放完毕
      this.music.addEventListener('ended', () => {
        this.switchMusic() // 自动播放
      })
      // 捕获音频文件已准备完毕
      // 当媒体文件可以播放的时候会触发oncanplay事件,也可以用oncanplay
      this.music.oncanplaythrough = () => {
        let time = this.music.duration
        //分钟
        let minutes = parseInt(time / 60)
        if (minutes < 10) {
          minutes = '0' + minutes
        }
        //秒
        let seconds = Math.round(time % 60)
        if (seconds < 10) {
          seconds = '0' + seconds
        }
        this.totalMusicTime = minutes + ':' + seconds
      }
    },
    // 处理音量点击事件
    handleVolumeBar(e) {
      const bar = this.$refs.volumeBar
      // const rect = e.target.getBoundingClientRect() //getBoundingClientRect 引发页面的重绘
      const left = this.getElementLeft(e.target)
      let length = e.pageX - left //音量的长度
      this.volume = this.music.volume = length / bar.offsetWidth
      bar.style.setProperty('--width', `${this.volume * 100}%`)
    },
    // 音量开关
    showVolume() {
      let volume
      if (this.isMuted) {
        volume = this.music.volume = this.volume
      } else {
        volume = this.music.volume = 0
      }
      this.isMuted = !this.isMuted
      const bar = this.$refs.volumeBar
      bar.style.setProperty('--width', `${volume * 100}%`)
    },
    getElementLeft(element) {
      let actualLeft = element.offsetLeft
      let current = element.offsetParent

      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }

      return actualLeft
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1280px) {
  .music-control {
    width: 500px;
  }
}
@keyframes musicRotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.music-control {
  border-radius: 15px;
  position: relative;
  padding: 30px;
  min-width: 300px;
  box-sizing: border-box;
  overflow: hidden;
}
.music__main {
  display: flex;
}
.music__cover {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #dddddd;
  cursor: pointer;
  animation: musicRotate 10s linear infinite;
  animation-play-state: paused;
  /* 暂定动画 */
}
.active {
  animation-play-state: running;
}
.music__cover img {
  width: 100%;
  height: 100%;
}
.music__main__timeBar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;
  box-sizing: border-box;
}
.time {
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.time span {
  font-size: 19px;
  line-height: 1;
}
.bar {
  height: 8px;
  background-color: #fbfbfb;
  border-radius: 8px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
.bar__slid {
  position: absolute;
  left: 0;
  top: 0;
  background-image: radial-gradient(
    circle farthest-corner at 92.3% 71.5%,
    rgba(83, 138, 214, 1) 0%,
    rgba(134, 231, 214, 1) 90%
  );
  height: 100%;
  width: 0;
  transition: width 0.3s;
}
.music_name {
  position: absolute;
  left: 45%;
  top: 25px;
  width: 150px;
  height: 21px;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
  /* display: flex; */
}
.music_name span {
  display: inline-block;
  padding: 0 5px;
  min-width: 100%;
  text-align: center;
  white-space: nowrap;
}
.music_name span:nth-child(1) {
  animation: transformX1 5s linear infinite;
}
.music_name span:nth-child(2) {
  animation: transformX2 5s linear infinite;
}
.music_name:hover + .name_tip {
  opacity: 1;
}
.name_tip {
  position: absolute;
  top: 0;
  left: 45%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  color: #fff;
}
.volume {
  position: absolute;
  top: 5px;
  right: 70px;
  color: #ddf3fd;
  display: flex;
  width: 71px;
  justify-content: start;
  align-items: center;
}
.volume span {
  cursor: pointer;
}
.icon-jiadayinliang:hover ~ .volume_bar {
  opacity: 1;
}
.volume_bar:hover {
  opacity: 1 !important;
}
.volume .volume_bar {
  position: relative;
  margin-left: 5px;
  display: inline-block;
  opacity: 0;
  width: 50px;
  height: 4px;
  background-color: #fff;
  border-radius: 50px;
  --width: 30%;
  transition: opacity 1s ease;
}
.volume_bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width);
  height: 100%;
  background-image: radial-gradient(
    circle farthest-corner at 92.3% 71.5%,
    rgba(83, 138, 214, 1) 0%,
    rgba(134, 231, 214, 1) 90%
  );
  transition: width 0.3s;
}
.music__btn {
  position: absolute;
  right: 30px;
  top: 10px;
}
.music__btn i {
  font-size: 18px;
  color: #ddf3fd;
  cursor: pointer;
}
.music__btn i:hover {
  color: #fff;
}
.music__mask {
  background-image: url('~assets/img/music.jpg');
  z-index: -2;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(5px);
  opacity: 0.5;
  transition: all 0.8s;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.music-control::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  content: '';
  background-color: rgba(0, 0, 0, 0.08);
}
@keyframes transformX1 {
  100% {
    transform: translateX(-100%);
  }
}
@keyframes transformX2 {
  0% {
    transform: translate(100%, -100%);
  }
  100% {
    transform: translate(0%, -100%);
  }
}
</style>
