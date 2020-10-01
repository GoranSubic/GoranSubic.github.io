<template>
    <div id="app">
        <div id="mysidenav">
            <SideNav msgSideNav="Side Nav with image" />
        </div>

        <div id="main">
            <img alt="Vue logo" src="./assets/logo.png">
            <Home msgHome="Welcome to my Vue.js Portfolio App" />
            <Education msgEducation="About my Education" />
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Home from './views/Home.vue'
    import SideNav from './views/SideNav.vue'
    import Education from './views/Education.vue'

export default {
  name: 'App',
  components: {
      Home,
      SideNav,
      Education
  }
}
</script>

<style>
    body {
        background-color: rgb(214, 212, 217);
    }

    #app {
        padding: 20px;
        /*width: 100%;*/
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

    h2 {
        box-sizing: border-box;
        color: rgb(52, 58, 64);
        display: block;
        font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 56px;
        font-weight: 700;
        height: 67px;
        line-height: 67.2px;
        margin-bottom: 48px;
        margin-top: 0px;
        text-align: left;
        text-size-adjust: 100%;
        text-transform: uppercase;
        width: 981px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }

    .resume-section {
        min-height: 550px;
    }

    .resume-section-content {
        box-sizing: border-box;
        color: rgb(108, 117, 125);
        display: block;
        font-family: Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 16px;
        font-weight: 400;
        height: 311px;
        line-height: 24px;
        text-align: left;
        text-size-adjust: 100%;
        width: 981px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .subheading {
        margin-top: 20px;
        box-sizing: border-box;
        color: rgb(108, 117, 125);
        display: inline;
        font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 24px;
        font-weight: 500;
        height: auto;
        line-height: 36px;
        margin-bottom: 48px;
        text-align: left;
        text-size-adjust: 100%;
        text-transform: uppercase;
        width: auto;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }

    span.mail, span.mail>a {
        background-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        color: rgb(65, 184, 131);
        opacity: 0.75;
        display: inline;
        font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: 500;
        height: auto;
        text-align: left;
        text-decoration-line: none;
        text-decoration-style: solid;
        text-size-adjust: 100%;
        text-transform: none;
        width: auto;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

</style>
