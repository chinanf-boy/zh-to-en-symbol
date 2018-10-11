import test from 'ava';
import m from '.';

test('Err: input <number>', t => {
  const err = t.throws(() => {
    m(123);
  }, TypeError);
  t.is(err.message, 'Expected a String/Array<String>, got number');
});

test("string 你好阿baby'‘～｀！＠“＃＄＾", t => {
  const result = m("你好阿baby'‘～｀！＠“＃＄＾");

  t.is(result, "你好阿baby''~`!@\"#$^");
});

test('string http / asd / sdf', t => {
  const result = m('http / asd / sdf');

  t.is(result, 'http/asd/sdf');
});

test('string .....', t => {
  const result = m('......');

  t.is(result, `......`);
});

test('string ` - `', t => {
  const result = m(' - ');

  t.is(result, ` - `);
});

test('string 「〔', t => {
  const result = m('「〔');

  t.is(result, `「〔`);
});

test('string ||', t => {
  const result = m(`||`);

  t.is(result, `||`);
});

test('string Array', t => {
  const result = m([`你好阿baby'‘～｀`, `！＠“＃＄＾`]);
  t.deepEqual(result, [`你好阿baby''~\``, `!@"#$^`]);
});

test('string emoji 😊', t => {
  const result = m('👪⌚😊');

  t.is(result, '👪⌚😊');
});

test('string Array emoji ❤️⛱️', t => {
  const result = m([`你好阿baby❤️'‘～｀`, `！＠“⛱️＃＄＾`]);
  t.deepEqual(result, [`你好阿baby❤️''~\``, `!@"⛱️#$^`]);
});
