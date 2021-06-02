<template>
   <div class="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
        <ul>
            <li v-for="(item, index) in skillset" :key="index"><span>{{item}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillset: [
                'Vue.JS', 'Angular 2+', 'SQL','Mongo DB', 'ColdFusion', 'NodeJS' , 'HTML', 'CSS', 'Javascript', 'Flutter' , 'Firebase', 'Github'
            ]
        }
    }

}
</script>

<style>

</style>