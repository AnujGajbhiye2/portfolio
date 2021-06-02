<template>
  <section class="mh-about" id="mh-about">
                <div class="container">
                    <div class="row ">
                        <div class="col-sm-12 col-md-6">
                            <div class="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                <img src="../assets/images/aboutme.png" alt="" class="img-fluid">
                                <a class="no-show" href='https://www.freepik.com/vectors/technology'>Technology vector created by stories - www.freepik.com</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="mh-about-inner">
                                <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                                <p class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Hello, I’m a Anuj, Full Stack Web-developer based in India. 
                                I have rich experience in Cross Platform mobile apps,  Website design & building 
                                and customization. Also I am good at</p>
                                <vue-chip></vue-chip>
                                <a :href="cvlink" class="btn btn-fill wow fadeInUp" target="_blank" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i class="fa fa-download"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<script>

    import VueChip from './Utilities/VueChip'

    export default {

        components:{
            VueChip
        },

        data: () => ({
            cvlink: 'https://drive.google.com/file/d/1JJjk_b3-cNbwnoCxCe5PLiRyXJ8Ei8HP/view?usp=sharing'
        })

}
</script>

<style>

</style>