<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-11 21:03:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 22:27:18
-->
<template>
  <div class='home'>
    <font-swiper></font-swiper>
    <div class="right">
      <logo class="logo"></logo>
      <note class='note'></note>
    </div>
    <sunshine></sunshine>
    <search></search>
    <clock class="clock"></clock>
  </div>
</template>

<script>
import FontSwiper from 'views/home/childComps/FontSwiper';
import Sunshine from 'views/home/childComps/Sunshine';
import Search from 'components/common/Search';
import Clock from 'components/common/Clock';
import Logo from 'views/home/childComps/Logo';
import Note from 'views/home/childComps/Note';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    FontSwiper,
    Sunshine,
    Search,
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

.note {
  margin-top: 25px;
}

.clock {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>