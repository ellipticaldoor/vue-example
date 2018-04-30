<template>
	<div id="app">
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
			thingsIlike: ['🎸', '🏝', '🤖'],
			aThoughtAboutZebras: '',
		};
	},
};
</script>
