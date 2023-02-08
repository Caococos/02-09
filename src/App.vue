<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from 'views/home/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
@import '~assets/font/iconfont.css';
body {
  font-family: 'Quickspand', sans-serif;
  margin: 0;
  min-height: 100vh;
  background-color: #e493d0;
  background-image: radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  background-repeat: no-repeat;
  animation: movement 10s linear infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -60vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax, 40vmax 60vmax;
  }
  50% {
    background-size: 120vmax 120vmax, 100vmax 100vmax, 85vmax 85vmax, 100vmax 100vmax, 40vmax 40vmax;
    background-position: -50vmax -50vmax, 30vmax -20vmax, 20vmax 0vmax, -20vmax 10vmax, 50vmax 30vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 110vmax 110vmax, 80vmax 80vmax, 70vmax 70vmax, 80vmax 80vmax;
    background-position: -40vmax -40vmax, 20vmax -70vmax, 20vmax -50vmax, -50vmax 20vmax, 20vmax 40vmax;
  }
}
</style>
