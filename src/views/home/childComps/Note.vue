<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 21:19:27
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-14 20:02:12
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
        '每一个日子都普通，除了见你的那一天。天空是粉色，喝白水有甜味，阳光软软地盖在身上，连风路过的时候好像都打着好看的卷儿',
        '你知道吗？并不是每棵树都长得一样。有的开花，有的结果，有的可以长得很高很高……他们都不一样，就好像我们。“我们也都不一样。”你也许跑不快，长得不高，也许不聪明……但你是你，你有你独一无二的地方。你不完美的样子也很好。因为这是你之所以是你的理由',
        '请相信自己是很美好的存在，不用怀疑这是宇宙独一无二的色彩',
        '愿你被这个世界温柔以待，心中装满爱，卸下所有防备，自由自在',
        '女人都是大猪蹄子，只有你散发着猪头肉的清香'
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