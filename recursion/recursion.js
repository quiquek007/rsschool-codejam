let result = [];
module.exports = function recursion(node, level = 0) {
  if ((node === undefined) || (Object.keys(node).length === 0)) return result;
  if (result[level] === undefined) result[level] = [node.value];
  else result[level].push(node.value);
  recursion(node.left, level + 1);
  recursion(node.right, level + 1);
  if (level === 0) {
    const conclusion = result;
    result = [];
    return conclusion;
  }
  return undefined;
};
