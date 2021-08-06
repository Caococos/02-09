<template>
  <div class='zh-footer'>
    <span class="border" @click="toGithub">© 2021 Zhihaot1</span>
    <span class="border">创作不易，请多多支持</span>
    <span>关于</span>
  </div>
</template>

<script>
export default {
  name: 'zh-footer',
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
.zh-footer {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  color: #b2bec3;
  font-size: 12px;
}

.zh-footer span:hover {
  cursor: pointer;
  color: #fff;
  transition: all 0.5s;
}

.zh-footer .border::after {
  content: "";
  margin: 0 10px;
  border-right: 2px solid #b2bec3;
}
</style>