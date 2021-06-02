<template>
    <div class="mh-work">
        <h3>Work Experience</h3>
        <div class="mh-experience-deatils">
            <!-- Education Institutes-->
            <div class="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" v-for="(item, index) in data" :key="index">
                <h4>{{item.designation}} From <a href="#">{{item.from}}</a></h4>
                <div class="mh-eduyear">{{item.year}}</div>
                <span>Responsibility :</span>
                <ul class="work-responsibility">
                    <li  v-for="(item2, index2) in item.responsiblities" :key="index2"><i class="fa fa-circle"></i>{{item2}}</li>
                </ul>
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