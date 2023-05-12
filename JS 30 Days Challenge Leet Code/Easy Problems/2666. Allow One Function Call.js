// 2666. Allow One Function Call

var once = function (fn) {
  let result,
    condition = false;

  return function (...args) {
    if (!condition) {
      result = fn(...args);

      condition = true;

      return result;
    }

    return undefined;
  };
};
