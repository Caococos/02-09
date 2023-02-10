<template>
  <header>
    <input type="checkbox" id="toggler" />
    <label for="toggler">
      <div class="hamburger-container">
        <span></span>
        <span></span>
      </div>
    </label>

    <div class="nav-items">
      <ul>
        <li>508Home</li>
        <li>HP</li>
        <li>XXX</li>
        <li>狗哥</li>
        <li>陈签</li>
        <li>许老板</li>
        <li>Zhihaot1</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return {}
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1280px) {
  header {
    display: none;
  }
}
header {
  padding: 0 18px;
  height: 44px;
  background-color: #000;
}
#toggler {
  display: none;
}
.hamburger-container {
  display: block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 16px;
}
.hamburger-container span {
  position: relative;
  display: block;
  height: 1px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
  top: 0; /*预设值 */
}
.hamburger-container span:nth-child(2) {
  margin-top: 7px;
}
#toggler:checked + label .hamburger-container span:nth-child(1) {
  transform: rotate(45deg);
  top: 4px;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
#toggler:checked + label .hamburger-container span:nth-child(2) {
  transform: rotate(-45deg);
  top: -4px;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
.nav-items {
  background-color: rgba(0, 0, 0, 0.82);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 100;
  color: #fff;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition: transform 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;
}
#toggler:checked ~ .nav-items {
  transform: scaleY(1);
  opacity: 1;
}
.nav-items ul {
  margin-top: 1rem;
}
</style>
