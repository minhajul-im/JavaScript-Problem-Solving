// 704. Binary Search

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;

  while (left <= right) {
    mid = Math.trunc((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = --mid;
    } else {
      left = ++mid;
    }
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

console.log(search(nums, target));
