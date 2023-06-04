// 2496. Maximum Value of a String in an Array

var maximumValue = function (strs) {
  return Math.max(...strs.map((str) => (isNaN(+str) ? str.length : +str)));
};
