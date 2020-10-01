<template>
    <!-- About-->
    <div id="home-data">
        <section class="resume-section" id="home">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Goran
                    <span class="text-primary">Subić</span>
                </h1>
                <div class="subheading">
                    <span>Serbia · Vojvodina · Novi Sad ·</span> <span class="mail"><a href="mailto: gsubic@gmail.com">gsubic@gmail.com</a></span>
                </div>


                <p>Welcome to my personal site. Here You can find some of the things that I have been working on.</p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/goran-subic" target="_blank"><i class="fa fa-linkedin-square" style="font-size:48px;color:blue"></i></a>
                    <a href="https://github.com/goransubic" target="_blank"><i class="fa fa-github-square" style="font-size:48px;color:blue"></i></a>
                </div>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msgHome: String
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
        font-size: 96px;
        font-weight: 700;
        height: 96px;
        line-height: 96px;
        margin-bottom: 0px;
        margin-top: 0px;
        text-align: left;
        text-size-adjust: 100%;
        text-transform: uppercase;
        width: 981px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }

        h1 > .text-primary {
            color: rgb(65, 184, 131);
            opacity: 0.75;
        }

        .centered {
            display: block;
            width: 100%;
            max-width: 450px;
            margin: 0 auto;
        }
</style>