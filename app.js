import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bootstrap from 'bootstrap';
Vue.config.devtools = true;
Vue.use(VueRouter);

import Home from './pages/Home.vue';
import Foo from './pages/Foo.vue';
import Bar from './pages/Bar.vue';

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});
var app = new Vue({
  router,
  el: '#app',
  data: function(){
    return {
      error: null,
      isLoading: false
    }
  }
}).$mount('#app');
