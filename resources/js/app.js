require('./bootstrap');

import Vue from 'vue';
import router from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import common from './common'
Vue.mixin(common)

Vue.component('main-app', require('./components/mainApp.vue').default)

const app = new Vue({
    el: '#app',
    router
});
