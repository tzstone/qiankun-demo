<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">Go to home</router-link> </li>
      <li><router-link to="/play">Go to play</router-link></li>
      <li><router-link to="/app-spa-history/home">Go to spa-history home</router-link></li>
      <li><router-link to="/app-spa-history/play">Go to spa-history play</router-link></li>
      <li><router-link to="/app-spa-history/chart">Go to spa-history chart</router-link></li>
      <li><router-link to="/app-spa-hash">Go to spa-hash</router-link></li>
      <li><router-link to="/app-jquery">Go to jquery</router-link></li>
      <li><router-link to="/app-angular1">Go to angular1</router-link></li>
      <li><router-link to="/app-angular11/heroes">Go to angular11 heroes</router-link></li>
      <li><router-link to="/app-angular11/crisis">Go to angular11 crisis</router-link></li>

    </ul>
    <router-view />

    <div>
      子应用:
      <div id="container" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
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
