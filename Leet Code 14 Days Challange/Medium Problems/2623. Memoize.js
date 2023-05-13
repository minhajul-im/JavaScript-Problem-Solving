// 2623. Memoize

function memoize(fn) {
  const obj = {};

  return function (...args) {
    if (obj[args] !== undefined) return obj[args];

    obj[args] = fn(...args);

    return obj[args];
  };
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    let key = "";

    for (const arg of args) {
      key += "," + arg;
    }

    if (key in cache) {
      return cache[key];
    }

    const funcOut = fn(...args);
    cache[key] = funcOut;

    return funcOut;
  };
}
