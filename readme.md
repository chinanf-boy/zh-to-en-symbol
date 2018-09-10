# zh-to-en-symbol [![Build Status](https://travis-ci.org/chinanf-boy/zh-to-en-symbol.svg?branch=master)](https://travis-ci.org/chinanf-boy/zh-to-en-symbol) [![codecov](https://codecov.io/gh/chinanf-boy/zh-to-en-symbol/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/zh-to-en-symbol?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/zh-to-en-symbol-explain)

「 fix Zh symbol to En symbol 」

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install

```
npm install zh-to-en-symbol
```

```
yarn add zh-to-en-symbol
```

## Usage

```js
const zhToEnSymbol = require('zh-to-en-symbol');

zhToEnSymbol('unicorns');
//=> 'unicorns & rainbows'
```

## API

### zhToEnSymbol(input, [options])

#### input

| name: | input        |
| ----- | ------------ |
| Type: | `string`     |
| Desc: | Lorem ipsum. |

#### options

##### foo

| name:    | foo          |
| -------- | ------------ |
| Type:    | `boolean`    |
| Default: | `false`      |
| Desc:    | Lorem ipsum. |

## License

MIT © [chinanf-boy](http://llever.com)
