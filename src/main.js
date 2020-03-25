/*
入口JS
* */
import Vue from 'vue'
import App from './App'
import router from "./router/index";
import fcx from "./components/FooterGuider/FooterGuider"


/* eslint-disable no-new */

new Vue({
   el: '#app',
  render: h => h(App),//render:function (h) {h(App)
  router

})


