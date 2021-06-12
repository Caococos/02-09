<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 16:37:33
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 22:25:39
-->
<template>
  <div class='search'>
    <input type="text" class="text" v-model="search" @keyup.enter="searchContent">
    <div class="btn iconfont icon-icon-test"></div>
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
  position: absolute;
  margin: 30px 0 0 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 垂直对齐 */
  background: #a29bfe;
  height: 60px;
  border-radius: 40px;
}

.btn {
  /* float: right; */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: 1s;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
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

.search:hover > .btn {
  color: #fff;
  background-color: #2c3e50;
  height: 50px;
  width: 50px;
  line-height: 50px;
}

.text:focus {
  width: 300px;
  padding: 0 6px;
}
</style>