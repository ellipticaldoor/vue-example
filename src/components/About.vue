<template>
	<div id="about">
		<h1>Things I like:</h1>
		<div class="thingsILike" v-for="thing of thingsIlike">{{ thing }}</div>

		<h1>What do you think about zebras? 🦓</h1>
		<input type="text" v-on:keyup.enter="setThought">
		<input type="text" v-on:keyup.enter="searchThought" placeholder="async search">
		<div><b>Your thought on zebras is:</b> {{ aThoughtAboutZebras }}</div>
	</div>
</template>

<script>
import './About.store';

export default {
	name: 'about',

	props: {
		thingsIlike: {
			type: Array,
			required: true,
		},
	},

	methods: {
		setThought() {
			const thought = event.target.value;
			this.$store.commit('SET_THOUGHT', thought);
		},

		searchThought() {
			const search = event.target.value;
			this.$store.dispatch('getRandonThought', search);
		},
	},

	computed: {
		aThoughtAboutZebras() {
			return this.$store.getters.aThoughtAboutZebras;
		},
	},
};
</script>

<style scoped>
#about {
	border: 2px solid blue;
	margin: 1rem;
}
</style>
