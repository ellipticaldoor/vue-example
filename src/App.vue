<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<button v-on:click="giveMePizza">Click me 🍕</button>
		<button v-on:click="giveMe('🥦')">🥦</button>

		<div>{{ '🥑'.repeat(this.foodCounter) }}</div>

		<button v-on:click="minedTimes += 1">Mine bitcoins ⛏</button>
		<div>My bitcoins: {{ bitcoins }}</div>
		<div>{{ '💰'.repeat(bitcoins) }}</div>

		<h1>Things I like:</h1>
		<div class="thingsILike" v-for="thing of thingsIlike">{{ thing }}</div>

		<h1>What do you think about zebras? 🦓</h1>
		<input type="text" v-model="aThoughtAboutZebras">
		<div><b>Your thought on zebras is:</b> {{ aThoughtAboutZebras }}</div>
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
			thingsIlike: ['🎸', '🏝', '🤖'],
			aThoughtAboutZebras: '',
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
