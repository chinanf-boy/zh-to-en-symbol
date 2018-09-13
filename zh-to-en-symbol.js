'use strict';
const isArray = require('is-array');
const isString = require('is-string');
const emojiStrPosition = require('emoji-str-position');

const Store = {
  // high level
  '“': '"',
  '‘': "'",
  '：': ':',
  '/': '/',
  // `ℴ`: '-',
  '”': '"',
  '。': '.',
  '|': '|',
  '「': '「',
  '」': '」',
  '（': '(',
  '）': ')',
};
// reg 1
const reg1 = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f]/;
// "。|？|！|，|、|；|：|“|”|‘|’|（|）|《|》|〈|〉|【|】|『|』|「|」|﹃|﹄|〔|〕|…|—|～|﹏"

// reg 2
const reg2 = str => {
  for (i of str) {
    if (
      '～｀！＠＃＄＾％＆＊（）＿＋｜－＝｛｝［］：＂；＜＞？，．／＼＇'.includes(
        i
      )
    ) {
      return true;
    }
  }
  return false;
};

const reg = iStr => reg1.test(iStr) || reg2(iStr);

// const numStore = [8220, 8216]

// 1. main
/**
 * @description Array<String>|String => string
 * @param {Array<String>|String} data
 * @returns {Array<String>|String}
 */
exports = module.exports = function fixZhtoEn(data) {
  if (isArray(data) && isString(data[0])) {
    data = data.map(x => {
      return halfStr(x);
    });

    return data;
  }

  if (isString(data)) {
    return halfStr(data);
  }

  throw new TypeError(`Expected a String/Array<String>, got ${typeof data}`);
};

// 2. find the zh symbol
/**
 * @description two half run
 * @param {String} str
 * @returns {String}
 */
const halfStr = str => {
  let data = emojiStrPosition(str); // get position in str with emoji

  let emojiPos = data.emojiPos;
  let onEmojiPos = data.emojiIdx;

  let newStr = '';
  for (let idx in str) {
    // skip emoji indexs & match Regex
    if (!onEmojiPos[idx] && reg(str[idx])) {
      newStr += charZh2En(str[idx]); // Fix
    } else {
      // default +=
      newStr += str[idx];
    }
  }
  return newStr;
};
const NUM = 65248;
// 3. transfrom
function charZh2En(str) {
  let tmp = '';
  for (let idxStr of str) {
    if (Object.keys(Store).some(x => x == idxStr)) {
      // high
      tmp += Store[idxStr];
    } else {
      // low
      tmp +=
        idxStr.charCodeAt() > NUM
          ? String.fromCharCode(idxStr.charCodeAt() - NUM)
          : idxStr;
    }
  }
  return tmp;
}
