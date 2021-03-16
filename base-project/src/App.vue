<template>
  <div id="app">
    <p>
      <router-link to="/home">Go to home</router-link> 
      <router-link to="/play">Go to play</router-link>
      <router-link to="/app-child1">Go to child1</router-link>
      <router-link to="/app-child2">Go to child2</router-link>
    </p>
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
