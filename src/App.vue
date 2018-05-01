<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<button v-on:click="giveMePizza">Click me 🍕</button>
		<button v-on:click="giveMe('🥦')">🥦</button>

		<router-link to="/">Home</router-link>
		<router-link to="/bitcoin">Bitcoin</router-link>

		<router-view />

		<div>{{ '🥑'.repeat(this.foodCounter) }}</div>

		<About v-bind:thingsIlike="['🎸', '🏝', '🤖']" />
		<About :thingsIlike="['🌞', '🍔']" />
	</div>
</template>

<script>
import Bitcoin from './components/Bitcoin.vue';
import About from './components/About.vue';

export default {
	name: 'app',

	components: { Bitcoin, About },

	data() {
		return {
			msg: 'Welcome to Yours Vue.js App!',
			foodCounter: 0,
		};
	},

	methods: {
		giveMePizza() {
			console.log('🍕🍕🍕');
		},

		giveMe(food) {
			this.foodCounter += 1;
			console.log(food.repeat(this.foodCounter));
		},
	},

	watch: {
		foodCounter() {
			console.log('foodCounter increased');
		},
	},
};
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>
