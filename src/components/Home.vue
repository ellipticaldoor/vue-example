<template>
	<div id="home">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'home',

	data() {
		return {
			msg: 'Welcome to Yours Vue.js App!',
		};
	},

	created() {
		console.log('Home component created 🎊');
	},

	destroyed() {
		console.log('Home component destroyed 💥');
	},
};
</script>
