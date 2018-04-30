# Install parcel

```shell
yarn global add parcel-bundler
yarn init -y

touch index.html
<html>
    <head></head>
    <body>
        <script src="./src/main.js"></script>
    </body>
</html>

mkdir src
touch src/main.js
[edit] src/main.js
console.log('hello world :)');

[edit] package.json
"scripts": {
    "start": "parcel index.html"
}
```

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
