require('./bootstrap');

import Vue from 'vue';
import router from './router';

Vue.component('main-app', require('./components/mainApp.vue').default)

const app = new Vue({
    el: '#app',
    router
});
