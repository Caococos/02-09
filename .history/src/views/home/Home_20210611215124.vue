<template>
  <div class="home">
    <h2>0209 is your brithday, so
      <div class="mask">
        <span>Happy birthday!</span>
        <span>С днем рождения!</span>
        <span>Joyeuse anniversaire!</span>
        <span>誕生日おめでと!</span>
      </div>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
<style scoped>
h2 {
  width: 980px;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #1d1d1f;
}

.mask {
  height: 104px;
  position: relative;
  overflow: hidden;
}

.mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
}
</style>
