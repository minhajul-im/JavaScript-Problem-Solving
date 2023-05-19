// 34. Find First and Last Position of Element in Sorted Array

// fast position
function fastPosition(nums, target) {
  let index = -1,
    left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);

    if (nums[mid] === target) index = mid;

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
}

//last position
function lastPosition(nums, target) {
  let index = -1,
    left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);

    if (nums[mid] === target) index = mid;

    if (nums[mid] <= target) {
      left = ++mid;
    } else {
      right = --mid;
    }
  }

  return index;
}

// result
var searchRange = function (nums, target) {
  let result = [];

  result[0] = fastPosition(nums, target);
  result[1] = lastPosition(nums, target);

  return result;
};

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;

console.log(searchRange(nums, target));
