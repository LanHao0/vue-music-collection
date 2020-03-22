import Vue from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import router from "./router";
import Home from "./Home";
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;

Vue.use(VueLazyLoad,{
  preLoad:1.3,
  attempt:1
});

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app');
