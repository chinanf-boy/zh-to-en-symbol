import test from 'ava';
import m from '.';

test('Err: input <number>', t => {
  const err = t.throws(() => {
    m(123);
  }, TypeError);
  t.is(err.message, 'Expected a String/Array<String>, got number');
});

test("string 你好阿baby'‘～｀！＠“＃＄＾", t => {
  let result = m("你好阿baby'‘～｀！＠“＃＄＾");

  t.is(result, "你好阿baby''~`!@\"#$^");
});

test('string .....', t => {
  let result = m('......');

  t.is(result, `......`);
});

test('string ` - `', t => {
  let result = m(' - ');

  t.is(result, ` - `);
});

test('string 「〔', t => {
  let result = m('「〔');

  t.is(result, `「〔`);
});

test('string ||', t => {
  let result = m(`||`);

  t.is(result, `||`);
});

test('string Array', t => {
  let result = m([`你好阿baby'‘～｀`, `！＠“＃＄＾`]);
  t.deepEqual(result, [`你好阿baby''~\``, `!@"#$^`]);
});

test('string emoji 😊', t => {
  let result = m('👪⌚😊');

  t.is(result, '👪⌚😊');
});

test('string Array emoji ❤️⛱️', t => {
  let result = m([`你好阿baby❤️'‘～｀`, `！＠“⛱️＃＄＾`]);
  t.deepEqual(result, [`你好阿baby❤️''~\``, `!@"⛱️#$^`]);
});
