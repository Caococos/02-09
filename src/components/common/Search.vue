<template>
  <div class="search" @click="$emit('click')">
    <input
      type="text"
      class="text"
      v-model="search"
      placeholder="What do u want to know?"
      @keyup.enter="searchContent"
    />
    <div class="btn iconfont icon-icon-test" @click="searchContent"></div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchContent() {
      if (this.search) {
        let url = `http://www.baidu.com/s?wd=${this.search}`
        window.open(url)
        this.search = ''
      }
    }
  }
}
</script>

<style scoped>
.search {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 垂直对齐 */
  background: transparent;
  height: 60px;
  border-radius: 50px;
  transition: transform 1s ease;
}

.btn {
  /* float: right; */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: 1s;
  line-height: 80px;
  text-align: center;
  font-size: 50px;
}

.text {
  /* float: left; */
  width: 0;
  transition: 1s;
  height: 50px;
  font-size: 20px;
}

.search:hover > .text {
  width: 300px;
  padding: 0 6px;
}
.search:hover {
  transform: scale(1.4);
}

.search:hover > .btn {
  color: #fff;
  background-color: #2c3e50;
  transform-origin: center;
  transform: scale(0.8);
  /* height: 50px;
  width: 50px;
  line-height: 50px; */
}

.text:focus {
  width: 300px;
  padding: 0 6px;
}
</style>
