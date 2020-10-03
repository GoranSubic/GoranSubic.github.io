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
                    <span>Serbia · Vojvodina · Novi Sad ·</span> <span class="mail"><a href="mailto: gsubic@gmail.com">gsubic@gmail.com</a></span>
                </div>


                <p>Welcome to my personal site. </p>
                <p>Here You can find some of the things that I have been working on.</p>
                <div class="social-icons">
                    <a class="tooltip" href="https://www.linkedin.com/in/goran-subic" target="_blank">
                        <span style="font-size: 3em; color: royalblue;">
                            <i class="fab fa-linkedin"></i>
                        </span>
                        <span class="tooltiptext">LinkedIn Profile</span>
                    </a>

                    <a class="tooltip" href="https://github.com/goransubic" target="_blank">
                        <span style="font-size: 3em; color: grey;">
                            <i class="fab fa-github"></i>
                        </span>
                        <span class="tooltiptext">GitHub</span>
                    </a>

                    <a class="tooltip" href="pdf/Goran_Subic_CV_eng.pdf" target="_blank">
                        <span style="font-size: 3em;color: #d00d0d;">
                            <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="tooltiptext">CV - eng</span>
                    </a>

                    <a class="tooltip" href="pdf/Goran_Subic_CV_srb.pdf" target="_blank">
                        <span style="font-size: 3em;color: #d00d0d;">
                            <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="tooltiptext">CV - srb</span>
                    </a>

                    <a class="tooltip" href="pdf/LetterOfRec_Smart_PHP.pdf" target="_blank">
                        <span style="font-size: 3em;color: #d00d0d;">
                            <i class="fas fa-file-pdf"></i>
                        </span>
                        <span class="tooltiptext">Smart DOO - Letter of Recommendation</span>
                    </a>

                    <a class="tooltip" href="https://goransubic.github.io/MemoryGame-Vue.js/" target="_blank">
                        <span style="font-size: 3em;color: rgb(65, 184, 131);">
                            <i class="fab fa-vuejs"></i>
                        </span>
                        <span class="tooltiptext">Vue.js example - MemoryGame</span>
                    </a>
                </div>
            </div>
            <hr class="m-0">
        </section>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: {
      msgAbout: String
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

    .social-icons > a {
        margin: 5px;
    }

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        /*border-bottom: 1px dotted black;*/ /* If you want dots under the hoverable text */
    }

        /* Tooltip text */
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            /* Position the tooltip text - see examples below! */
            position: absolute;
            z-index: 1;
        }

        /* Show the tooltip text when you mouse over the tooltip container */
        .tooltip:hover .tooltiptext {
            visibility: visible;
        }
</style>