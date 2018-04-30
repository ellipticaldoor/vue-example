# Components

```shell
mkdir components
touch src/components/Bitcoin.vue

[edit] src/components/Bitcoin.vue
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

[edit] src/App.vue
import Bitcoin from './components/Bitcoin.vue';

components: { Bitcoin },

<Bitcoin />

touch src/components/About.vue

[edit] src/components/About.vue
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

    data() {
        return {
            thingsIlike: ['🎸', '🏝', '🤖'],
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

[edit] src/App.vue
import About from './components/About.vue';

components: { About },

data() {
    return {
        msg: 'Welcome to Yours Vue.js App!',
        foodCounter: 0,
    };
},

<About />

// Props example
[edit] src/App.vue

<About v-bind:thingsIlike="['🎸', '🏝', '🤖']" />
<About :thingsIlike="['🌞', '🍔']" />

[edit] src/components/About.vue

props: ['thingsIlike'],

data() {
    return {
        aThoughtAboutZebras: '',
    };
},

// Prop validation

[edit] src/components/About.vue

props: {
    thingsIlike: {
        type: Array,
        required: true,
    },
},
```
