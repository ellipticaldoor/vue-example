<template>
	<div id="bitcoin">
		<button v-on:click="minedTimes += 1">Mine bitcoins ⛏</button>
		<div>My bitcoins: {{ bitcoins }}</div>
		<div>{{ '💰'.repeat(bitcoins) }}</div>
	</div>
</template>

<script>
export default {
	name: 'bitcoin',

	data() {
		return {
			minedTimes: 0,
		};
	},

	computed: {
		bitcoins() {
			console.log('You asked how bitcoin you have');
			return this.minedTimes * 2;
		},
	},
};
</script>

<style scoped>
#bitcoin {
	border: 2px solid green;
	margin: 1rem;
}
</style>
