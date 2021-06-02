<template>
   <section class="mh-skills" id="mh-skills">
        <div class="container">
            <div class="row section-separator">
                <div class="section-title text-center col-sm-12">
                    <!--<h2>Skills</h2>-->
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="mh-skills-inner">
                        <div class="mh-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <h3>Technical Skills</h3>
                            <div class="each-skills">
                                <div class="candidatos" v-for="(value, key, index) in technicalSkills" :key="index">
                                    <div class="parcial">
                                        <div class="info">
                                            <div class="nome">{{key}}</div>
                                            <div class="percentagem-num">{{value}}%</div>
                                        </div>
                                        <div class="progressBar">
                                            <div class="percentagem" :style="`width: ${value}%;`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="mh-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                        <h3>Professional Skills</h3>
                        <ul class="mh-professional-progress" >
                            <li v-for="(value, key, index) in professionalSkills" :key="index">
                                <vue-circular-progress :totalSteps="100" :completedSteps="value" :diameter="120">{{ value }}%</vue-circular-progress>
                                <div class="pr-skill-name">{{ key }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueCircularProgress from './Utilities/VueCircularProgress.vue'
export default {
  components: { VueCircularProgress },
  data: () => ({
      technicalSkills: {
         
          'Vue.Js' : 90,
           Javascript: 86,
           Coldfusion: 68,
          'Angular 8': 75,
          Flutter : 78,
          'SQL': 45
      },
      professionalSkills: 
          {
              'Communication' : 90,
              'Team Work' : 80,
              'Project Management' : 75,
              'Creativity': 65
          }
      
  })

}
</script>

<style>

</style>