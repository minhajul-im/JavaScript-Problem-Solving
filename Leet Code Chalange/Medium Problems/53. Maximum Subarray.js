// runtime 71
var maxSubArray = function (nums) {
  let sum = 0;

  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];

    max = Math.max(sum, max);
  }

  return max;
};

// runtime 78

var maxSubArray = function (nums) {
  let sum = 0;

  let max = -99999;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};
