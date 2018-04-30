# Methods

```shell
[edit] src/App.vue
// Function example
<button v-on:click="giveMePizza">Click me 🍕</button>

methods: {
    giveMePizza() {
        console.log('🍕🍕🍕');
    },
},

// Methods in Inline Handlers
<button v-on:click="giveMe('🥦')">🥦</button>

foodCounter: 0,

giveMe(food) {
    this.foodCounter += 1;
    console.log(food.repeat(this.foodCounter));
},

// Avocado reactiveness
<div>{{ '🥑'.repeat(this.foodCounter) }}</div>
```
