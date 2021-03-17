<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">Go to home</router-link> </li>
      <li><router-link to="/play">Go to play</router-link></li>
      <li><router-link to="/app-spa-history">Go to spa-history</router-link></li>
      <li><router-link to="/app-spa-hash">Go to spa-hash</router-link></li>
      <li><router-link to="/app-jquery">Go to jquery</router-link></li>
    </ul>
    <router-view></router-view>

    <div>
      子应用:
      <div id='container'></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
