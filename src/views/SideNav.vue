<template>
    <aside id="mysidenav">
        <div id="my-img">
            <img class="my-img" alt="My image" src="../assets/GoranSubic.png">
        </div>

        <div id="social-data">
            <Social msgSocial="Social and profile documents on 'desktop' screens" />
        </div>
    </aside>
</template>

<script>
    import Social from './Social.vue'

    export default {
        name: 'SideNav',
        props: {
            msgSideNav: String
        },
        components: {
            Social,
        }
    }
</script>

<style>
    .my-img {
        max-width: 12rem;
        max-height: 12rem;
        border: 0.5rem solid rgb(65, 184, 131);
        display: block;
        margin: 0 auto;
        border-radius: 25%;
    }

    #about-data #social-data {
        display: none;
    }

    #mysidenav #social-data {
        display: block;
        margin-top: 3rem;
    }

    #mysidenav .social-icons {
        float: left;
        width: 100%;
    }

    #mysidenav .social-icons > a {
        margin: 5px;
    }
</style>