<template>
    <!--<div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>-->
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Home msgHome="Welcome to my Vue.js Portfolio App" />
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
    body {
        background-color: lightgray;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
