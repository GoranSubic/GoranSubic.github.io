<template>
    <div id="education-data" style="display: none;">
        <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2>My <span class="mail">Education</span></h2>
                <div class="subheading">
                    <span class="subheading-education">Formal education</span>
                </div>
                <p class="">
                    From 1995 to 1999, The High School of Electrical Engineering. The title of electrical drives
                </p>
                <p class="">
                    From 1999 to 2005, Technical Faculty "Mihajlo Pupin" Zrenjanin, University of Novi Sad. The title of Professor of Computer Science
                </p>

                <div class="subheading">
                    <span class="subheading-education">Independent work and personal improvement</span>
                </div>
                <p class="">
                    C/C++
                    <ul>
                        <li>
                            After passing preliminary exam (C/C++), accepted for the training at the Company PanonIT (Mar 2020)
                        </li>
                        <li>
                            <a href="https://github.com/GoranSubic/CembCpp" target="_blank">
                                <span style="font-size: 1em; color: grey;">
                                    <i class="fab fa-github"></i>
                                </span> CembCpp
                            </a>
                            - here You can find example projects that I created in C, C++, embedded C
                        </li>
                    </ul>
                </p>
                <p class="">
                    PHP
                    <ul>
                        <li>
                            Through the creation of WEB aplication for the manipulation with the data related to the selling in retail objects;
                        </li>
                        <li>
                            Creating of a project – final work after a course PHP&My SQL (CSS, HTML, JavaScript, jQuery, Ajax).
                            This work can be downloaded from
                            <a href="https://github.com/GoranSubic/smart-restoran" target="_blank">
                                <span style="font-size: 1em; color: grey;">
                                    <i class="fab fa-github"></i>
                                </span> GitHub
                            </a> (Nov 2015)
                        </li>
                    </ul>
                </p>
                <p class="">
                    Internet site developement
                    <ul>
                        <li>
                            Vue.js - this portfolio and
                            <a class="tooltip" href="https://goransubic.github.io/MemoryGame-Vue.js/" target="_blank">
                                <span style="font-size: 1em;color: rgb(65, 184, 131);">
                                    <i class="fab fa-vuejs"></i>
                                    <span class="tooltiptext">Vue.js example - MemoryGame</span>
                                </span> MemoryGame
                            </a>
                        </li>
                        <li>
                            Drupal CMS - International Scientific Conference 2019 
                            <a href="https://github.com/GoranSubic/conference" target="_blank">
                                <span style="font-size: 1em; color: grey;">
                                    <i class="fab fa-github"></i>
                                </span> Conference Website
                            </a>
                        </li>
                        <li>
                            Joomla CMS
                        </li>
                        <li>
                            Wordpress CMS
                        </li>
                    </ul>
                </p>
                <p class="">
                    Symfony
                    <ul>
                        <li>
                            Create crawler application (Symfony DomCrawler) which reads data from web site and shows that data on local servers page.
                            This work can be downloaded from
                            <a href="https://github.com/GoranSubic/sitedata" target="_blank">
                                <span style="font-size: 1em; color: grey;">
                                    <i class="fab fa-github"></i>
                                </span> GitHub
                            </a> (Dec 2015)
                        </li>
                    </ul>
                </p>
            </div>
            <hr class="m-0">
        </section>
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
    .resume-section-content li a {
        text-decoration: none;
        color: rgb(65, 184, 131);
    }
</style>