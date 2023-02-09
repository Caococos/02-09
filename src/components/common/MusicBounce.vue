<template>
  <div class="music-bounce">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MusicBounce',
  data() {
    return {}
  }
}
</script>

<style scoped>
.music-bounce {
  display: flex;
  width: 100vw;
}
.music-bounce span {
  display: block;
  width: 5vw;
  height: 150px;
  opacity: 0.8;
}
.music-bounce span:nth-child(5n + 1) {
  background-image: radial-gradient(
    circle farthest-corner at 12.3% 19.3%,
    rgba(85, 88, 218, 1) 0%,
    rgba(95, 209, 249, 1) 100.2%
  );
  animation: bounce 1.5s ease-in-out infinite;
}
.music-bounce span:nth-child(5n + 2) {
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  animation: bounce 1.75s ease-in-out infinite;
}
.music-bounce span:nth-child(5n + 3) {
  background-image: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
  animation: bounce 1.2s ease-in-out infinite;
}
.music-bounce span:nth-child(5n + 4) {
  background-image: linear-gradient(109.6deg, rgba(156, 252, 248, 1) 11.2%, rgba(110, 123, 251, 1) 91.1%);
  animation: bounce 1.3s ease-in-out infinite;
}
.music-bounce span:nth-child(5n + 5) {
  background-image: linear-gradient(109.6deg, rgba(253, 199, 141, 1) 11.3%, rgba(249, 143, 253, 1) 100.2%);
  animation: bounce 1.6s ease-in-out infinite;
}
@keyframes bounce {
  0%,
  100% {
    clip-path: inset(0% 0% 0% 0%);
  }
  50% {
    clip-path: inset(100% 0% 0% 0%);
  }
}
</style>
