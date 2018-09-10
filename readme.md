# zh-to-en-symbol [![Build Status](https://travis-ci.org/chinanf-boy/zh-to-en-symbol.svg?branch=master)](https://travis-ci.org/chinanf-boy/zh-to-en-symbol) [![codecov](https://codecov.io/gh/chinanf-boy/zh-to-en-symbol/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/zh-to-en-symbol?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/zh-to-en-symbol-explain)

「 fix Zh symbol to En symbol 」

## Install

```
npm install zh-to-en-symbol
```

```
yarn add zh-to-en-symbol
```

## Usage

```js
const fixZhtoEn = require('zh-to-en-symbol');

let result = fixZhtoEn("你好阿baby'‘～｀！＠“＃＄＾");
//"你好阿baby''~`!@\"#$^"
```

## API

### zhToEnSymbol(string): newStr

#### string

| name: | string           |
| ----- | ---------------- |
| Type: | `string`         |
| Desc: | zh symbol string |

#### newStr

| name: | newStr           |
| ----- | ---------------- |
| Type: | `string`         |
| Desc: | en symbol string |

<!-- #### options

##### foo

| name:    | foo          |
| -------- | ------------ |
| Type:    | `boolean`    |
| Default: | `false`      |
| Desc:    | Lorem ipsum. | -->

## concat

- [emoji-str-position](https://github.com/chinanf-boy/emoji-str-position#data) emoji in str position

## Use by

- [translate-mds](https://github.com/chinanf-boy/translate-mds) translate you md files

## License

MIT © [chinanf-boy](http://llever.com)
