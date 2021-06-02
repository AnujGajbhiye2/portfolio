<template>
   <!--
            ===================
            SERVICE
            ===================
            -->
            <section class="mh-service">
                <div class="container">
                    <div class="row section-separator">
                        <div class="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            <h2>What I do</h2>
                        </div>
                        <div class="col-md-4 col-sm-12" v-for="(item, index) in skillset" :key="index">
                            <div class="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <!-- <i class="fa fa-bullseye purple-color"></i> -->
                                <custom-icon :source="item.icon"></custom-icon>
                                <h3>{{item.heading}}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>       
</template>

<script>
import CustomIcon from './Utilities/CustomIcon.vue'
export default {
  components: { CustomIcon },

  data : () => ({
      skillset: [
          {
              icon: 'https://cdn.lordicon.com/jqeuwnmb.json',
              heading: 'Mobile App Development '
          },
          {
            //   icon: 'https://cdn.lordicon.com//ochimkct.json',
            //   icon: 'https://cdn.lordicon.com//buqfvmsj.json',
              icon:'https://cdn.lordicon.com//qhgmphtg.json',
              heading: 'Web Development'
          },
          {
            //   icon: 'https://cdn.lordicon.com//sbiheqdr.json',
            //   icon: 'https://cdn.lordicon.com//anihkfxp.json',
              icon: 'https://cdn.lordicon.com//ochimkct.json',
              heading: 'Backend Development'
          },
        //   {
        //       icon: 'https://cdn.lordicon.com//ybfcwnqv.json',
        //       heading: 'Code Management'
        //   },
        //   {
        //       icon: 'https://cdn.lordicon.com//fgkmrslx.json',
        //       heading: 'UI design'
        //   }
      ]
  })

}
</script>

<style>

</style>