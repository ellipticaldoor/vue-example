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
