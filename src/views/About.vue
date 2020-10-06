<template>
    <!-- About-->
    <div id="about-data" style="display: block;">
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Goran
                    <span class="text-primary">Subić</span>
                </h1>
                <div class="subheading">
                    <span class="subheading-info">Serbia · Vojvodina · Novi Sad · </span> <span class="mail"> <a href="mailto:gsubic@gmail.com"> gsubic@gmail.com</a></span>
                    <span class="subheading-roles">#helpDesk · #systemAdministration · #itManagement · #webDevelopment</span>
                </div>

                <div class="about-welcome">
                    <p>Welcome to my personal site. </p>
                    <p>Here You can find some of the things that I have been working on.</p>
                </div>
                <div id="social-data">
                    <Social msgSocial="Social and profile documents on about small screen" />
                </div>
            </div>
            <hr class="m-0">
        </section>
    </div>
</template>

<script>
    import Social from './Social.vue'

    export default {
      name: 'About',
      props: {
          msgAbout: String
        },
        components: {
            Social,
        }
    }
</script>

<style>
    a>img {
        opacity: 0.75;
    }

    h1 {
        box-sizing: border-box;
        color: rgb(52, 58, 64);
        display: block;
        font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 6rem;
        font-weight: 700;
        height: 6rem;
        line-height: 1;
        /*margin-top: 0px;*/
        text-align: left;
        text-size-adjust: 100%;
        /*text-transform: uppercase;*/
        width: auto;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }

    h1 > .text-primary {
        box-sizing: border-box;
        color: rgb(65, 184, 131);
        opacity: 0.75;
    }
</style>