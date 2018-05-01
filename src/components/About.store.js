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

	actions: {
		getRandonThought: ({ commit }, search) => {
			fetch(`https://www.reddit.com/subreddits/search.json?q=${search}`)
				.then(response => response.json())
				.then(json => {
					const thought = json.data.children[0].data.title;
					commit('SET_THOUGHT', thought);
				});
		},
	},

	getters: {
		aThoughtAboutZebras: ({ aThoughtAboutZebras }) => aThoughtAboutZebras,
	},
});
