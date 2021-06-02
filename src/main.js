import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('@/assets/icons/font-awesome-4.7.0/css/font-awesome.min.css');
require('@/assets/plugins/css/bootstrap.min.css');
require('@/assets/plugins/css/animate.css');
require('@/assets/plugins/css/jquery.fancybox.min.css');
require('@/assets/css/styles.css');
require('@/assets/css/responsive.css');
require('@/assets/css/colors/purple.css');
require('@/assets/css/global.css');


new Vue({
  render: h => h(App),
}).$mount('#app')
