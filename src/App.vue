<template>
  <div id="app">
    <MomosukeWorld msg="momosuke" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Microsoft Intern</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MomosukeWorld from './components/MomosukeWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MomosukeWorld
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
