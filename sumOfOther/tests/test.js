const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');

describe('sumOfOther', () => {
  it('0', () => {
    const arr = sumOfOther([[1, 2, 3], [2]]);
    assert.deepEqual(arr, 'Array is not one-dimensional!');
  });

  it('1', () => {
    const arr = sumOfOther([1, 3, '8']);
    assert.deepEqual(arr, 'Array have non-integer items!');
  });

  it('2', () => {
    const arr = sumOfOther([1, 3, {}]);
    assert.deepEqual(arr, 'Array have non-integer items!');
  });

  it('3', () => {
    const arr = sumOfOther([1, 2, 3]);
    assert.deepEqual(arr, [5, 4, 3]);
  });

  it('5', () => {
    const arr = sumOfOther([]);
    assert.deepEqual(arr, []);
  });

  it('6', () => {
    const arr = sumOfOther([1, 1, 1]);
    assert.deepEqual(arr, [2, 2, 2]);
  });
});
