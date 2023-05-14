// 2632. Curry

var curry = function (fn) {
  return function curried(...args1) {
    if (args1.length === fn.length) {
      return fn(...args1);
    } else {
      return (...args2) => curried(...args1, ...args2);
    }
  };
};
