<template>
    <div id="app">
        <nav id="menu-wrapper">
            <mymenu msgMenu="Menu list from defined array" />
        </nav>

        <aside id="mysidenav">
            <SideNav />
        </aside>

        <div id="main">
            <!--<img alt="Vue logo" src="./assets/logo.png">-->
            <About msgAbout="Welcome to my Vue.js Portfolio App" />
            <Education msgEducation="About my Education" />
            <Experience msgEducation="About my Experience" />
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import mymenu from './views/Menu.vue'
    import SideNav from './views/SideNav.vue'
    import About from './views/About.vue'
    import Education from './views/Education.vue'
    import Experience from './views/Experience.vue'

    export default {
        name: 'App',
        components: {
            mymenu,
            SideNav,
            About,
            Education,
            Experience
        }
    }
</script>

<style>
    body {
        padding: 0 !important;
        padding-top: 0px !important;
        padding-right: 0px !important;
        padding-bottom: 0px !important;
        padding-left: 0px !important;
        margin: 0;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;

        font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        background-color: rgb(214, 212, 217);
    }

    #app {
        padding-left: 17rem;
        /*padding: 20px;*/
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin: 60px;*/
    }

    #main {
        display: block;
        float: left;
        padding: 20px;
        width: 70%;
        /*margin-left: 200px;*/
    }

    /* The side navigation menu */
    #mysidenav {
        display: block;
        float: left;
        width: 30%;
        height: 100vh; /* 100% Full-height */
        max-width: 260px;
        position: fixed; /* Stay in place */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: rgb(170, 210, 190);
        overflow-x: hidden; /* Disable horizontal scroll */
        overflow-y: hidden; /* Disable vertical scroll */
        padding: 100px 10px 100px 10px;
    }

    /* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
    @media (max-width: 600px) {
        h1 {
            margin-bottom: 6rem !important;
        }

        .menu {
            text-align: center;
            position: fixed;
            top: 0;
            z-index: 1;
        }

        #app {
            padding-left: 1rem;
        }

        #mysidenav {
            position: absolute;
            display: none;
            width: 0;
        }

        #main {
            width: 100%;
            height: auto;
        }
    }

    h2 {
        margin-bottom: 6rem !important;
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
        /*width: 981px;*/
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }

    section.resume-section {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 5rem;
        padding-bottom: 5rem;
        max-width: 75rem;
        min-height: 70vh;
        /*min-height: 75rem;*/
        width: 100%;
    }

    /*.resume-section {
        min-height: 550px;
    }*/

    @media (min-width: 992px) {
        section.resume-section {
            padding-left: 3rem;
            padding-right: 3rem;
            padding-top: 5rem;
            padding-bottom: 5rem;
        }
    }

    /*@media (min-width: 768px) {
        section.resume-section {
            min-height: 100vh;
        }
    }*/

    .resume-section-content {
        box-sizing: border-box;
        color: rgb(108, 117, 125);
        display: block;
        font-family: Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 16px;
        font-weight: 400;
        /*height: 311px;*/
        line-height: 24px;
        text-align: left;
        text-size-adjust: 100%;
        width: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .subheading {
        margin-bottom: 3rem !important;
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

    span.mail, span.mail > a {
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
