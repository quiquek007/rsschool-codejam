const assert = require('assert');
const recursion = require('../recursion.js');

describe('recursion', () => {
  it('0', () => {
    const tree = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(tree, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('1', () => {
    const tree = recursion({});
    assert.deepEqual(tree, []);
  });

  it('2', () => {
    const tree = recursion({"value":100,"left":{"value":90,"left":{"value":70,"left":{"value":66}},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(tree, [[100], [90, 120], [70, 99, 110, 130], [66]]);
  });

  it('3', () => {
    const tree = recursion({ value: 'D12', left: { value: 'Hello, World!' }, right: { value: 'somestring' } });
    assert.deepEqual(tree, [['D12'], ['Hello, World!', 'somestring']]);
  });

  it('4', () => {
    const tree = recursion({ value: { 1: 'This' }, left: { value: { 2: 'is' } }, right: { value: { 3: 'Sparta' } } });
    assert.deepEqual(tree, [[{ 1: 'This' }], [{ 2: 'is' }, { 3: 'Sparta' }]]);
  });
});
