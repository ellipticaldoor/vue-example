<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<button v-on:click="giveMePizza">Click me 🍕</button>
		<button v-on:click="giveMe('🥦')">🥦</button>

		<div>{{ '🥑'.repeat(this.foodCounter) }}</div>
	</div>
</template>

<script>
export default {
	name: 'app',

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
};
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>
