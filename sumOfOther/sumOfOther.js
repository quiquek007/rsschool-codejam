module.exports = function sumOfOther(array) {
  const arr = array;
  const demenssion = arr.filter(item => Array.isArray(item)).length;
  if (demenssion > 0) return 'Array is not one-dimensional!';
  if ((arr.filter(item => Number.isInteger(item)).length) !== arr.length) {
    return 'Array have non-integer items!';
  }
  const sum = arr.reduce((a, b) => a + b, 0);
  return arr.map(item => sum - item);
};
