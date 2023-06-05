// 1295. Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let str = nums[i] + "";

    if (str.length % 2 === 0) {
      count++;
    }
  }

  return count;
};
