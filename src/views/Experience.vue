<template>
    <div id="experience-data" style="display: none;">
        <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2>My <span class="mail">Experience</span></h2>
                <!--<div class="subheading">
        <span>Formal education</span>
    </div>-->
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Work In Progress</span>: Web Development <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Web application with orders and order tracking system (<a href="https://github.com/GoranSubic/syminorder" target="_blank"><span style="font-size: 1em; color: grey;"><i class="fab fa-github"></i></span> GitHub repo</a>):
        * Web application project based on Symfony + Vue - <a target="_blank" href="https://alternativa8.rs/"><img src="../assets/alternativa8.png" /> Alternativa8</a>.
        * Web application project based on Symfony + Vue - <a target="_blank" href="https://olala.brzodo.rs/"><img src="../assets/olala.svg" /> Olala Fast Food</a>.
    - Web application project based on Vue - <a target="_blank" href="https://kolmarvine.rs/"><img src="../assets/kolmarvine.svg" /> KolmarVine Lift Servis</a>.
</pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Drupal Development</span>: „Pronovix“ - Part Time Job (Apr 2021) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Selection process (Apr 2021)
    - Contractor setup (Jun 2021 - Oct 2021) - Onboarding, learning Drupal and working on 
      practical examples - <a href="https://github.com/GoranSubic/beta-goran-subic" target="_blank"><span style="font-size: 1em; color: grey;"><i class="fab fa-github"></i></span> Pronovix - forked project.</a>
    - Contract of Services - part time job (Nov 2021) - work on projects based on Pronovix’s 
      product created with Drupal (Web portal that provides structured documentation to 
      productize client APIs. It provides a searchable catalog of client API products).
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Web Developer</span>: „Fermicoding“ - Drupal Developer (Apr 2021) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Work on maintaining of project - website which besides presentation has online sale 
      and admin, based on Drupal 8 - <a target="_blank" href="https://regarden.com/"><img class="regarden-bck" src="../assets/regarden.svg" /> ReGarden</a>.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">IT Manager - System Administrator</span>: Faculty of Law, Novi Sad (Feb 2018 – Feb 2020) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Windows servers – Windows domain (domain controller with associated services),
      Windows Exchange.
    - Linux servers – Ubuntu (web server with websites – Drupal, Joomla, Wordpress).
    - VMware (ESXi), Hyper-V.
    - Migration of the website from external hosting to the faculty server, creation 
      and maintenance of website through CMS (Drupal CMS <a href="https://github.com/GoranSubic/conference" target="_blank"><span style="font-size: 1em; color: grey;"><i class="fab fa-github"></i></span> Conference Website</a>), 
      updating the content of the faculty website.
    - Imlementing antivirus protection (KAV).
    - Network equipment, printers.
    - Clients computers, sound systems, projectors.
    - Help desk.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Web Developer</span>: „CloudTech“ - PHP Developer (Dec 2015 – Feb 2018) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Work on maintaining of project - web site which beside presentation has online sale 
      and admin, based on Zend 1 framework and Backbone javascript framework.
    - Work project based on Symfony framework <a target="_blank" href="https://www.alexandar-cosmetics.com/"><img src="../assets/acfavicon.png" /> Alexandar Cosmetics</a>.
    - Through so far, my working experience was gained and expanded in working with Zend 
      and Symfony framework, Backbone framework, Twig templates, MySql Workbench, 
      Apache and Nginx web servers, Vagrant, Git (command line, SmartGit), Redmine.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">IT Manager</span>: „BB Trade“ AD (Jun 2011 – Maj 2015) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Service of IT Sector, working place „IT Manager“. 
    - Work on the implementation of an information system that is in constant development.
    - Team management and maintenance of computer network equipment related to POS.
    - Coordination of the external partners and consultant companies for the maintainance 
      and offering consulting services.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">System Administrator</span>: „Frikom” AD Padinska Skela (Avg 2007 – Maj 2011) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Service of IT, working place „Sistem administrator“.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Help Desk</span>: „Rodić M&B Invest” doo Novi Sad (Jun 2006 – Avg 2007) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Within the IT sector jobs Help Desk and System Administrator jobs.
                        </pre>
                    </p>
                </div>
                <div class="job" onclick="showJob(this)" onmouseover="jobLinkWeight(this)" onmouseout="jobLinkNormal(this)">
                    <p class="job-title">
                        <span class="job-name-link">Help Desk</span>: „Rodić M&B-CO” doo Kula (Dec 2005 – Jun 2006) <span class="job-desc-link">>></span>
                    </p>
                    <p class="job-desc" style="display: none;">
                        <pre>
    - Customer service Help Desk in the IT sector. 
      Installation and maintenance of computer software on the user level.
                        </pre>
                    </p>
                </div>
            </div>
            <hr class="m-0">
        </section>
    </div>
</template>

<script>
    export default {
    name: 'Experience',
    props: {
        msgExperience: String
    },
    methods: {
        showJob: function (jobElement) {
                var x = jobElement.querySelector('.job-desc');
                var nodes = document.getElementsByClassName('job-desc');

                nodes.forEach(function (node) {
                    if (node !== x && node.nodeType == Node.ELEMENT_NODE) {
                        node.style.display = "none";
                        var nodeLink = node.parentElement.querySelector('.job-desc-link');
                        nodeLink.innerHTML = ">>";
                    }
                    //    nodes = nodes.nextElementSibling || nodes.nextSibling;
                });

            x.style.display = (x.style.display == "block") ? "none" : "block";
            var xLink = x.parentElement.querySelector('.job-desc-link');
            xLink.innerHTML = (x.style.display == "block") ? "<>" : ">>";
        },
        jobLinkWeight: function (linkElement) {

            var x = linkElement.querySelector('.job-desc-link');
            var nodes = document.getElementsByClassName('job-desc-link');

            nodes.forEach(function (node) {
                if (node !== x && node.nodeType == Node.ELEMENT_NODE) {
                    node.style.fontWeight = "normal";
                    node.style.color = "#41b883";
                    node.style.letterSpacing  = "-5px";
                }
            });

            x.style.fontWeight = "bold";
            x.style.color = "green";
            //x.style.letterSpacing = "-4px";
        },
        jobLinkNormal: function (linkElement) {
            var x = linkElement.querySelector('.job-desc-link');
            x.style.fontWeight = "normal";
            x.style.color = "#41b883";
            x.style.letterSpacing = "-5px";
        }
        },
        created() {
            window.showJob = this.showJob;
            window.jobLinkWeight = this.jobLinkWeight;
            window.jobLinkNormal = this.jobLinkNormal;
        },
    }
</script>


<style>
    p.job-title {
        cursor: pointer;
    }

    a img {
        height: 1em;
    }

    .job-desc-link {
        color: rgb(65, 184, 131);
        letter-spacing: -5px;
    }

    .job-name-link {
        color: rgb(65, 184, 131);
    }

    .job-desc a {
        text-decoration: none;
        color: rgb(65, 184, 131);
    }

    .regarden-bck {
        background-color: #1b5e20;
        padding: 3px;
    }
</style>