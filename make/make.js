module.exports = function make(data) {
  const conclusion = [data];
  let func;
  function composition(other) {
    if (typeof other === 'function') func = other;
    else conclusion.push(other);
    return composition;
  }
  composition.toString = () => {
    if (typeof func !== 'function') return 'It haven\'t last item as a function';
    return conclusion.reduce(func);
  };
  return composition;
};
