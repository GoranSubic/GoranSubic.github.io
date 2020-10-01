<template>
    <div id="education-data">
        <section class="resume-section" id="home">
            <div class="resume-section-content">
                <h2>My <span class="mail">Education</span></h2>
                <p class="centered">
                <p>
                    From 1995 to 1999, The High School of Electrical Engineering. The title of electrical drives
                </p>
                <p>
                    From 1999 to 2005, Technical Faculty "Mihajlo Pupin" Zrenjanin, University of Novi Sad. The title of Professor of Computer Science
                </p>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    msgEducation: String
  }
}
</script>


<style>
    .centered {
        display: block;
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
    }
</style>