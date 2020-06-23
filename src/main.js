import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import i18n from "./i18n";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import * as VueSpinnersCss from "vue-spinners-css";

AOS.init();
Vue.use(VueSpinnersCss)

Vue.use(VueRouter);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;

  if (!language) {
    language = 'en';
  }

  if (language != 'en' && language != 'ar') {
    language = 'en';
  }

  i18n.locale = language;

  next();
});

new Vue({
  i18n,
  render: h => h(App), router
}).$mount('#app');
