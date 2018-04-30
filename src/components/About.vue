<template>
	<div id="about">
		<h1>Things I like:</h1>
		<div class="thingsILike" v-for="thing of thingsIlike">{{ thing }}</div>

		<h1>What do you think about zebras? 🦓</h1>
		<input type="text" v-model="aThoughtAboutZebras">
		<div><b>Your thought on zebras is:</b> {{ aThoughtAboutZebras }}</div>
	</div>
</template>

<script>
export default {
	name: 'about',

	props: {
		thingsIlike: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			aThoughtAboutZebras: '',
		};
	},
};
</script>

<style scoped>
#about {
	border: 2px solid blue;
	margin: 1rem;
}
</style>
