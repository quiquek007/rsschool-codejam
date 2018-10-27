const assert = require('assert');
const make = require('../make.js');

describe('sumOfOther', () => {
  it('0', () => {
    const arr = make(1)(2)((a, b) => a + b);
    assert.deepEqual(arr, 3);
  });

  it('1', () => {
    const arr = make(1)(2)(3);
    assert.deepEqual(arr, 'It haven\'t last item as a function');
  });

  it('2', () => {
    const arr = make(4)(4)(2)((a, b) => a * b);
    assert.deepEqual(arr, 32);
  });

  it('3', () => {
    const arr = make(32)(11)(1)((a, b) => a - b);
    assert.deepEqual(arr, 20);
  });

  it('4', () => {
    const arr = make(32)(2)(4)((a, b) => a / b);
    assert.deepEqual(arr, 4);
  });
});
