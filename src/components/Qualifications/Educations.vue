<template>
  <div class="mh-education">
    <h3 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
    <div class="mh-education-deatils">
        <!-- Education Institutes-->
        <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" v-for="(item, index) in data" :key="index">
            <h4>{{ item.duration }} From <a href="#">{{ item.from }}</a></h4>
            <div class="mh-eduyear">{{item.year}}</div>
            <p>Score : {{ item.score }}</p>
        </div>                                
        
    </div>
</div>
</template>

<script>
export default {

    props: {
        data: {
            required: true,
            type: Array
        }
    }

}
</script>

<style>

</style>