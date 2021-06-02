<template>
   <section class="mh-experince" id="mh-experience">
                <div class="bolor-overlay">
                    <div class="container">
                        <div class="row section-separator">
                            <div class="col-sm-12 col-md-6">
                                <educations :data="educationData"></educations>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <experience :data="jobData"></experience>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>
    import Educations from './Educations.vue'
    import Experience from './Experience.vue'

    export default {
    components: { Educations, Experience },
    data: () => ({
        educationData: [
            {
                duration: 'Engineering in Information Technology',
                from: 'Yeshwantrao Chavan College of Engineering, Nagpur',
                year: '2015-2019',
                score: '7.98 CGPA'
            },
            {
                duration: '11th to 12th',
                from: 'Shree Rajendra Jr. College',
                year: '2013-2015',
                score: '76%'
            },
            {
                duration: '2nd Std. to 10th Std.',
                from: "St' Xavier's High School",
                year: '2005-2013',
                score: '8.6 CGPA'
            },
            {
                duration: 'Kindergarden to 1st',
                from: 'Little Rose Convent',
                year: '2003-2005',

            }
        ],
        jobData: [
            {
                designation: 'Senior Software Engineer',
                from: 'ValueLabs',
                year: 'Jun 2020 - Present',
                responsiblities: [
                    'Working as a Full stack developer for a project related to Payments and services using technologies such as Vue Js, Coldfusion, SQL'
                ]
            },
            {
                designation: 'Software Engineer',
                from: 'ValueLabs',
                year: 'Jun 2019 – Aug 2020',
                responsiblities: [
                    'Worked as a FrontEnd developer on a Healthcare related project using technologies such as Angular 8, JavaScript, Bootstrap, Angular Material, HTML 5 and CSS',
                    'Worked with Vanilla JavaScript and JEST testing tool to create custom functions for Excel for an Insurance related project.'
                ]
            },
            {
                designation: 'Internship',
                from: 'Blue Planet Infosolutions Pvt. Ltd., India',
                year: 'Jun 2018 – Nov 2018',
                responsiblities: [
                    'Worked as an Android Developer and created the Application regarding the project concept of reward points program between students and teachers.'
                ]
            },
            {
                designation: 'Internship',
                from: 'Gotisheel Technologies LLP',
                year: 'May 2018 - Jun 2018 ',
                responsiblities: [
                    'Worked as an Android developer and helped in setting up the Application for newly formed venture regarding travel and accommodations.'
                ]
            }
        ]
    })

    }
</script>

<style>

</style>