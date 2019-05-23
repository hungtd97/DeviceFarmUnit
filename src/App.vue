<template>
  <div id="app" class="container">
    <img src="./assets/logo.png" class="logo">
    <clock-list></clock-list>
  </div>
</template>

<script>
import ClockList from './components/ClockList'

export default {
  name: 'App',
  components: {
    ClockList,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

.container {
  /* max-width: 600px; */
  margin: 0 auto;
  text-align: center
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
