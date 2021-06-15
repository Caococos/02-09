<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-06-12 19:57:53
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-12 22:29:39
-->
<template>
  <div class='clock'>
    <div class="time">{{newTime}}</div>
    <div class="week">{{week}}</div>
    <div class="data">{{newDate}}</div>
  </div>
</template>

<script>
export default {
  name: 'clock',
  data() {
    return {
      newTime: '',
      newDate: '',
      week: ''
    }
  },
  mounted() {
    this.getLangDate()
  },
  methods: {
    dateFilter(date) { //值小于10时，在前面补0
      if (date < 10) {
        return "0" + date;
      }
      return date;
    },
    getLangDate() {
      let dateObj = new Date(); //表示当前系统时间的Date对象
      let year = dateObj.getFullYear(); //当前系统时间的完整年份值
      let month = dateObj.getMonth() + 1; //当前系统时间的月份值
      let date = dateObj.getDate(); //当前系统时间的月份中的日
      let day = dateObj.getDay(); //当前系统时间中的星期值
      const weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      this.week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
      let hour = dateObj.getHours(); //当前系统时间的小时值
      let minute = dateObj.getMinutes(); //当前系统时间的分钟值
      let second = dateObj.getSeconds(); //当前系统时间的秒钟值
      // let timeValue = "" + ((hour >= 12) ? (hour >= 18) ? "晚上" : "下午" : "上午"); //当前时间属于上午、晚上还是下午
      this.newDate = this.dateFilter(year) + "-" + this.dateFilter(month) + "-" + this.dateFilter(date)
      this.newTime = this.dateFilter(hour) + ":" + this.dateFilter(minute) + ":" + this.dateFilter(second)
      setTimeout(this.getLangDate, 1000);
    }
  }
}
</script>

<style scoped>
.clock {
  text-align: center;
  font-size: 50px;
  color: #a29bfe;
}

.time {
  font-size: 60px;
}
</style>