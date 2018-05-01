# Routes

Schema: https://vuex.vuejs.org/en/images/vuex.png

```shell
touch src/router.js
[edit] src/router.js
import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Bitcoin from './components/Bitcoin.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/bitcoin',
            name: 'Bitcoin',
            component: Bitcoin,
        },
    ],
});

[edit] src/main.js
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
});


touch src/components/Home.js
[edit] src/components/Home.js
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
};
</script>

[edit] src/App.js
<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <button v-on:click="giveMePizza">Click me 🍕</button>
        <button v-on:click="giveMe('🥦')">🥦</button>

        <router-link to="/">Home</router-link>
        <router-link to="/bitcoin">Bitcoin</router-link>

        <router-view />

        <div>{{ '🥑'.repeat(this.foodCounter) }}</div>

        <About v-bind:thingsIlike="['🎸', '🏝', '🤖']" />
        <About :thingsIlike="['🌞', '🍔']" />
    </div>
</template>
```
