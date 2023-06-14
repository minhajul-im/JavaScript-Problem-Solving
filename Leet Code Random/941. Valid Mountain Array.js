// 941. Valid Mountain Array

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1;

  while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
    if (arr[right] < arr[right - 1]) {
      --right;
    }

    if (arr[left] < arr[left + 1]) {
      ++left;
    }
  }

  if (left !== right || left === arr.length - 1 || right === 0) {
    return false;
  }

  return true;
};

let arr = [0, 3, 2, 1];

console.log(validMountainArray(arr));
