# Install Vue

```shell
[edit] index.html
<div id="app"></div>

[edit] src/main.js
import Vue from 'vue';

yarn add -D eslint eslint-plugin-vue parcel-plugin-eslint
[edit] .eslintrc.js
module.exports = {
    extends: ['eslint:recommended', 'plugin:vue/essential'],
};

[edit] src/main.js
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    render: h => h(App),
});

touch src/App.vue
[edit] src/App.vue
<template>
    <div id="app">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'app',

    data() {
        return {
            msg: 'Welcome to Your Vue.js App!',
        };
    },
};
</script>
```
