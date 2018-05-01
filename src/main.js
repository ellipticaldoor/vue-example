import Vue from 'vue';
import App from './App.vue';
import './style.scss';
import store from './store';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router,
});
