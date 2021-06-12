<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 21:19:27
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 22:06:04
-->
<template>
  <div class="note">{{ msg }}</div>
</template>

<script>
export default {
  name: 'note',
  data() {
    return {
      message: [
        '阳光就像一只温暖的大手轻轻抚平你容貌上的小瑕疵',
        '洁白的大腿和蓬松的纱裙、纤细的手指和精致的蕾丝、玲珑的锁骨和长长的睫毛，是你啊',
        '对你的喜欢，就像小肚腩，藏呀，藏不住呀',
        '月色与雪色之间，你是第三种绝色',
        '逐渐变得粉色的水，那是我喜欢你的颜色',
        '我泡在你的海水里，可凉，可凉了',
        '每一个日子都普通，除了见你的那一天。天空是粉色，喝白水有甜味，阳光软软地盖在身上，连风路过的时候好像都打着好看的卷儿'
      ]
    }
  },
  methods: {
    random() {
      return Math.floor(Math.random() * this.message.length)
    }
  },
  computed: {
    msg() {
      return this.message[this.random()]
    }
  }
}
</script>

<style scoped>
.note {
  position: relative;
  padding: 10px;
  font-size: 20px;
  color: var(--text);
  border-radius: 10px;
  background: transparent;
  transition: 1s;
}

.note::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  z-index: -1;
  background-color: rgba(231, 76, 60, 0.7);
  transition: 1s;
}

.note:hover::before {
  width: 100%;
  height: 100%;
}

.note:hover {
  border: 2px solid #f1c40f;
  box-shadow: 0 0px 5px #f1c40f;
  color: #f1c40f;
}
</style>