// 2627. Debounce

var debounce = function (fn, t) {
  let time = null;

  return function (...args) {
    if (time) {
      clearTimeout(time);
      time = null;
    }

    time = setTimeout(() => {
      return fn(...args);
    }, t);
  };
};
