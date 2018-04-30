<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<button v-on:click="giveMePizza">Click me 🍕</button>
		<button v-on:click="giveMe('🥦')">🥦</button>

		<div>{{ '🥑'.repeat(this.foodCounter) }}</div>

		<button v-on:click="minedTimes += 1">Mine bitcoins ⛏</button>
		<div>My bitcoins: {{ bitcoins }}</div>
		<div>{{ '💰'.repeat(bitcoins) }}</div>
	</div>
</template>

<script>
export default {
	name: 'app',

	data() {
		return {
			msg: 'Welcome to Yours Vue.js App!',
			foodCounter: 0,
			minedTimes: 0,
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

	computed: {
		bitcoins() {
			console.log('You asked how bitcoin you have');
			return this.minedTimes * 2;
		},
	},
};
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>
