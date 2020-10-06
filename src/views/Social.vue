<template>
    <!-- About-->
    <div id="social-data" style="display: block;">
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
                <span class="tooltiptext">Smart DOO - Letter of Recom</span>
            </a>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
      msgSocial: String
  }
}
</script>

<style>
    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
        /*border-bottom: 1px dotted black;*/ /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
        .tooltip .tooltiptext {
            visibility: hidden;
            background-color: rgb(52, 58, 64);
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            /* Position the tooltip text - see examples below! */
            width: 80px;
            top: 100%;
            left: 50%;
            margin-left: -40px; /* Use half of the width (120/2 = 60), to center the tooltip */
            position: absolute;
            z-index: 1;
        }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>