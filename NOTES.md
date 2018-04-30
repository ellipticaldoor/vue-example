# v-for and v-model

```shell
[edit] src/App.vue
// v-for

<h1>Things I like:</h1>
<div class="thingsILike" v-for="thing of thingsIlike">{{ thing }}</div>

.thingsILike {
    font-size: 300%;
}

// data
thingsIlike: ['🎸', '🏝', '🤖'],

// v-model
<h1>What do you think about zebras? 🦓</h1>
<input type="text" v-model="aThoughtAboutZebras">
<div><b>Your thought on zebras is:</b> {{ aThoughtAboutZebras }}</div>

// data
aThoughtAboutZebras: '',
```
