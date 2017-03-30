# inferno banana

a simple inferno starter with no webpack, no babel and no configuration

has livereloading (not hotloading), bundling, minifying, transpiling

uses browserify, bublé and uglifyjs

this is the entire build process:

```sh
buble src -o build; browserify build/index.js | uglifyjs > public/bumble.js
```

but that's available as `yarn build` or `npm run build`


## getting started

```sh
git clone git@github.com:chee/inferno-starter
cd inferno-starter
yarn
```

## in development

i'd open up tmux and have a window for each of `watch`, `serve` and `reload`

### watch
(building your js every time you save)

```sh
yarn watch
```

### livereload
(reloading your js when it is built)
(requires livereload browser extension)

```sh
yarn reload
```

### serve
(serves your code on port :1890)

```sh
yarn serve
```

## building

```sh
yarn build
```

## todo

* add jsx support in watch (maybe?)
* take out livereload when building for production
* don't rely on python2 for serving
* cry that she is gone
* die in a hole
