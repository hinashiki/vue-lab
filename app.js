// import css
import 'bootstrap/dist/css/bootstrap.min.css';
// import js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bootstrap from 'bootstrap';
// import pages
import Home from './pages/Home.vue';
import Foo from './pages/Foo.vue';
import Bar from './pages/Bar.vue';
// import components
import Cover from './components/Cover.vue';

// axios settings
axios.interceptors.request.use(function (config) {
  app.isLoading = true;
  app.error = null;
  return config;
},function(error){
  app.isLoading = true;
  app.error = null;
  return Promise.reject(error);
});
axios.interceptors.response.use(function (config) {
  app.isLoading = false;
  return config;
},function(error){
  app.isLoading = false;
  return Promise.reject(error);
});

// create router
Vue.use(VueRouter);
var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});

// start vue
var app = new Vue({
  router,
  el: '#app',
  components: {
    'com-cover': Cover
  },
  data: function(){
    return {
      error: null,
      isLoading: false
    }
  }
}).$mount('#app');

