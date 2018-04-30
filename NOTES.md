# Install parcel

```shell
yarn global add parcel-bundler
yarn init -y

touch index.html
<html>
    <body>
      <script src="./src/main.js"></script>
    </body>
</html>

mkdir src
touch src/main.js
console.log('hello world :)')

package.json
"scripts": {
    "start": "parcel index.html"
}
```
