# Computed

```shell
[edit] src/App.vue
// First add code using methods

<button v-on:click="minedTimes += 1">Mine bitcoins ⛏</button>
<div>My bitcoins: {{ bitcoins() }}</div>
<div>{{ '💰'.repeat(bitcoins()) }}</div>

// data
minedTimes: 0,

// methods
bitcoins() {
    console.log('You asked how bitcoin you have');
    return this.minedTimes * 2;
},

// Computed example
[edit] src/App.vue

<button v-on:click="minedTimes += 1">Mine bitcoins ⛏</button>
<div>My bitcoins: {{ bitcoins }}</div>
<div>{{ '💰'.repeat(bitcoins) }}</div>

// computed
bitcoins() {
    console.log('You asked how bitcoin you have');
    return this.minedTimes * 2;
},
```
