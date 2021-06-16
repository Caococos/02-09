<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-16 18:26:34
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-16 19:44:10
-->
<template>
  <div class='footer'>
    <span class="border" @click="toGithub">© 2021 Zhihaot1</span>
    <span class="border">创作不易，请多多支持</span>
    <span>关于</span>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {}
  },
  methods: {
    toGithub() {
      window.open('https://github.com/Caococos')
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #b2bec3;
  font-size: 12px;
}

.footer span:hover {
  cursor: pointer;
  color: #fff;
  transition: all 0.5s;
}

.footer .border::after {
  content: "";
  margin: 0 10px;
  border-right: 2px solid #b2bec3;
}
</style>