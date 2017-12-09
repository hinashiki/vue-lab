import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.config.devtools = true;
Vue.use(VueRouter);

import Home from './pages/home.vue';
var Foo = {
  template: '<p>foo</p>'
};
var Bar = {
  template: '<p>bar</p>'
};

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});
var app = new Vue({
  router,
  el: '#app'
}).$mount('#app');
