<template>
    <div>
        <the-header></the-header>
        <the-banner></the-banner>
        <about-me></about-me>
        <skills></skills>
        <metrics></metrics>
        <qualification></qualification>
        <my-projects></my-projects>
        <contact-me></contact-me>
    </div>
</template>

<script>
    import TheBanner from './TheBanner.vue'
    import TheHeader from './TheHeader.vue'
    import AboutMe from './AboutMe'
    import Skills from "./Skills";
    import Metrics from './Metrics.vue';
    import Qualification from './Qualifications/Qualification.vue';
    import MyProjects from './MyProjects.vue';
    import ContactMe from './ContactMe.vue';

    
    export default {
        components: { TheHeader, TheBanner, AboutMe, Skills, Metrics, Qualification, MyProjects, ContactMe }
    }
</script>

<style>

</style>