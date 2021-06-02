<template>
              <section class="mh-home" id="mh-home">
                <div class="home-ovimg">
                    <div class="container">
                        <div class="row xs-column-reverse section-separator vertical-middle-content home-padding">
                            <div class="col-sm-6">
                                <div class="mh-header-info">
                                    <div class="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                        <span>Hello I'm</span>
                                    </div>
                                    
                                    <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">{{info.name}}</h2>
                                    <h4 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">{{ info.designation }}</h4>
                                    
                                    <ul>
                                        <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i class="fa fa-envelope"></i><a href="mailto:">{{ info.email }}</a></li>
                                        <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i class="fa fa-phone"></i><a href="callto:">{{ info.phone}}</a></li>
                                        <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i class="fa fa-map-marker"></i><address>{{ info.address }}</address></li>
                                    </ul>
                                    
                                    <social-icons></social-icons>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                    <div class="img-border">
                                        <img src="../assets/images/hero.png" alt=""  class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
</template>

<script>
import SocialIcons from './Utilities/SocialIcons.vue'
    export default {
        data : () => ({
            info: {
                    name: 'Anuj Gajbhiye',
                    designation: 'Full-Stack Web Developer',
                    email: 'gajbhiyeanuj97@gmail.com',
                    phone: '+91-8698433614',
                    address: 'Nagpur, Maharashtra - 440034'
                }
        }),
        components: {
            SocialIcons
        }
        
    }
</script>

<style scoped>

    @media (min-width:1025px) { 
        /* big landscape tablets, laptops, and desktops */ 
        .mh-home {
            background-image: url(../assets/images/header-bg-2.png);
        }
    }

</style>
