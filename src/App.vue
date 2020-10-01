<template>
    <div id="app">
        <div id="mysidenav">
            <SideNav msgSideNav="Side Nav with image" />
        </div>

        <div id="main">
            <img alt="Vue logo" src="./assets/logo.png">
            <Home msgHome="Welcome to my Vue.js Portfolio App" />
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Home from './views/Home.vue'
    import SideNav from './views/SideNav.vue'

export default {
  name: 'App',
  components: {
      Home,
      SideNav
  }
}
</script>

<style>
    body {
        background-color: rgb(214, 212, 217);
    }

    #app {
        padding: 20px;
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px;
    }

    #main {
        display: block;
        float: left;
        padding: 20px;
        width: 70%;
        margin-left: 200px;
    }

    /* The side navigation menu */
    #mysidenav {
        display: block;
        float: left;
        width: 30%;
        height: 100%; /* 100% Full-height */
        /*width: 0;*/ /* 0 width - change this with JavaScript */
        width: 100%;
        max-width: 260px;
        position: fixed; /* Stay in place */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: rgb(170, 210, 190);
        overflow-x: hidden; /* Disable horizontal scroll */
        overflow-y: hidden; /* Disable vertical scroll */
        padding-top: 100px; /* Place content 60px from the top */
    }

    /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
    @media (max-width: 600px) {
        #mysidenav, #main {
            width: 100%;
            height: auto;
        }
    }

</style>
