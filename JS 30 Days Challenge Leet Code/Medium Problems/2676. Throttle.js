// 2676. Throttle

var throttle = function (fn, t) {
  let nextTime = 0;
  let id = null;

  return function (...args) {
    let currentTime = new Date().getTime();
    clearTimeout(id);

    id = setTimeout(() => {
      fn(...args);
      nextTime = new Date().getTime() + t;
    }, nextTime - currentTime);
  };
};
