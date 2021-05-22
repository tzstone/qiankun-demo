<template>
  <div id="spa-history">
    <ul>
      <li><router-link to="/home">home</router-link> </li>
      <li><router-link to="/play">play</router-link></li>
    </ul>
    <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
