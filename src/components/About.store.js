import Vue from 'vue';
import store from '../store';

store.registerModule('about', {
	state: {
		aThoughtAboutZebras: '',
	},

	mutations: {
		SET_THOUGHT: (state, thought) => {
			state.aThoughtAboutZebras = thought;
			Vue.set(state, 'aThoughtAboutZebras', thought);
		},
	},

	getters: {
		aThoughtAboutZebras: ({ aThoughtAboutZebras }) => aThoughtAboutZebras,
	},
});
