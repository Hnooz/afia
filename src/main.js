import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from "./router";
import i18n from './i18n';

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
