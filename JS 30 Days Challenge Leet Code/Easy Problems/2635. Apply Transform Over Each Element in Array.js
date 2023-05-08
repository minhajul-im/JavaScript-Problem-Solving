// 2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

let arr = [1, 2, 3],
  fn = function plusone(n) {
    return n + 1;
  };
console.log(map(arr, fn));
