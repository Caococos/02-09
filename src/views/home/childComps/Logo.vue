<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 21:16:51
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 21:22:02
-->
<template>
  <div class="logo">
    <h1>0209</h1>
  </div>
</template>

<script>
export default {
  name: 'logo',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.logo {
  width: 200px;
  height: 100px;
  overflow: hidden;
}
.logo h1 {
  font-size: 80px;
  text-transform: uppercase;
  font-weight: 900;
  color: #b2bec336;
  background-image: url(~assets/img/波浪.png);
  background-clip: text;
  -webkit-background-clip: text;
  animation: water 15s infinite;
}
@keyframes water {
  from {
    background-position: left 0 top 0;
  }
  to {
    background-position: left 1000px top 0;
  }
}
</style>