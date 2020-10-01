<template>
    <!-- About-->
    <div id="home-data">
        <section class="resume-section" id="home">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Goran
                    <span class="text-primary">Subić</span>
                </h1>
                <div class="mb-5">
                    <span class="subheading mb-5">Serbia · Vojvodina · Novi Sad ·</span> <span class="mail"><a href="mailto: gsubic@gmail.com">gsubic@gmail.com</a></span>
                </div>


                <p class="lead mb-5">Welcome to my personal site. Here You can find some of the things that I have been working on.</p>
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
        opacity: 0.5;
    }

    .centered {
        display: block;
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
    }
</style>