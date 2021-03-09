// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueSmoothScroll from 'vue2-smooth-scroll'
import ScrollAnimation from './directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.use(VueSmoothScroll, {
  duration : 600,
  updateHistory : false,
  //offset: -50 ecart mais pas besoin
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
