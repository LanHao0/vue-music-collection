import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "./router";
import Home from "./Home";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#app')
