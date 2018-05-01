# Vuex

Schema: https://vuex.vuejs.org/en/images/vuex.png

```shell
touch src/store
[edit] touch src/store
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store();

[edit] src/main.js
import store from './store';

new Vue({
    el: '#app',
    render: h => h(App),
    store,
});

touch src/components/About.store.js
[edit] src/components/About.store.js
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

[edit] src/components/About.vue

<input type="text" v-on:keyup.enter="setThought">
<div><b>Your thought on zebras is:</b> {{ aThoughtAboutZebras }}</div>

import './About.store';

methods: {
    setThought() {
        const thought = event.target.value;
        this.$store.commit('SET_THOUGHT', thought);
    },
},

computed: {
    aThoughtAboutZebras() {
        return this.$store.getters.aThoughtAboutZebras;
    },
},

// Show vue devtools
```
