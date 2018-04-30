<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<button>Click me 🍕</button>
	</div>
</template>

<script>
export default {
	name: 'app',

	data() {
		return {
			msg: 'Welcome to Your Vue.js App!',
		};
	},
};
</script>

<style lang="scss" scoped>
$percentage: 150%;
button {
	font-size: $percentage;
}
</style>
