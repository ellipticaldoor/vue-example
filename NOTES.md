# Install Sass

```shell
touch src/style.scss
[edit] src/style.scss
$some-unit: 5rem;

body {
    text-align: center;
    border: 5px solid black;
    margin: $some-unit;
    padding: $some-unit;
}

[edit] src/main.js
import './style.scss';

[edit] src/app.vue
<button>Click me 🍕</button>

<style>
button {
    font-size: 150%;
}
</style>

[edit] src/app.vue
<style scoped>

[edit] src/app.vue
<style lang="scss" scoped>
$percentage: 150%;
button {
    font-size: $percentage;
}
</style>

<style lang="scss" scoped>
@import './App.scss';
</style>

import './App.scss';
```
