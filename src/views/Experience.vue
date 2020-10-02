<template>
    <div id="experience-data">
        <section class="resume-section" id="home">
            <div class="resume-section-content">
                <h2>My <span class="mail">Experience</span></h2>
                <div class="subheading">
                    <span>Formal education</span>
                </div>
                <p class="">
                    <!--Last employment
                    <ul>
                        <li>
                            Faculty of Law, Novi Sad (Feb 2018 – Feb 2020)
                        </li>
                    </ul>-->
                    Faculty of Law, Novi Sad (Feb 2018 – Feb 2020)
                </p>
                <p class="">
                    „CloudTech“ - PHP Developer (Dec 2015 – Feb 2018).
                </p>
                <p class="">
                    „BB Trade“ AD (Jun 2011 – Maj 2015)
                </p>
                <p class="">
                    „Frikom” AD Padinska Skela (Avg 2007 – Maj 2011)
                </p>
                <p class="">
                    „Rodić M&B Invest” doo Novi Sad (Jun 2006 – Avg 2007)
                </p>
                <p class="">
                    „Rodić M&B-CO” doo Kula (Dec 2005 – Jun 2006)
                </p>

            </div>
        </section>
        <hr class="m-0">
    </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
      msgExperience: String
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