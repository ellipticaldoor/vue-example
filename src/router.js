import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Bitcoin from './components/Bitcoin.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/bitcoin',
			name: 'Bitcoin',
			component: Bitcoin,
		},
	],
});
