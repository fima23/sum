const assert = require('assert');
const sum = require('./src/index.js');

it('easy test', () => {
  assert.equal((sum(1 ,2)), 3);
});

it('medium test', () => {
  assert.equal((sum(123456789, 987654321)), 1111111110);
});

it('hard test', () => {
  assert.equal(
    (
      sum(
        111111111111111111111111111111111111111111111111111111111111,
        222222222222222222222222222222222222222222222222222222222222
      )
    ),
    333333333333333333333333333333333333333333333333333333333333);
});

it('bad test', () => {
  assert.notEqual((sum(null, null)), (sum(null, null)));
});
