// 35. Search Insert Position

const searchInsert = (data, target) => {
  let left = 0,
    right = data.length - 1;

  while (left < right) {
    let mid = Math.trunc((left + right) / 2);

    if (data[mid] === target) return mid;
    else if (data[mid] > target) {
      right = mid;
    } else left = mid + 1;
  }

  return left;
};

let nums = [1, 3, 5, 6],
  target = 2;

console.log(searchInsert(nums, target));
