// 2620. Counter
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
