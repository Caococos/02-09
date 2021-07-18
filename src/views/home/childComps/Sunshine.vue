<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 14:48:24
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 15:16:26
-->
<template>
  <div class='sunshine'></div>
</template>

<script>
export default {
  name: 'sunshine'
}
</script>

<style scoped>
.sunshine {
  position: absolute;
  bottom: 233px;
  right: 377px;
  width: 108px;
  height: 108px;
  /* border: 1px solid #000; */
  border-radius: 50%;
  animation: sun 15s alternate infinite;
}

@keyframes sun {
  from {
    box-shadow: 1px 1px 0px #fff;
  }
  to {
    box-shadow: 1px 1px 18px #ffeaa7;
  }
}
</style>